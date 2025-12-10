import { getPostsByTag } from "@/lib/posts";

interface Props {
  params: { tag: string };
}

export default async function TagPage({ params }: Props) {
  const posts = await getPostsByTag(params.tag);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Posts tagged "{params.tag}"</h1>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">{post.date}</p>
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}