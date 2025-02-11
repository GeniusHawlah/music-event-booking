"use client";

import React, { useRef, useState } from "react";
import { format } from "date-fns";
import { Button, Checkbox, Label, Modal, Select } from "flowbite-react";
import { generalStore } from "@/app/(store)/zustand/generalStore";
import Info from "@/app/components/Info";

function BookingModal({ openModal, setOpenModal, eventID, seatNumber }) {
  const bookSeatHandler = generalStore((state) => state.bookSeatHandler);
  const booking = generalStore((state) => state.booking);
  const firstName = generalStore((state) => state.firstName);
  const lastName = generalStore((state) => state.lastName);
  const email = generalStore((state) => state.email);

  const setLastName = generalStore((state) => state.setLastName);
  const setEmail = generalStore((state) => state.setEmail);
  const setFirstName = generalStore((state) => state.setFirstName);

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");

  const emailInputRef = useRef(null);

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
        // popup
        initialFocus={emailInputRef}
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        className=" flex items-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="bg-white text-gray-900 rounded-md"
        >
          <Modal.Header className=" font-semibold  ">
            <p className="text-gray-900">FILL BOOKING DETAILS</p>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-base font-medium text-gray-900">
                Fill the details to book your seat at the event.
              </h3>

              {/*//> DETAILS */}
              <div className="w-full">
                {/* //>Email */}
                <div className="flex flex-col mt-8 text-gray-600 w-full">
                  <label htmlFor="email" className="flex items-center gap-x-2">Email (*) <Info content="Use a functional email so you can receive booking details via email."/> </label>
                  <input
                    ref={emailInputRef}
                    onChange={(e) => {
                      let value = e.target.value;
                      setEmail(value.toLowerCase());
                    }}
                    required
                    autoComplete="email"
                    disabled={booking}
                    value={email}
                    type="email"
                    className="bg-gray-50  border focus:outline-1  focus:outline-the-pink w-full rounded-md  px-2 py-2 mt-1 placeholder:text-sm text-sm "
                    placeholder="example@email.com"
                  />
                </div>

                {/* //>First Name */}
                <div className="flex flex-col mt-8 text-gray-600  w-full">
                  <label
                    htmlFor="firstName"
                    className="flex items-center gap-x-1"
                  >
                    First Name (*)
                  </label>
                  <input
                    onChange={(e) => {
                      let value = e.target.value;
                      value = value.replace(/\s/g, ""); // Remove all spaces
                      setFirstName(
                        value.charAt(0).toUpperCase() + value.slice(1)
                      );
                    }}
                    disabled={booking}
                    required
                    value={firstName}
                    type="text"
                    className=" placeholder:text-sm bg-gray-50   focus:outline-1  focus:outline-the-pink w-full rounded-md border px-2 py-2 mt-1 text-sm "
                    placeholder="e.g John"
                  />
                </div>

                {/* //>Last Name */}
                <div className="flex text-gray-600 flex-col mt-8 w-full">
                  <label
                    htmlFor="lastName"
                    className="flex items-center gap-x-1"
                  >
                    Surname (optional)
                  </label>
                  <input
                    onChange={(e) => {
                      let value = e.target.value;
                      value = value.replace(/\s/g, ""); // Remove all spaces
                      setLastName(
                        value.charAt(0).toUpperCase() + value.slice(1)
                      );
                    }}
                    disabled={booking}
                    value={lastName}
                    type="text"
                    className="placeholder:text-sm bg-gray-50   focus:outline-1  focus:outline-the-pink w-full rounded-md border px-2 py-2 mt-1 text-sm "
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="w-full">
                <Button
                  onClick={() => {
                    setOpenModal(false);
                    bookSeatHandler({
                      eventID,
                      seatNumber,
                      email,
                      firstName,
                      lastName,
                    });
                  }}
                  className="bg-the-pink text-the-white hover:!bg-hover-blue duration-300"
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
