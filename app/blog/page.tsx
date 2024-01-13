import { BlogPostsInterface } from "@/lib/interfaces";
import { getSortedBlogsData } from "@/lib/blogs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";

export default function Page({ searchParams, }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const allBlogs: BlogPostsInterface = getSortedBlogsData()
  const page = searchParams[`page`] ?? `1`
  const per_page = 2
  const totalPages: number = Math.ceil(allBlogs.length / per_page)

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)

  const data = allBlogs.slice(start, end)
  return (
    <div>
      <ul>
        {data.map(e => (
          <li key={e.id}><Link href={`/blog/${e.slug}`}>{e.title}</Link></li>
        ))}
      </ul>
      <div>

        {Number(page) != 1 ? <Button variant="outline" size="icon" asChild>
          <Link href={`/blog?page=${Number(page) - 1!}`}>
            <ChevronLeftIcon className="h-4 w-4" />
          </Link>
        </Button> : null}
        {Number(page) != totalPages ? <Button variant="outline" size="icon" asChild>
          <Link href={`/blog?page=${Number(page) + 1}`}>
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </Button> : null}
      </div>
    </div>
  );
}

export const metadata = {
  title: "blog",
  description: "all blog posts",
};
