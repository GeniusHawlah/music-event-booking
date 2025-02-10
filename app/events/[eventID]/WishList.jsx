"use client";

import NothingToDisplay from "@/app/components/NothingToDisplay";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Popover, Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { toast } from "react-toastify";

function WishList({ wishes }) {
  const resolvedWishes = use(wishes);

  function checkLinkValidation(e, wishLink) {
    e.preventDefault();

    if (!wishLink || wishLink.trim() === "") {
      toast.error("No link for the item.");
      return;
    } else {
      if (!wishLink.startsWith("http")) {
        wishLink = `https://${wishLink}`;
      }

      try {
        let url = new URL(wishLink);
        let hostNameParts = url.hostname.split(".");

        let validLink =
          hostNameParts.length > 1 &&
          hostNameParts[hostNameParts.length - 1].length > 1;

        if (validLink) {
          window.open(wishLink, "_blank", "noopener,noreferrer");
        } else {
          toast.error("The item link is invalid!");
        }
      } catch (error) {
        toast.error("The item link is invalid!");
      }
    }
  }

  return (
    <div className=" bg-red- mt-5  py-5  text-gray-800 rounded-r-3xl">
      <div>
        <div className="flex items-center mb-4">
          <div
            className=" w-[70%] h-8  
md:w-[40%] 400:h-8 rounded-md flex justify-center items-center bg-red-900 text-white text-sm 400:text-base   "
          >
            <p className=" 400:text-lg select-none">WISH LIST</p>{" "}
          </div>{" "}
          <div className="h-[0.1rem] w-full bg-red-900 "></div>{" "}
        </div>
        {/*//> WISH LIST */}
        <div className=" grid 600:grid-cols-2 1000:grid-cols-3 xl:grid-cols-4  gap-5  mt-10 ">
          {resolvedWishes.map((wish) => (
            // //>WISH CARD
            <div
              key={wish?.id}
              className="shadow relative shadow-red-900 pb-3 rounded-t-xl bg- text-white w-"
            >
              {/* //>Item Name */}
              <div className=" flex justify-center items-center py-1 px-3 bg-red-900 text- ring-1 ring-red-900 rounded-t-xl text-center text-base select-none">
                <Tooltip
                  content={wish.itemName}
                  style="dark"
                  className="text-xs max-w-80 "
                >
                  {wish.itemName.length > 15
                    ? `${wish.itemName.substring(0, 15)}...`
                    : wish.itemName}
                </Tooltip>
              </div>

              {/* //>Wish Description */}
              <div className="text-gray-700 text-base p-2 mb-10 select-none">
                <Tooltip
                  content={wish.description}
                  style="dark"
                  className="text-xs max-w-80 "
                >
                  {wish.description.length > 100
                    ? `${wish.description.substring(0, 100)}...`
                    : wish.description}
                </Tooltip>
              </div>

              {/* //>Link */}
              <div className="flex bottom-2 right-4  absolute justify-center items-center gap-x-3 mt-6">
                <a
                  href={wish?.itemLink}
                  onClick={(e) => {
                    checkLinkValidation(e, wish?.itemLink);
                  }}
                  target="_blank"
                  rel="noopener noreferrrer"
                  className=" flex justify-center items-center  text-blue-600 underline text-sm font-medium  active:ring-none gap-x-2"
                >
                  {" "}
                  Check Item{" "}
                </a>

                <Tooltip
                  content="Click to see more"
                  // trigger="click"
                  style="dark"
                  className="text-xs min-w-32"
                >
                  <Popover
                    aria-labelledby="profile-popover"
                    placement="top"
                    content={
                      <div className="w-64 max-h-72 p-3 bg-white">
                        <p className="text-center text-gray-600 text-sm font-semibold">
                          Item Details
                        </p>

                        <p className="mb-4 text-sm text-gray-800 mt-4 text-center">
                          {wish?.itemName}
                        </p>

                        <p className="mb-4 text-xs text-gray-700 mt-2 text-start">
                          {wish?.description}
                        </p>

                        <a
                          href={wish?.itemLink}
                          onClick={(e) => {
                            checkLinkValidation(e, wish?.itemLink);
                          }}
                          target="_blank"
                          rel="noopener noreferrrer"
                          className=" flex justify-center items-center  text-blue-600 underline text-sm font-medium mt-6 active:ring-none "
                        >
                          Check Item{" "}
                          <Icon icon="mdi:external-link" className="text-2xl" />
                        </a>

                        <p className="text-center text-red-600 mt-2 text-xs">
                          Please be careful with links to items!
                        </p>
                      </div>
                    }
                  >
                    <Icon
                      icon="material-symbols-light:info-outline-rounded"
                      className="text-xl cursor-pointer text-red-600"
                    />
                  </Popover>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>{" "}
        {resolvedWishes?.length === 0 && <NothingToDisplay />}
      </div>
    </div>
  );
}

export default WishList;
