import Blog from "@/components/blog";
import { getSortedBlogsData } from "@/lib/blogs";
import { BlogPostInterface } from "@/lib/interfaces";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Slug({ params }: { params: { slug: string } }) {
  const all_blogs: BlogPostInterface[] = getSortedBlogsData();
  const blogSlug: string = params.slug;

  const blog = all_blogs.find((e) => e.slug === blogSlug);
  console.log(blog)
  if (!blog) {
    return notFound();
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="max-w-screen-md">
        <Blog blog={blog} />
      </div>
    </div>
  );
}

export const generateMetadata = ({
  params,
}: {
  params: { id: string };
}): Metadata => {
  const all_blogs: BlogPostInterface[] = getSortedBlogsData();
  const blogID: string = params.id;

  const blog = all_blogs.find((e) => e.id === blogID);
  if (!blog) {
    return {
      title: `Blog not found`,
      description: ``,
    };
  }

  return {
    title: blog.title,
  };
};
