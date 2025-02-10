"use client";

import { calculateCountdown } from "@/utils/helpers";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

function EventDetailsComponents({ eventData }) {
  const resolvedEventData = use(eventData);

  const eventDate = resolvedEventData?.eventDate;

  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(
        calculateCountdown({ eventDate: resolvedEventData?.eventDate })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <div className="max-w-3xl mx-auto bg-[#0B0E31] text-white p-6 rounded-2xl shadow-lg">
      {/*//> Event Image */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden flex justify-center items-center">
        <Image
          src={resolvedEventData.eventImage || "/images/default_image.jfif"}
          alt={resolvedEventData.title || "Event image"}
          className="rounded-lg object-cover "
          fill
          priority
        />

        <div className="absolute bg-[#0B0E31] w-full h-full bg-opacity-50"></div>

        {/*//> Countdown Section */}
        <div className="mt-6 bg-[#1A1B3A] p-4 rounded-lg flex justify-around gap-x-5 600:gap-x-10 items-center absolute -top-5 ">
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

        <Link
          href={`#select_seat`}
          // onClick={() => {
          //   router.push(`/events/${eventID}`);
          // }}
          className="bg-[#D726A1]  hover:bg-hover-blue text-white font-semibold text-base 600:text-lg 600:font-bold py-2 px-6 rounded-full transition duration-300 inline-block shadow-lg absolute shadow-card-bg"
        >
          Select a Seat
        </Link>
      </div>

      {/* Event Content */}
      <div className="mt-5">
        <h1 className="text-2xl font-bold text-[#B57EDC]">
          {resolvedEventData.title}
        </h1>
        <p className="text-[#E0D2F3] mt-2">{resolvedEventData.description}</p>

        <div className="mt-4">
          <p className="text-sm text-[#A7A2C3]">
            📅{" "}
            <span className="font-medium">
              {format(
                new Date(resolvedEventData.eventDate),
                "dd/MMM,yyyy HH:mm:ss"
              )}
            </span>
          </p>
          <p className="text-sm text-[#A7A2C3] mt-1">
            📍 <span className="font-medium">{resolvedEventData.location}</span>
          </p>
          <p className="text-sm text-[#A7A2C3] mt-1">
            🎵 <span className="font-medium">{resolvedEventData.genre}</span>
          </p>
          <p className="text-sm text-[#A7A2C3] mt-1">
            🌍{" "}
            <span className="font-medium capitalize">
              {resolvedEventData.type}
            </span>{" "}
            event
          </p>
        </div>

        {/* Artistes */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-[#B57EDC]">
            Performing Artistes
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {resolvedEventData?.artistes?.map((artist, index) => (
              <span
                key={index}
                className="bg-[#321F66] text-white px-3 py-1 text-sm rounded-md"
              >
                {artist}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsComponents;
