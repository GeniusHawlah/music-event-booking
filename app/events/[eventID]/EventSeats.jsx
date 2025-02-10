"use client";

import { generalStore } from "@/app/(store)/zustand/generalStore";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Skeleton } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import OneSeat from "./OneSeat";

function EventSeats({ eventID }) {
  const fetchEventHandlerFrontend = generalStore(
    (state) => state.fetchEventHandlerFrontend
  );

  useEffect(() => {
    if (!eventID) return; // Ensure eventID exists before making the request
    const timer = setInterval(() => {
      fetchEventHandlerFrontend({ eventID });
    }, 5000);
    return () => clearInterval(timer);
  }, [eventID]);

  const eventData = generalStore((state) => state.eventData);
  const frontendFetching = generalStore((state) => state.frontendFetching);

  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const seats = eventData?.seats;

  const leftSeats = seats?.slice(0, Math.ceil(seats?.length / 2));
  const rightSeats = seats?.slice(Math.ceil(seats?.length / 2));

  return (
    <div
      id="select_seat"
      className="flex flex-col items-center w-full p-5  scroll-mt-20  text-white min-h-screen"
    >
      {/*//> Header */}
      <h1 className="text-3xl font-bold mb-5 text-the-white">BOOK A SEAT</h1>

      {seats?.length > 0 && (
        <div className="sm:flex gap-10 space-y-2 sm:space-y-0">
          {/*//> Left Side */}
          <div className="grid grid-cols-5 gap-2">
            {leftSeats?.map((seat) => (
              <OneSeat
                key={seat?.id}
                seat={seat}
                setOpenModal={setOpenModal}
                setSelectedSeatNumber={setSelectedSeatNumber}
                setSelectedSeat={setSelectedSeat}
                selectedSeat={selectedSeat}
              />
            ))}
          </div>

          {/*//> Right Side */}
          <div className="grid grid-cols-5 gap-2">
            {rightSeats?.map((seat) => (
              <OneSeat
                key={seat?.id}
                seat={seat}
                setOpenModal={setOpenModal}
                setSelectedSeatNumber={setSelectedSeatNumber}
                setSelectedSeat={setSelectedSeat}
                selectedSeat={selectedSeat}
              />
            ))}
          </div>
        </div>
      )}

      <BookingModal
        openModal={openModal}
        eventID={eventID}
        seatNumber={selectedSeatNumber}
        setOpenModal={setOpenModal}
      />

      {frontendFetching && !seats && (
        <Skeleton className="h-56 mt-10 rounded-lg !bg-gray-500 w-full" />
      )}

      {!frontendFetching && seats?.length === 0 && <NothingToDisplay />}
    </div>
  );
}

export default EventSeats;
