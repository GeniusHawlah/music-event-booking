import { Icon } from "@iconify/react";
import { Popover } from "flowbite-react";
import React from "react";

function NotificationPopover() {
  return (
    <Popover
      aria-labelledby="default-popover"
      placement="top"
      trigger="click"
      content={
        <div className="w-64 text-sm text-gray-600">
          <div className="border-b border-gray-200 bg-white   px-3 py-2">
            <h3
              id="default-popover"
              className="font-semibold text-gray-900"
            >
              Event Rescheduled!
            </h3>
          </div>
          <div className="px-3 py-2 bg-white">
            <p>
              The event{" "}
              <span className="text-black">
                Olamide Live in Concert: Street Kingz
              </span>{" "}
              has been rescheduled. Concerned fans will receive email.
            </p>
          </div>
        </div>
      }
    >
      <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
        <Icon icon="entypo:bell" className="text-2xl text-the-pink " />
        <span className="absolute right-1 top-1 rounded-full h-2 w-2 bg-green-600"></span>
      </div>
    </Popover>
  );
}

export default NotificationPopover;
