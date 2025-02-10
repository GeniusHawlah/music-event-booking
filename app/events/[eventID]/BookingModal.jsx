"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Button, Checkbox, Label, Modal, Select } from "flowbite-react";
import { generalStore } from "@/app/(store)/zustand/generalStore";

function BookingModal({ openModal, setOpenModal, eventID, seatNumber }) {
  const bookSeatHandler = generalStore((state) => state.bookSeatHandler);

  return (
    <div
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <Modal
        onClick={() => {
          setOpenModal(false);
        }}
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        className="!bg-[#1c0b0b66]"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Modal.Header className=" font-semibold ">
            FILL BOOKING DETAILS
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-base font-medium text-gray-900 dark:text-white">
                Fill these details to book your seat at the event.
              </h3>
              {/* <div>
                <div className="mb-2 block">
                  <Label htmlFor="givers" value="Your Giver" />
                </div>
                <Select
                  id="givers"
                  onChange={(e) => {
                    setSelectedGiver(e.target.value);
                  }}
                >
                  <option value="anonymous">Anonymous</option>
                  {givers.map((giver) => (
                    <option
                      key={giver?.id}
                      value={giver?.id}
                    >{`${giver?.firstName} ${giver?.lastName} (${giver?.nickname})`}</option>
                  ))}
                </Select>
              </div> */}

              <div className="w-full">
                <Button
                  onClick={() => {
                    setOpenModal(false);
                    bookSeatHandler({
                      eventID,
                      seatNumber,
                      email: "hawlahscho@gmail.com",
                      firstName: "Olasunkanmi",
                      lastName: "Ajibola",
                    });
                  }}
                  className="bg-the-pink"
                >
                 Book Event
                </Button>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default BookingModal;
