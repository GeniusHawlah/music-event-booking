"use client";

import React, { Suspense, useState } from "react";
import { Icon } from "@iconify/react";
import { generalStore } from "../../(store)/zustand/generalStore";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "@radix-ui/themes";

function SearchBar() {
  const router = useRouter();
  const searchKeyword = generalStore((state) => state.searchKeyword);
  const setSearchKeyword = generalStore((state) => state.setSearchKeyword);
  const refreshHandler = generalStore((state) => state.refreshHandler);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  function routeTo(url) {
    router.push(`${url}?${params.toString()}`);
  }
  
  const [focused, setFocused] = useState(false);

  function returnAll() {
    params.set("search", "");
    params.set("page", 1);
    router.push(`?${params.toString()}`);

  }



  // const [searchKeyword, setSearchKeyword] = useState(params?.get("search"));

  async function handleSearch(search) {
    await refreshHandler({ tag: "events", path: "/events" });
    params.set("page", 1);
    params.set("search", search.toString());
    router.push(`?${params.toString()}`);
  }

  return (
    // <Suspense fallback={<Skeleton className="h-10 mt-10 rounded-lg" />}>
    <div className="flex items-center ">
      <input
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        onChange={(e) => {
          setSearchKeyword(e.target.value);
          !e.target.value ? returnAll() : null;
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(searchKeyword.trim());
          }
        }}
        value={searchKeyword}
        type="text"
        className="py-2 pl-3 rounded-l-full border-l bg-[#1A1B3A]  border-outline-color focus:border-the-pink border-y focus:outline-none   text-the-white h-11 font-light placeholder:text-sm text-base "
        placeholder="Search events..."
      />
      <div
        className={`bg-[#1A1B3A] text-the-pink  p-2  rounded-r-full border-y border-outline-color  border-r h-11 flex items-center justify-center ${
          focused ? "border-the-pink" : ""
        }`}
      >
        <div className="flex items-center gap-x-1">
          {searchKeyword && (
            <Icon
              onClick={async () => {
                await setSearchKeyword("");
                returnAll();
              }}
              icon="iconoir:cancel"
              className="text- cursor-pointer"
            />
          )}
          <Icon
            onClick={() => {
              // console.log(searchKeyword);
              searchKeyword
                ? handleSearch(searchKeyword.trim())
                : router.push("/events");
            }}
            icon="iconamoon:search-bold"
            className="text-2xl text-the-pink cursor-pointer"
          />
        </div>
      </div>
    </div>
    // </Suspense>
  );
}

export default SearchBar;
