import Image from "next/image";
import React, { Suspense } from "react";
import EventList from "@/app/components/landing/EventList";
import { Skeleton } from "@radix-ui/themes";
import { fetchPopularEvents } from "@/utils/fetchers";

async function PopularEvents({ search, page, itemsPerPage }) {

  const events = fetchPopularEvents({
    take: 27,
  });

  return (
    <div id="popular_events"
      key={Math.random()}
      className="gen-padding pt-20 pb-20 scroll-mt-20 bg-pry-bg"
    >
      <h1 className="text-[24px] md:mb-2 890:text-[30px] text-header-color text-the-white font-bold leading-9 text-center">
        POPULAR EVENTS
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
    </div>
  );
}

export default PopularEvents;
