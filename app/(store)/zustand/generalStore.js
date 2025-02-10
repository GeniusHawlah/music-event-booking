import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { revalidateThePath, revalidateTheTag } from "@/actions/revalidate";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { createEvent } from "@/actions/event-actions/createEvent";
import { bookSeat } from "@/actions/event-actions/bookSeat";

export const generalStore = create(
  devtools(
    persist(
      (set, get) => {
        return {
          sendingData: false,
          refreshing: false,
          booking: false,

          eventData: {},
          setEventData: (value) => set({ eventData: value }),

          frontendFetching: false,
          setFrontendFetching: (value) => set({ frontendFetching: value }),

          menuClicked: false,
          setMenuClicked: (value) => set({ menuClicked: value }),

          searchKeyword: "",
          setSearchKeyword: (value) => set({ searchKeyword: value }),

          eventCategory: "local",
          setEventCategory: (value) => set({ eventCategory: value }),

          // //>CREATE EVENT HANDLER
          createEventHandler: async ({
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
            type,
          }) => {
            const dataToSend = {
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
              type,
            };

            // console.log(dataToSend);
            // set({ sendingData: false });
            // return;

            set({ sendingData: true });

            const data = await createEvent(dataToSend);

            if (data?.status === "fail") {
              set({ sendingData: false });
              console.log(data);
              toast.error(data.message);
              return;
            }

            // console.log(data);
            // set({ sendingData: false });
            // return

            setTimeout(() => {
              set({ sendingData: false });
              toast.success("Event created successfully!");
              // redirect("/profile");
            }, 2000);
          },

          // //>FETCH EVENT DATA FRONTEND
          fetchEventHandlerFrontend: async ({ eventID }) => {
            set({ frontendFetching: true });

            const res = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_URL}/events/event-data-route?eventID=${eventID}`,
              {
                headers: { "Content-Type": "application/json" },
              }
            );

            if (!res.ok) {
              console.log("Res not Ok");
              set({ frontendFetching: false });
              toast.error("Response not OK!");
              return {
                status: "fail",
                message: "Response not OK!",
              };
            }

            const result = await res.json();

            // console.log(result);
            // return;

            if (result.status === "fail") {
              console.log(result?.message);
              set({ frontendFetching: false });
              return {
                status: "fail",
                message: result?.message,
              };
            }

            if (result.status === "success") {
              set({ eventData: result?.event });
              set({ frontendFetching: false });
              // console.log(result?.message);
              return {
                status: "success",
                message: result?.message,
              };
            }
          },

          // //>BOOK SEAT HANDLER
          bookSeatHandler: async ({
            eventID,
            seatNumber,
            email,
            firstName,
            lastName,
          }) => {
            set({ booking: true });

            const data = await bookSeat({
              eventID,
              seatNumber,
              email,
              firstName,
              lastName,
            });

            if (data?.status === "fail") {
              set({ booking: false });
              console.log(data);
              toast.error(data.message);
              return;
            }

            setTimeout(() => {
              set({ booking: false });
              toast.success(data?.message);
              redirect(`/events/${eventID}`);
            }, 2000);
          },

          // //>REFRESH HANDLER
          refreshHandler: async ({ path = "", tag = "" }) => {
            set({ refreshing: true });
            await revalidateThePath(path);
            await revalidateTheTag(tag);
            set({ refreshing: false });
          },
        };
      },

      {
        name: "persistedData",
        partialize: (state) => ({
          searchKeyword: state.searchKeyword,
          eventCategory: state.eventCategory,
        }),
      }
    )
  )
);
