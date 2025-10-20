import useFetchPosts from "../utils/useFetchPosts";
import Button from "./Button";

export default function PostList() {
  const {
    posts,
    loading,
    error,
    search,
    setSearch,
    page,
    setPage,
    totalPages,
  } = useFetchPosts();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search posts..."
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white shadow p-4 rounded">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span>Page {page} of {totalPages}</span>
        <Button
          variant="secondary"
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
