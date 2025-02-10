"use server";

import { db } from "@/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { BookSeatSchema } from "@/utils/zod";

export const bookSeat = async ({
  eventID,
  seatNumber,
  email,
  firstName,
  lastName,
}) => {
  const validatedFields = BookSeatSchema.safeParse({
    eventID,
    seatNumber,
    email,
    firstName,
    lastName,
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.errors[0].message);
    return { status: "fail", message: validatedFields.error.errors[0].message };
  }

  // console.log({eventID, seatNumber, email, firstName, lastName});
  // return

  try {
    // //>Ensure the event exists
    const event = await db.event.findUnique({
      where: { id: eventID },
    });

    if (!event) {
      return {
        status: "fail",
        message:
          "This event does not exist or has been deleted. Go back, reload, and try again.",
      };
    }

    ////> Parse the seats JSON field
    let seats = event?.seats ? JSON.parse(event.seats) : [];

    if (!seats) {
      return {
        status: "fail",
        message:
          "There are no seats for this event. Go back, reload, and try again.",
      };
    }

    ////> Find the seat by number using findIndex so I can manipulate directly
    const seatIndex = seats.findIndex((seat) => seat.number == seatNumber);

    if (seatIndex === -1) {
      return {
        status: "fail",
        message:
          "The seat you are trying to book does not exist. Go back, reload, and try again.",
      };
    }

    //>If found, check if itt's taken
    if (seats[seatIndex].isTaken) {
      return {
        status: "fail",
        message:
          "This seat is taken by another person. Go back, reload, and try again.",
      };
    }

    //> Mark seat as taken and assign it to the user
    seats[seatIndex] = {
      ...seats[seatIndex],
      isTaken: true,
      takenBy: email,
    };

    // //>Repeat a similar thing on attendees
    let attendees = event.attendees ? JSON.parse(event.attendees) : [];

    //>If the list is empty, push this in
    if (!attendees) {
      attendees.push({
        id: crypto.randomUUID(),
        email,
        seatsBooked: [seatNumber],
      });
    } else {
      //> Find if the person booking is already an attendee
      const attendeeIndex = attendees.findIndex((att) => att.email === email);
      // //>If they are not
      if (attendeeIndex === -1) {
        attendees.push({
          id: crypto.randomUUID(),
          email,
          seatsBooked: [seatNumber],
        });
      } else {
        // >If they are, update the list of seats booked
        attendees[attendeeIndex].seatsBooked.push(seatNumber);
      }
    }

    // //>Now update the event with the new seat and attendee manipulations
    await db.event.update({
      where: { id: eventID },
      data: {
        seats: JSON.stringify(seats),
        attendees: JSON.stringify(attendees),
      },
    });

    // >Send email
  const res =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        toEmail: email,
        fromName: "Fobework",
        subject: "Seat Reservation",
        body: `Hello ${firstName}! You have booked seat number ${seatNumber} at the upcoming event titled ${event?.title}. Have fun!`,
      }),
    });

    const result = await res.json()
    console.log(result)

    console.log("Seat booked successfully!");
    revalidatePath(`/events/${eventID}`);

    return {
      status: "success",
      message: "Seat booked successfully!",
    };
  } catch (error) {
    console.log(error);
    return { status: "fail", message: "Something went wrong." };
  }
  // redirect(`/events/${eventID}`);
};
