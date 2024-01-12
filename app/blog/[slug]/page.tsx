import { getSortedBlogsData } from "@/lib/blogs";
import { BlogPostInterface, BlogPostsInterface } from "@/lib/interfaces";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify"

export default async function Slug({ params }: { params: { slug: string } }) {
  const blogSlug: string = params.slug;
  const allBlogs: BlogPostsInterface = getSortedBlogsData()
  const blog = allBlogs.find((e) => e.slug === blogSlug);
  if (!blog) {
    return notFound();
  }

  marked.use({
    async: true,
    pedantic: false,
    gfm: true,
    breaks: true,
  })
  const contents = await (marked.parse(blog.content.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
  ))

  var clean_contents: string = ""
  if (typeof (contents) === "string") {
    clean_contents = DOMPurify.sanitize(contents)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="max-w-screen-md">
        <title>{blog.title}</title>
        <br />
        <p className="text-center text-6xl">{blog.title}</p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: clean_contents }} />
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
