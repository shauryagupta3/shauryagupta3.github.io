import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { BlogPostInterface } from "./interfaces";

const blogsDir = path.join(process.cwd(), "db/blogs");

export function getSortedBlogsData(): BlogPostInterface[] {
  const filenames = fs.readdirSync(blogsDir);
  const allBlogs = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, ""); // remove .md
    const fullPath = path.join(blogsDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    const blogPost: BlogPostInterface = {
      title: matterResult.data.title,
      date: matterResult.data.date,
      id: id,
    };

    return blogPost;
  });

  return allBlogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}
