export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-8 text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      <div className="space-x-4 mt-2">
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
      </div>
    </footer>
  );
}
