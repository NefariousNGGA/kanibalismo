import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDir = path.join(process.cwd(), "content");

export async function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(postsDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      return {
        slug: file.replace(/\.md$/, ""),
        ...data,
        content: processedContent.toString(),
      };
    })
  );
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags?.includes(tag));
        }
