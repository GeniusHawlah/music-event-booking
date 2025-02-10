import Image from "next/image";
import React, { Suspense } from "react";
import LocalList from "./LocalList";
import InternationalList from "./InternationalList";
import EventTabs from "./EventTabs";
import { Skeleton } from "@radix-ui/themes";
import { fetchEvents } from "@/utils/fetchers";

async function PopularEvents() {
  const events = fetchEvents({ take: 27 });

  return (
    <div
      key={Math.random()}
      id="popular_events"
      className="gen-padding pt-20 pb-20 scroll-mt-20 bg-pry-bg"
    >
      <h1 className="text-[24px] md:mb-2 890:text-[30px] text-header-color  font-bold leading-9 text-center">
        POPULAR EVENTS
      </h1>

      <div>
        {/* //>LIST HEADER */}
        <EventTabs />
        <Suspense
          fallback={
            <Skeleton className="h-56 mt-10  rounded-lg !bg-gray-500" />
          }
        >
          <LocalList events={events} />
          <InternationalList events={events} />
        </Suspense>
      </div>
    </div>
  );
}

export default PopularEvents;
