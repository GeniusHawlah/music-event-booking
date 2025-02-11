"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { generalStore } from "@/app/(store)/zustand/generalStore";
import EventCard from "@/app/components/EventCard";
import NothingToDisplay from "@/app/components/NothingToDisplay";

function EventList({ events }) {
  const router = useRouter();

  const resolvedEvents = use(events);

  const refreshHandler = generalStore((state) => state.refreshHandler);

  return (
    <div className="">
      {" "}
      <div className="grid gap-2 560:gap-4 grid-cols-1 750:grid-cols-2 1130:grid-cols-3 mt-10 text-xs 350:text-sm sm:text-base">
        {resolvedEvents.map((event) => (
          <EventCard
            key={event?.id}
            title={event?.title}
            description={event?.description}
            eventDate={event?.eventDate}
            location={event?.location}
            imageUrl={event?.eventImage}
            artistes={event?.artistes}
            eventID={event?.id}
            seats={event?.seats}
          />
        ))}

   
      </div>
      {resolvedEvents.length === 0 && <NothingToDisplay />}
    </div>
  );
}

export default EventList;
