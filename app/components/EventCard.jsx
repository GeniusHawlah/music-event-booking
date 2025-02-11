"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { calculateCountdown, formattedArtistes } from "@/utils/helpers";
import { generalStore } from "../(store)/zustand/generalStore";
import { useRouter, useSearchParams } from "next/navigation";

const EventCard = ({
  title,
  description,
  eventDate,
  location,
  imageUrl,
  artistes,
  eventID,
  seats,
}) => {
  const router = useRouter();

  const newArtistes = artistes.map((artist) => artist);

  const availableSeats = seats?.filter((seat) => seat.isTaken === false);

  const [countdown, setCountdown] = useState("");

  // const searchParams = useSearchParams();
  // const params = new URLSearchParams(searchParams);
  // function routeTo(url) {
  //   params.set("id", search.toString());
  //   router.push(`${url}?${params.toString()}`);
  // }

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown({ eventDate }));
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div
      // onMouseOver={() => {
      //   console.log(seats);
      // }}
      onClick={() => {
        router.push(`/events/${eventID}`);
      }}
      className="max-w-md mx-auto bg-[#27284A] rounded-xl shadow-md border border-[#3A3D6D] overflow-hidden shadow-sec-bg hover:scale-95 duration-300 cursor-pointer"
    >
      {/*//> Event Image */}
      <div className="relative w-full h-56">
        <Image
          src={imageUrl || "/images/default_image.jfif"}
          alt={title}
          fill
          className="rounded-t-xl object-cover"
          priority
        />
      </div>

      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#F8F8FF]">{title}</h2>

        {/* Description */}
        <p className="mt-2 text-[#C0C2E2]">{description}</p>

        {/* Event Details */}
        <div className="mt-4 space-y-1">
          {location && (
            <p className="text-sm text-[#8B8EBB]">
              <span className="font-medium text-the-white">Location:</span>{" "}
              {location}.{" "}
              {availableSeats && (
                <span className="font-medium text-green-400">
                  ({availableSeats?.length} seats available)
                </span>
              )}
            </p>
          )}
          <p className="text-sm text-[#8B8EBB]">
            <span className="font-medium text-the-white">Event Date:</span>{" "}
            {format(new Date(eventDate), "dd/MMM/yyyy HH:mm:ss")}
          </p>
          <p className="text-sm text-[#8B8EBB]">
            <span className="font-medium text-the-white">Artistes:</span>{" "}
            {formattedArtistes(newArtistes)}
          </p>
        </div>

        {/* Countdown Section */}
        <div className="mt-6 bg-[#1A1B3A] p-4 rounded-lg flex justify-around items-center">
          {countdown.diff > 0 ? (
            <>
              {/* Days */}
              <div className="text-center">
                <p className="text-xl font-bold text-[#FFB400]">
                  {countdown.days}
                </p>
                <p className="text-xs text-[#8B8EBB]">Days</p>
              </div>
              {/* Hours */}
              <div className="text-center">
                <p className="text-xl font-bold text-[#FFB400]">
                  {countdown.hours}
                </p>
                <p className="text-xs text-[#8B8EBB]">Hours</p>
              </div>
              {/* Minutes */}
              <div className="text-center">
                <p className="text-xl font-bold text-[#FFB400]">
                  {countdown.minutes}
                </p>
                <p className="text-xs text-[#8B8EBB]">Minutes</p>
              </div>
              {/* Seconds */}
              <div className="text-center">
                <p className="text-xl font-bold text-[#FFB400]">
                  {countdown.seconds}
                </p>
                <p className="text-xs text-[#8B8EBB]">Seconds</p>
              </div>
            </>
          ) : (
            <div className="text-center w-full">
              <p className="text-xl font-bold text-[#D726A1]">Event Started!</p>
            </div>
          )}
        </div>

        {/* "Book Now" Button */}
        <div className="mt-6 text-center">
          {countdown.diff > 0 && (
            <button
              onClick={() => {
                router.push(`/events/${eventID}`);
              }}
              className="bg-[#D726A1] hover:bg-hover-blue text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-block shadow-lg"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
