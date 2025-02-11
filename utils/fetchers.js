import { unstable_cache } from "next/cache";
import { db } from "./db";

// //>FETCH EVENT DATA
export const fetchEventData = unstable_cache(
  async ({ eventID = "" } = {}) => {
    const event = await db.event?.findUnique({
      where: {
        id: eventID,
      },
    });
    if (event) {
      return {
        ...event,
        attendees: event?.attendees ? JSON.parse(event.attendees) : [],
        seats: event?.seats ? JSON.parse(event.seats) : [],
      };
    } else {
      return { notFound: true };
    }
  },
  ["event_data"],
  { revalidate: 5, tags: ["event_data"] }
);

// >FETCH EVENTS
export const fetchEvents = unstable_cache(
  async ({ skip = undefined, take = undefined, search = "" } = {}) => {
    const valid = await db.event?.findMany({
      where: {
        ...(search && {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
            { location: { contains: search, mode: "insensitive" } },
            { genre: { contains: search, mode: "insensitive" } },
            { artistes: { hasSome: [search] } },
          ],
        }),
      },
      skip,
      take,
    });

    // Parse the JSON fields (attendees and seats) if data exists
    if (valid) {
      let events = valid
        .map((event) => {
          // console.log(event.eventDate)
          return {
            ...event,
            attendees: event.attendees ? JSON.parse(event.attendees) : [],
            seats: event.seats ? JSON.parse(event.seats) : [],
          };
        })
        .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
      // console.log(events)

      return events;
    }

    return [];
  },
  ["events"],
  { revalidate: 5, tags: ["events"] }
);
