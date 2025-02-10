"use server";

import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";
import { format } from "date-fns";
import { db } from "@/utils/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { CreateWishSchema } from "@/utils/zod";

export const createEvent = async ({
  title,
  description,
  timeCreated,
  eventDate,
  numberOfSeats,
  lastModified,
  artistes,
  eventImage,
  genre,
  location,
  type
}) => {
  // const validatedFields = CreateWishSchema.safeParse({
  //   itemName,
  //   description,
  // });

  // if (!validatedFields.success) {
  //   console.log(validatedFields.error.errors[0].message);
  //   return { status: "fail", message: validatedFields.error.errors[0].message };
  // }

   // Generate an array of seats
   const seats = Array.from({ length: numberOfSeats }, (_, index) => ({
    id: `seat_${index + 1}`,
    number: index + 1,
    isTaken: false,
    takenBy: null,
  }));

  const dataToSend = {
    title,
    description,
    timeCreated,
    eventDate,
    numberOfSeats,
    lastModified,
    attendees: JSON.stringify([]),
    artistes,
    eventImage,
    genre,
    seats: JSON.stringify(seats),
    location,
    type
  };

  // console.log(dataToSend);

  try {




    await db.event.create({
      data: dataToSend,
    });
    console.log("Event created successfully!");
    revalidatePath("/");
    // return { status: "success", message: "Wish created successfully!" };
  } catch (error) {
    console.log(error);
    return { status: "fail", message: "Something went wrong." };
  }
  // redirect("/profile");
};
