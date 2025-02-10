import { fetchEvents } from "@/utils/fetchers";
import React, { Suspense } from "react";
import SearchBar from "../components/navbar/SearchBar";

import { Skeleton } from "@radix-ui/themes";
import PaginationButtons from "../components/PaginationButtons";
import PopularEvents from "../components/landing/PopularEvents";

async function Members(props) {
  const searchParams = await props.searchParams;
  const { limit, offset, status, search } = searchParams;
  const page = parseInt(searchParams.page) || 1;
  const itemsPerPage = 2;

  const events = fetchEvents({
    skip: (page - 1) * itemsPerPage,
    take: itemsPerPage,
    search,
  });

  const eventsCount = fetchEvents({
    search,
  });

  return (
    <div className="gen-padding bg-pry-bg" key={Math.random()}>
      {/* //>Search Bar */}
      <div className="flex 830:hidden items-center justify-center">
        <SearchBar />
      </div>

      <div className=" mt-10">
      <div className="flex justify-center md:justify-start ">
        <h1 className="font-bold text-the-white text-3xl mb-10 ">All Events</h1>
      </div>

    <PopularEvents/>
      </div>

      <Suspense fallback={<Skeleton className="h-10 mt-10 rounded-lg" />}>
        <div className="flex items-center justify-center mt-10">
          <PaginationButtons
            paginatedItems={events}
            totalItems={eventsCount}
            itemsPerPage={itemsPerPage}
            currentPage={page}
          />
        </div>
      </Suspense>
    </div>
  );
}

export default Members;
