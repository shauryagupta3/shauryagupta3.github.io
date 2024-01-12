import { BlogPostsInterface } from "@/lib/interfaces";
import { getSortedBlogsData } from "@/lib/blogs";
import Link from "next/link";

export default async function Blog() {
  const blogs: BlogPostsInterface = getSortedBlogsData();
  const hello: String = "hello"
  console.log(blogs)
  return (
    <div>
      <p>blogs</p>
      <p>{hello}</p>
      <ul>
        {blogs.map((e) => {
          return (
            <li key={e.id}>
              <Link href={`/blog/${e.slug}`}>{e.title}</Link>
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
