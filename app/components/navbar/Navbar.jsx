"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import logo from "@/public/images/logo.png";
import MobileNav from "./MobileNav";
import NotificationPopover from "./NotificationPopover";
import { generalStore } from "../../(store)/zustand/generalStore";
import { Icon } from "@iconify/react";
import { Skeleton } from "@radix-ui/themes";
import SearchBar from "./SearchBar";

function Navbar() {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);

  const menuClicked = generalStore((state) => state.menuClicked);
  const refreshHandler = generalStore((state) => state.refreshHandler);
  const setMenuClicked = generalStore((state) => state.setMenuClicked);
  const createEventHandler = generalStore((state) => state.createEventHandler);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div
      className={`z-[20]  gen-padding  sticky top-0 bg-pry-bg text-the-white ${
        scroll ? "shadow-md shadow-card-bg" : ""
      }`}
    >
      <MobileNav />
      <div className={` flex pt-5 pb-2 justify-between items-center  `}>
        {/* //>Logo */}
        <div className="flex items-center gap-x-10">
          <div
            onClick={() => {
              // I use this to purge cache before routing
              refreshHandler({ tag: "events" });
              refreshHandler({ tag: "popular_events" });
              refreshHandler({ tag: "event_data" });
              router.push("/");
            }}
            className={`cursor-pointer w-[50px] h-[40px] 400:w-[70px] 400:h-[60px] relative `}
          >
            <Image className="-ml-" src={logo} alt="Logo" fill />
          </div>
        </div>

        {/* //>Search Bar */}
        <Suspense fallback={<Skeleton className="h-10 mt-10 rounded-lg" />}>
          <div className="hidden 830:flex items-center">
            <SearchBar />
          </div>
        </Suspense>

        {/* //>Nav Items */}
        <div className="flex items-center gap-x-3 ">
          {/* //>links */}
          <div className="hidden 700:flex  justify-between gap-x-4  select-none text-base 500:text-lg &:cursor-pointer text-[16px] font-">
            <button
              onClick={() => {
                router.push("/#popular_events");
                // createEventHandler({
                //   title: "Global Fusion Music Festival: Tokyo Edition",
                //   description: "Immerse yourself in a night of global music sensations, featuring performances by artists from Japan, Korea, and beyond.",
                //   timeCreated: new Date().toISOString(),
                //   eventDate: getRandomFutureDate(),
                //   numberOfSeats: 490, // Varying seat number
                //   lastModified: new Date().toISOString(),
                //   artistes: ["Hikaru Utada", "BTS", "BLACKPINK", "Ariana Grande"],
                //   eventImage: "https://picsum.photos/620/420",
                //   genre: "Pop, K-pop, EDM",
                //   location: "Tokyo Dome, Tokyo, Japan",
                //   type: "international"

                // });
              }}
              className=" hover:text-hover-blue text-the-white"
            >
              Popular
            </button>
            <button
              onClick={() => {
                router.push("/events");
              }}
              className=" hover:text-hover-blue text-the-white"
            >
              All Events
            </button>
          </div>

          {/* //>Search Icon */}
          <Icon
            onClick={() => {
              router.push("/events");
            }}
            icon="majesticons:search-line"
            className="text-3xl text-the-pink hover:text-hover-blue cursor-pointer 830:hidden"
          />

          {/* //>Notification Popover */}
          <NotificationPopover />

          {/* //>Get Started */}
          <button
            onClick={() => {
              router.push("/events");
            }}
            className={`  text-the-white bg-the-pink hover:bg-hover-blue px-2 350:px-4 py-1 text-base rounded font-medium `}
          >
            Get Started
          </button>

          <div className="700:hidden flex items-center text-the-white">
            {menuClicked ? (
              <Icon
                onClick={() => {
                  setMenuClicked(false);
                }}
                icon="ic:outline-close"
                className="text-4xl cursor-pointer select-none"
              />
            ) : (
              <Icon
                onClick={() => {
                  setMenuClicked(true);
                }}
                icon="ic:round-menu"
                className="text-4xl cursor-pointer select-none"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
