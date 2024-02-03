import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { BlogPostInterface, BlogPostsInterface } from "./interfaces";

const blogsDir = path.join(process.cwd(), "db/blogs");

export function getSortedBlogsData(): BlogPostsInterface {
  const filenames = fs.readdirSync(blogsDir);
  const allBlogs = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, ""); // remove .md
    const fullPath = path.join(blogsDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    const blogPost: BlogPostInterface = {
      title: matterResult.data.title,
      author:matterResult.data.author,
      date: matterResult.data.date,
      slug: matterResult.data.title.toLowerCase().split(' ').join('-'),
      id,
      subtitle:matterResult.data.subtitle,
      content: matterResult.content,
    };

    return blogPost;
  });

  return allBlogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}
