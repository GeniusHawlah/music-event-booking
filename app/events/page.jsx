import { fetchEvents } from "@/utils/fetchers";
import React, { Suspense } from "react";
import SearchBar from "../components/navbar/SearchBar";

import { Skeleton } from "@radix-ui/themes";
import PaginationButtons from "../components/PaginationButtons";
import AllEvents from "./AllEvents";
import { Allerta } from "next/font/google";

async function Members(props) {
  const searchParams = await props.searchParams;
  const { limit, offset, status, search } = searchParams;
  const page = parseInt(searchParams.page) || 1;
  const itemsPerPage = 9;



  return (
    <div className="gen-padding bg-pry-bg" key={Math.random()}>
      {/* //>Search Bar */}
      <div className="flex 830:hidden items-center justify-center">
        <SearchBar />
      </div>

      <AllEvents
        search={search}
        page={page}
        itemsPerPage={itemsPerPage}
      />

   
    </div>
  );
}

export default Members;
