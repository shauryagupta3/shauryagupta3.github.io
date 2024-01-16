import BlogPagination from "@/components/BlogPagination";
import { Suspense } from "react";
import { getSortedBlogsData } from "@/lib/blogs";

function PaginationFallback() {
  return <>placeholder</>;
}

export default function Page() {
  return (
    <Suspense fallback={<PaginationFallback />}>
      <BlogPagination allBlogs={getSortedBlogsData()} />
    </Suspense>
  );
}

export const metadata = {
  title: "blog",
  description: "all blog posts",
};
