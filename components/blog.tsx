import { BlogPostInterface } from "@/lib/interfaces";
import { remark } from "remark";
import html from "remark-html"
export default async function Blog({ blog }: { blog: BlogPostInterface }) {
  const contentHTML: string = await getBlogContent(blog)
  return (
    <>
      <title>{blog.title}</title>
      <br />
      <p className="text-center text-6xl">{blog.title}</p>
      <br />
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </>
  );
}

async function getBlogContent(blog: BlogPostInterface): Promise<string> {
  const processedContent = await remark().use(html).process(blog.content)
  const content = processedContent.toString()
  return content
}
