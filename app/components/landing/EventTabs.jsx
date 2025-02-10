"use client";

import { generalStore } from "@/app/(store)/zustand/generalStore";
import React from "react";

function EventTabs() {
  const eventCategory = generalStore((state) => state.eventCategory);
  const setEventCategory = generalStore((state) => state.setEventCategory);

  return (
    <div className="flex justify-center mt-10 bg-transparent text-the-pink font-semibold text-xs 350:text-sm 560:text-base  ">
      <div
        onClick={() => {
          setEventCategory("local");
          // refreshHandler({tag: "users"});
        }}
        className={`shadow-lg shadow-card-bg ${
          eventCategory === "local"
            ? "bg-the-pink text-the-white"
            : "bg-the-white"
        } duration-300 w-1/2  cursor-pointer py-2 text-center  rounded-l-full`}
      >
        <p>LOCAL</p>
      </div>

      <div
        onClick={() => {
          setEventCategory("international");
          // refreshHandler({tag: "users"});
        }}
        className={`shadow-lg shadow-card-bg ${
          eventCategory === "international"
            ? "bg-the-pink text-the-white"
            : "bg-the-white"
        } duration-300 w-1/2 cursor-pointer py-2 text-center  rounded-r-full`}
      >
        <p>INTERNATIONAL</p>
      </div>
    </div>
  );
}

export default EventTabs;
