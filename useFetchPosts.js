import { useState, useEffect } from "react";

export default function useFetchPosts() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
        setFiltered(data);
      } catch (err) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = posts.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredData);
    setPage(1); // Reset to first page on search
  }, [search, posts]);

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  return {
    posts: paginated,
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    totalPages,
  };
}
