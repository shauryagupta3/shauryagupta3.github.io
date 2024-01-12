import { getSortedBlogsData } from "@/lib/blogs";
import { BlogPostInterface, BlogPostsInterface } from "@/lib/interfaces";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html"


export default async function Slug({ params }: { params: { slug: string } }) {
  const blogSlug: string = params.slug;
  const allBlogs: BlogPostsInterface = getSortedBlogsData()
  const blog = allBlogs.find((e) => e.slug === blogSlug);
  if (!blog) {
    return notFound();
  }
  const contentHTML: string = await getBlogContent(blog)
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="max-w-screen-md">
        <title>{blog.title}</title>
        <br />
        <p className="text-center text-6xl">{blog.title}</p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </div>
    </div>
  );
}
async function getBlogContent(blog: BlogPostInterface): Promise<string> {
  const processedContent = await remark().use(html).process(blog.content)
  const content = processedContent.toString()
  return content
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
