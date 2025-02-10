"use client";

import React, { useState } from "react";
import { generalStore } from "../(store)/zustand/generalStore";
import { userStore } from "../(store)/zustand/userStore";
import { format } from "date-fns";

import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

function CreateWishForm() {

  const sendingData = generalStore((state) => state.sendingData);
  const createWishHandler = generalStore((state) => state.createWishHandler);
  const setCurrentAuthComponent = generalStore(
    (state) => state.setCurrentAuthComponent
  );

  const [itemName, setItemName] = useState("");
  const [itemLink, setItemLink] = useState("");
  const [description, setDescription] = useState("");

  function checkLinkValidation(wishLink) {
    if (!wishLink || wishLink.trim() === "") {
      return true;
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

        if (!validLink) {
          return false;
        } else {
return true
}
      } catch (error) {
        return false;
      }
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const validLink = checkLinkValidation(itemLink);
        if (validLink) {
          createWishHandler({
            itemName,
            creatorID: "session?.user?.id",
            timeCreated: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
            lastModified: format(new Date(), "dd/MM/yyyy HH:mm:ss"),
            itemLink,
            itemImage: "",
            description,
            dateReceived: "",
            status: "active",
          });
        } else {
          toast.error("Input a valid link or leave empty!");
        }
      }}
      className="  [&_label]:text-gray-500 [&_label]:text-base w-full "
    >
      {/*//> NAME AND LINK */}
      <div className="flex justify-start  md:justify-center  md:mt-5 ">
        <div className="md:flex gap-x-3 w-full">
          {/* //>Item Name */}
          <div className="flex flex-col md:w-1/2 w-full">
            <label htmlFor="itemName">Item Name (*)</label>
            <input
              onChange={(e) => {
                setItemName(e.target.value);
              }}
              disabled={sendingData}
              required
              value={itemName}
              maxLength={100}
              type="text"
              className="focus:bg-white bg-gray-50  focus:outline-none w-full rounded-md border px-2 py-2 mt-1 placeholder:text-base text-base bg-"
              placeholder="E.g A bone-straight Wig"
            />
          </div>

          {/* //>Item Link */}
          <div className="flex mt-5 md:mt-0 flex-col md:w-1/2 w-full">
            <label htmlFor="itemLink">Item Link</label>
            <input
              onChange={(e) => {
                let value = e.target.value;
                value = value.replace(/\s/g, ""); // Remove all spaces
                setItemLink(value.charAt(0).toLowerCase() + value.slice(1));
              }}
              disabled={sendingData}
              value={itemLink}
              type="text"
              className="focus:bg-white bg-gray-50  focus:outline-none w-full rounded-md border px-2 py-2 mt-1 placeholder:text-base text-base bg-"
              placeholder="Any ecommerce link to the item"
            />
          </div>
        </div>
      </div>

      {/* //>DESCRIPTION */}
      <div className="flex flex-col mt-5 w-full">
        <label htmlFor="description">Description (*)</label>
        <textarea
          onChange={(e) => {
            let value = e.target.value;
            setDescription(value.charAt(0).toUpperCase() + value.slice(1));
          }}
          required
          disabled={sendingData}
          value={description}
          rows={5}
          maxLength={1000}
          className="focus:bg-white resize-none bg-gray-50  focus:outline-none w-full rounded-md border px-2 py-2 mt-1 placeholder:text-base text-base bg-"
          placeholder="E.g A 12-inch red tinted bone-straight wig"
        />
      </div>

      {/*//> CREATE WISH BUTTON */}
      <div className="flex justify-start md:justify-center mt-10 ">
        <div className="flex flex-col w-full">
          <button
            disabled={sendingData}
            className="bg-red-600 flex justify-center items-center text-white hover:bg-opacity-80 w-full rounded  py-3 "
          >
            <span className="flex items-center gap-x-3">
              Create Wish
              {sendingData && (
                <Icon icon="eos-icons:sendingData" className="text-2xl " />
              )}
            </span>
          </button>
        </div>
      </div>

      {/* <div className="flex justify-center md:justify-start mt-5 ">
        <div className="flex flex-col md:w-full w-[80%]">
          <p className="select-none text-center px-3 mt-10 text-sm text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrentAuthComponent("sign_in");
              }}
              className="underline cursor-pointer text-red-600 font-semibold select-none"
            >
              Sign in
            </span>
          </p>
        </div>
      </div> */}
    </form>
  );
}

export default CreateWishForm;
