import { BlogPostsInterface } from "@/lib/interfaces";
import { getSortedBlogsData } from "@/lib/blogs";
import Link from "next/link";

export default function Page() {
  const allBlogs: BlogPostsInterface = getSortedBlogsData()
  return (
    <div>
      <p>blogs</p>
      <ul>
        {allBlogs.map((e) => {
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
