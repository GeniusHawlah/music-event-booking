import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

function OneSeat({
  setSelectedSeat,
  selectedSeat,
  setSelectedSeatNumber,
  setOpenModal,
  seat,
}) {
  return (
    <button
      disabled={seat?.isTaken}
      onClick={() => {
        // console.log(seat);
        // return
        setSelectedSeat(seat.id);
        setSelectedSeatNumber(seat?.number.toString());
        !seat?.isTaken ? setOpenModal(true) : null;
      }}
      className={`${
        seat?.isTaken ? "cursor-not-allowed" : ""
      } w-16 h-16 flex items-center justify-center text-white font-bold rounded-md
    transition-all duration-300 shadow-md relative 
  `}
    >
      <Icon
        icon="mdi:love-seat"
        className={`text-6xl absolute   ${
          seat?.isTaken
            ? "text-red-500 "
            : selectedSeat === seat.id
            ? "text-blue-500"
            : "text-green-500 hover:text-green-700"
        }`}
      />
      <span className="absolute text-sm -mt-2"> {seat?.number}</span>
    </button>
  );
}

export default OneSeat;
