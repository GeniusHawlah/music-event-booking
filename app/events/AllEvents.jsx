import Image from "next/image";
import React, { Suspense } from "react";
import EventList from "./EventList";
import { Skeleton } from "@radix-ui/themes";
import { fetchEvents } from "@/utils/fetchers";
import PaginationButtons from "../components/PaginationButtons";

async function AllEvents({ search, page, itemsPerPage }) {
  // const events = fetchEvents({ take: 27 });

  const events = fetchEvents({
    skip: (page - 1) * itemsPerPage,
    take: itemsPerPage,
    search,
  });

  const eventsCount = fetchEvents({
    search,
  });

  return (
    <div
      key={Math.random()}
      className="gen- pt-20 pb-20 scroll-mt-20 bg-pry-bg"
    >
      <h1 className="text-[24px] md:mb-2 890:text-[30px] text-header-color text-the-white font-bold leading-9 text-center">
        BROWSE EVENTS
      </h1>

      <div>
        {/* //>LIST HEADER */}
        {/* <EventTabs /> */}
        <Suspense
          fallback={
            <Skeleton className="h-56 mt-10  rounded-lg !bg-gray-500" />
          }
        >
          <EventList events={events} />
        </Suspense>
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

export default AllEvents;
