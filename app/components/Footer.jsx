"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { generalStore } from "../(store)/zustand/generalStore";
import { Icon } from "@iconify/react/dist/iconify.js";

function Footer() {
  let router = useRouter();

  const setLinkToRedirectTo = generalStore(
    (state) => state.setLinkToRedirectTo
  );
  const updateAllUsersHandler = generalStore(
    (state) => state.updateAllUsersHandler
  );

  return (
    <section id="footer" className="select-none mt-20 scroll-mt-10">
      <div className="bg-red-50 md:px-16 py-6 text-gray-600">
        <div className="md:flex px-5 justify-between">
          <div className=" hidden mb-7 md:mb-0 md:block items-center  justify-between">
            <div
              onClick={() => {
                router.push("/");
              }}
              className=" md:flex justify-center md:mb-16 cursor-pointer "
            >
              {" "}
              <Image
                width={80}
                height={70}
                alt="Logo"
                className="w-20"
                src="/images/logo.png"
              />
            </div>
            {/* <div className="w-52 md:w-[10rem] flex justify-between  items-center">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={"https://www.linkedin.com/company/codes-and-cogs/"}
              >
                <Image
                  width={20}
                  height={20}
                  alt="LinkedIn icon"
                  src="/images/logos-and-icons/linkedin.svg"
                />
              </Link>

              <Link href={""} rel="noopener noreferrer" target="_blank">
                <Image
                  width={20}
                  height={20}
                  alt="Twitter icon"
                  src="/images/logos-and-icons/twitter.svg"
                />
              </Link>

              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={"https://instagram.com/codesandcogs?igshid=YmMyMTA2M2Y="}
              >
                <Image
                  width={20}
                  height={20}
                  alt="Instagram icon"
                  src={"/images/logos-and-icons/instagram.svg"}
                />
              </Link>

              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={"https://www.facebook.com/Codes-and-Cogs-100895669449690"}
              >
                <Image
                  width={20}
                  height={20}
                  alt="Facebook icon"
                  src="/images/logos-and-icons/facebook.svg"
                />
              </Link>

              <Link rel="noopener noreferrer" target="_blank" href={""}>
                <Image
                  width={20}
                  height={20}
                  alt=" YouTube icon"
                  src="/images/logos-and-icons/youtube.svg"
                />
              </Link>
            </div> */}
          </div>
          <div className="grid grid-cols-2 md:flex justify-between md:w-[70%]  lg:text-base text-base  ">
            <div className=" sm:whitespace-nowrap flex flex-col items-start md:w-[25%] md:space-y-2 space-y-1 md:mb-0 mb-7 ">
              <button className="font-bold text-red-900">LINKS</button>
              <p
                onClick={() => {
                  router.push("/#how_it_works");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                How it Works
              </p>
              <p
                onClick={() => {
                  router.push("/#faq");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                FAQ
              </p>
              <a
                className="cursor-pointer hover:text-red-700"
                rel="noopener noreferrer"
                // target="_blank"
                href={""}
              >
                <span className="">Suggestion Box</span>
                {/* <Icon icon="fa6-brands:square-x-twitter" className="text-xl" /> */}
              </a>

              <a
                className="cursor-pointer hover:text-red-700"
                rel="noopener noreferrer"
                // target="_blank"
                href={""}
              >
                <span className="">Short Survey</span>
                {/* <Icon icon="fa6-brands:square-x-twitter" className="text-xl" /> */}
              </a>
            </div>{" "}
            <div className=" sm:whitespace-nowrap md:w-[20%] md:space-y-2 space-y-1 md:mb-0 mb-7">
              <button className="font-bold text-red-900">WISHLIST</button>
              <p
                onClick={() => {
                  router.push("/#top_members");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Top Users
              </p>

              <p
                onClick={() => {
                  router.push("/members");
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Gift Someone
              </p>

              <p
                onClick={() => {
                  session
                    ? router.push("/create-wish")
                    : (setLinkToRedirectTo("/create-wish"),
                      router.push("/authentication"));
                }}
                className="cursor-pointer hover:text-red-700"
              >
                Add a Wish
              </p>

              <p
                onClick={() => {
                  router.push("/profile")
                }}
                className="cursor-pointer hover:text-red-700"
              >
                My Wishlist
              </p>
            </div>
          </div>{" "}
        </div>
        <hr className="border-red-900 rounded-full my-3 border-2 mx-5" />
        <div className="flex flex-col items-center space-y-2 justify-center mt-3 text-sm text-center">
          <Link
            className="flex gap-x-2 items-center justify-center cursor-pointer"
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.x.com/GeniusHawlah"}
          >
            <span className="text-red-900 underline">
              Built by GeniusHawlah
            </span>
            <Icon icon="fa6-brands:square-x-twitter" className="text-xl" />
          </Link>

          <p
            onClick={() => {
              // updateAllUsersHandler();
            }}
          >
            © 2025 MaiWishlist. All Rights Reserved.
          </p>
        </div>{" "}
      </div>
    </section>
  );
}

export default Footer;
