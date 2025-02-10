"use client";
import React from "react";
import { generalStore } from "../(store)/zustand/generalStore";
import { Icon } from "@iconify/react";

function GeneralLoading() {
  const sendingData = generalStore((state) => state.sendingData);

  return (
    <div
      className={`fixed  w-full  h-screen bg-black bg-opacity-60 z-[100] flex items-center justify-center text-7xl ${
        sendingData ? "block" : "hidden"
      }`}
    >
      <Icon className="text-the-white mt-20" icon="eos-icons:bubble-loading" />
    </div>
  );
}

export default GeneralLoading;
