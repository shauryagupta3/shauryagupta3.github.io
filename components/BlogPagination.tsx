"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useSearchParams } from "next/navigation"


export default function BlogPagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const pages = []
  for (let i = 1; i < totalPages + 1; i++) {
    const page: { url: string } = { url: `blog?page=${i}` }
    pages.push(page)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`blog?page=${currentPage - 1 != 0 ? currentPage - 1 : 1}`} />
        </PaginationItem>

        {/*pages.map((e, i) => (
          <PaginationItem key={i}>
            <PaginationLink href={e.url}>{i + 1}</PaginationLink>
          </PaginationItem>
        ))*/}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`blog?page=${currentPage + 1 != totalPages ? currentPage + 1 : totalPages}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
