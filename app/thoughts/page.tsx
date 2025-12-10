import { getAllPosts } from "@/lib/posts";

export default async function ThoughtsPage() {
  const posts = await getAllPosts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Thoughts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{post.date}</p>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <p className="text-sm text-blue-600">
              Tags: {post.tags?.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}