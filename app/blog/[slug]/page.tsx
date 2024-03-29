import { getSortedBlogsData } from "@/lib/blogs";
import { BlogPostInterface, BlogPostsInterface } from "@/lib/interfaces";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";
import Head from "next/head";

export function generateStaticParams() {
  const allBlogs: BlogPostsInterface = getSortedBlogsData();
  return allBlogs.map((e) => ({ slug: e.slug }));
}

export default async function Slug({ params }: { params: { slug: string } }) {
  const blogSlug: string = params.slug;
  const allBlogs: BlogPostsInterface = getSortedBlogsData();
  const blog = allBlogs.find((e) => e.slug === blogSlug);
  if (!blog) {
    return notFound();
  }
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Head>
        <title>{blog.title}</title>
      </Head>
      <div className="max-w-[90%] sm:max-w-screen-md">
        <article className="prose px-2 prose-sm lg:prose-xl dark:prose-invert">
          <h1>{blog.title}</h1>
          <p className="font-bold underline italic">By {blog.author} published on {blog.date}</p>
          <Markdown>{blog.content}</Markdown>
        </article>
      </div>
    </div>
  );
}

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const all_blogs: BlogPostInterface[] = getSortedBlogsData();
  const blogSlug: string = params.slug;

  const blog = all_blogs.find((e) => e.slug === blogSlug);
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
