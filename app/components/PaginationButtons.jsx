"use client";

import { Icon } from "@iconify/react";
import { Skeleton } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, use } from "react";

function PaginationButtons({
  paginatedItems,
  totalItems,
  itemsPerPage,
  currentPage,
}) {
  const resolvedPaginatedItems = use(paginatedItems);
  const paginatedItemsCount = resolvedPaginatedItems?.length;
  const resolvedTotalItems = use(totalItems);
  const totalItemsCount = resolvedTotalItems?.length;

  const router = useRouter();
  const searchParams = useSearchParams();
  const totalNumberOfPages = Math.ceil(totalItemsCount / itemsPerPage);

  function changePage(page) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  }

  if (totalNumberOfPages <= 1 || paginatedItemsCount === 0) return null;
  return (
  //  <Suspense fallback={<Skeleton className="h-10 mt-10 rounded-lg" />}>
      <div className="mt-1">
        <p className="text-center text-sm">
          Page {currentPage} of {totalNumberOfPages}
        </p>
        <div className="flex items-center gap-x-5 mt-2 text-sm text-text-gray">
          {/* //>First page */}
          <button
            onClick={() => {
              changePage(1);
            }}
            disabled={currentPage === 1}
            className="rounded w-9 h-9  duration-300 hover:bg-gray-50 flex justify-center items-center  border border-red-900  disabled:text-gray-300 disabled:border-gray-300"
          >
            1
          </button>

          {/* //>Previous page */}
          <button
            onClick={() => {
              changePage(currentPage - 1);
            }}
            disabled={currentPage === 1}
            className="rounded   duration-300 hover:bg-gray-50 flex justify-center items-center w-9 h-9 border border-red-900 text-red-900  disabled:text-gray-300 disabled:border-gray-300"
          >
            <Icon icon="mingcute:left-line" className="text-xl " />
          </button>

          {/* //>Next page */}
          <button
            onClick={() => {
              changePage(currentPage + 1);
            }}
            disabled={currentPage === totalNumberOfPages}
            className="rounded w-9 h-9  duration-300 hover:bg-gray-50 flex justify-center items-center  border border-red-900 text-red-900  disabled:text-gray-300 disabled:border-gray-300"
          >
            <Icon icon="mingcute:right-line" className="text-xl" />
          </button>

          {/* //>Last page */}
          <button
            onClick={() => {
              changePage(totalNumberOfPages);
            }}
            disabled={currentPage === totalNumberOfPages}
            className="rounded w-9 h-9  duration-300 hover:bg-gray-50 flex justify-center items-center  border border-red-900 text-red-900 disabled:text-gray-300 disabled:border-gray-300"
          >
            {totalNumberOfPages}
          </button>
        </div>
      </div>
  //  </Suspense>
  );
}

export default PaginationButtons;
