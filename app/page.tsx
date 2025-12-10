export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Kanibalismo</h1>
      <p className="text-lg text-gray-700">
        A minimalist sanctuary for private thoughts, published as Markdown.
      </p>
      <p className="mt-4">
        Visit <a href="/thoughts" className="text-blue-600">/thoughts</a> to see posts.
      </p>
    </div>
  );
}