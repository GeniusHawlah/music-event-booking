import { fetchEventData, fetchEvents } from "@/utils/fetchers";
import React, { Suspense } from "react";

import EventSeats from "./EventSeats";
import EventDetailsComponents from "./EventDetailsComponents";
import { Skeleton } from "@radix-ui/themes";

async function EventID({ params }) {
  const { eventID } = await params;

  const eventData = fetchEventData({ eventID });

  const awaitedEventData = await fetchEventData({ eventID });

  if (!awaitedEventData?.title) {
    return (
      <div className="gen-padding bg-[#0B0E31] h-screen text-the-white pt-5">
        Invalid event!
      </div>
    );
  }

  if (awaitedEventData?.notFound) {
    return (
      <div className="gen-padding bg-[#0B0E31] h-screen text-the-white pt-5">
        Event not found!
      </div>
    );
  }

  return (
    <div className="gen-padding bg-[#0B0E31]" key={Math.random()}>
      <Suspense
        fallback={<Skeleton className="h-56 mt-10  rounded-lg !bg-gray-500" />}
      >
        <EventDetailsComponents eventData={eventData} />
      </Suspense>


        <EventSeats eventID={eventID} />
    </div>
  );
}

export async function generateStaticParams() {
  const events = await fetchEvents({ take: 500 });

  return events.map((event) => ({
    eventID: event.id,
  }));
}

export async function generateMetadata({ params }) {
  const { eventID } = await params;

  const eventData = await fetchEventData({ eventID });

  return {
    title: `${eventData?.title}`,

    description: `${eventData?.description}`,

    openGraph: {
      title: `${eventData?.title}`,
      description: `${eventData?.description}`,
      url: `https://fobework-music-event-booking.vercel.app/events/${eventData?.id}`,
      images: [
        {
          url: "https://fobework-music-event-booking.vercel.app/images/OG_Image.png",
          width: 630,
          height: 630,
          alt: "Music Event Booking Logo",
        },
      ],
      type: "website",
      siteName: "Music Event Booking",
    },

    twitter: {
      card: "summary_large_image",
      title: `${eventData?.title}`,
      description: `${eventData?.description}`,
      images: [
        "https://fobework-music-event-booking.vercel.app/images/OG_Image.png",
      ],
    },
  };
}

export default EventID;
