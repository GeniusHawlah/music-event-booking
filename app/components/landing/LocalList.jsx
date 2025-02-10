"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { generalStore } from "@/app/(store)/zustand/generalStore";
import EventCard from "../EventCard";
import NothingToDisplay from "@/app/components/NothingToDisplay";

function LocalList({ events }) {
  const router = useRouter();

  const resolvedEvents = use(events);

  const localEvents = resolvedEvents.filter((event) => event?.type === "local");

  const refreshHandler = generalStore((state) => state.refreshHandler);
  const eventCategory = generalStore((state) => state.eventCategory);

  return (
    <div className="">
      {eventCategory === "local" && (
        <div className="grid gap-2 560:gap-4 grid-cols-1 750:grid-cols-2 1130:grid-cols-3 mt-10 text-xs 350:text-sm sm:text-base">
          {localEvents.map((event) => (
            <EventCard
              key={event?.id}
              title={event?.title}
              description={event?.description}
              eventDate={event?.eventDate}
              location={event?.location}
              imageUrl={event?.eventImage}
              artistes={event?.artistes}
              eventID={event?.id}
            />
          ))}

          {localEvents.length > 0 && (
            <div className=" flex px-2 560:px-4 py-2 560:py-4 space-x-1 560:space-x-3 text-pry-color justify-center items-center">
              <button
                onClick={() => {
                  router.push("/events");
                }}
                className="px-4 py-2 bg-the-white hover:bg-hover-blue text-the-pink border-the-pink border rounded-xl  font-medium 890:text-lg hover:border-the-white hover:text-the-white"
              >
                See More
              </button>
            </div>
          )}
        </div>
      )}

      {localEvents.length === 0 && eventCategory === "local" && (
        <NothingToDisplay />
      )}
    </div>
  );
}

export default LocalList;
