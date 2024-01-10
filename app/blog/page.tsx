import { productInterface, BlogPostsInterface } from "@/lib/interfaces";
import { getSortedBlogsData } from "@/lib/blogs";
import Link from "next/link";

export default async function Blog() {
  const blogs: BlogPostsInterface = getSortedBlogsData();
  return (
    <div>
      <p>blogs</p>
      <ul>
        {blogs.map((e) => {
          return (
            <li key={e.id}>
              <Link href={`/blog/${e.id}`}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const metadata = {
  title: "blog",
  description: "all blog posts",
};
