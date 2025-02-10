import { Icon } from "@iconify/react";
import React from "react";

function NothingToDisplay() {
  return (
    <div className="w-full h-60 bg-transparent flex-col text-sub-title flex justify-center items-center">
      Nothing to display.
      <Icon
        icon="fluent:database-search-32-filled"
        className="text-6xl text-sub-title"
      />
    </div>
  );
}

export default NothingToDisplay;
