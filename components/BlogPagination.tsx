"use client";

import { BlogPostsInterface } from "@/lib/interfaces";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function BlogPagination({
  allBlogs,
}: {
  allBlogs: BlogPostsInterface;
}) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? `1`;
  const per_page = 5;
  const totalPages: number = Math.ceil(allBlogs.length / per_page);
  if (Number(page) > totalPages) {
    return notFound();
  }

  // TODO do css for this page
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const data = allBlogs.slice(start, end);
  return (
    <div className="flex py-4 flex-col justify-center items-center">
      <ul>
        {data.map((e) => (
          <li key={e.id} className="border rounded-lg my-2 p-6">
            <Link href={`/blog/${e.slug}`}>
              <h2 className="text-2xl sm:text-3xl pb-2 font-bold">{e.title}</h2>
              <hr className="" />
              <p>{e.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        {Number(page) != 1 ? (
          <Button variant="outline" size="icon" asChild>
            <Link href={`/blog?page=${Number(page) - 1!}`}>
              <ChevronLeftIcon className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}
        {Number(page) != totalPages ? (
          <Button variant="outline" size="icon" asChild>
            <Link href={`/blog?page=${Number(page) + 1}`}>
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
