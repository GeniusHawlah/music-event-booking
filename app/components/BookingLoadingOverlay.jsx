"use client";
import React from "react";
import { generalStore } from "../(store)/zustand/generalStore";
import { Icon } from "@iconify/react";

function BookingLoadingOverlay() {
  const booking = generalStore((state) => state.booking);

  return (
    <div
      className={`fixed  w-full  h-screen bg-black bg-opacity-60 z-[100] flex items-center justify-center  ${
        booking ? "block" : "hidden"
      }`}
    >
      <div className="bg-the-white text-pry-bg rounded-lg flex flex-col items-center gap-y-3 justify-start p-5">
        <p className="text-xl  text-center ">Please wait...</p>
        <Icon
          className="text-pry-bg text-4xl "
          icon="eos-icons:bubble-loading"
        />
        <p className="text-base  text-center ">
          Kindly wait while we debit your credit card &#8358;200K...
        </p>
      </div>
    </div>
  );
}

export default BookingLoadingOverlay;
