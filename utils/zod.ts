import * as z from "zod";

export const BookSeatSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required" })
    .min(3, { message: "First Name must be at least three characters long" }),

  lastName: z
    .string({ required_error: "Last Name is required" })
    .min(3, { message: "Last Name must be at least three characters long" }),

  email: z
    .string({ required_error: "Email is required" }) // Ensures the field exists
    .min(1, { message: "Email cannot be empty!" })
    .email({ message: "Email is invalid" }),

  eventID: z
    .string({
      required_error:
        "Seems you did not choose an event. Reload and try again.",
    })
    .min(1, {
      message: "Seems you did not choose an event. Reload and try again.",
    }),

  seatNumber: z
    .string({
      required_error: "Seems you did not choose a seat. Reload and try again.",
    })
    .min(1, {
      message: "Seems you did not choose a seat. Reload and try again.",
    }),
});
