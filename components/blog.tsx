import { BlogPostInterface } from "@/lib/interfaces";
export default function Blog({ blogPost }: { blogPost: BlogPostInterface }) {
  function createMarkup() {
    return { __html: blogPost.content_html };
  }

  return (
    <>
      <title>{blogPost.title}</title>
      <br />
      <p className="text-center text-6xl">{blogPost.title}</p>
      <br />
      <div
        className="text-center text-lg"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </>
  );
}