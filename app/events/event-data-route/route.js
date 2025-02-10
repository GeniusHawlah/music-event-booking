export const runtime = "nodejs"; // Forces Node.js runtime

import { db } from "@/utils/db";

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const eventID = searchParams.get("eventID");

    const event = await db.event?.findUnique({
      where: {
        id: eventID,
      },
    });

    if (event) {
      return Response.json({
        status: "success",
        message: "Event data retrieved!",
        event: {
          ...event,
          attendees: event?.attendees ? JSON.parse(event.attendees) : [],
          seats: event?.seats ? JSON.parse(event.seats) : [],
        },
      });
    } else {
      return Response.json({
        status: "fail",
        message: "Event not found!",
        notFound: true,
      });
    }
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        status: "fail",
        message: "An error occurred while getting event data.",
        event: [],
      },
      { status: 500 }
    );
  }
}
