import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { generalStore } from "../../(store)/zustand/generalStore";
import logo from "@/public/images/logo.png";
import Image from "next/image";

function MobileNav() {
  const router = useRouter();

  const language = generalStore((state) => state.language);
  const setLanguage = generalStore((state) => state.setLanguage);
  const setMenuClicked = generalStore((state) => state.setMenuClicked);
  const menuClicked = generalStore((state) => state.menuClicked);

  return (
    <div
      className={` -mx-5 md:-mx-10 lg:-mx-[105px] 700:hidden duration-300 ${
        menuClicked ? "translate-x-0 " : " -translate-x-full "
      } -my-4 w-full h-screen flex   fixed z-[10] overflow-y-hidden
`}
    >
      <div
        className={`w-[80%] sm:w-[65%] h-screen pl-3 pr-3 400:pl-5 pt-10 bg-sec-bg shadow-md `}
      >
        <div className="flex mb-4 justify-between">
          <div
            onClick={() => {
              router.push("/");
            }}
            className={`cursor-pointer w-[50px] h-[50px] relative `}
          >
            <Image className="-ml-" src={logo} alt="Logo" fill />
          </div>
        </div>

        <div className="bg-sub-title h-[2px] -ml-4 -mr-3 mb-5"></div>

        <div className="text-pry-color space-y-4 flex flex-col  ">
          <button
            onClick={() => {
              router.push("/events");
              setMenuClicked(false);
            }}
            className=" hover:text-hover-blue text-start text-the-white"
          >
            Browse Events
          </button>
          <button
            onClick={() => {
              router.push("/#popular_events");
              setMenuClicked(false);
            }}
            className=" hover:text-hover-blue text-start text-the-white"
          >
            Popular Events
          </button>
        </div>
      </div>

      <div
        onClick={() => {
          setMenuClicked(false);
        }}
        className={`w-[50%]    duration-300  h-screen`}
      ></div>
    </div>
  );
}

export default MobileNav;
