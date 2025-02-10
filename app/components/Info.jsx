import { Icon } from "@iconify/react";
import { Tooltip } from "flowbite-react";
import React from "react";

function Info({ content }) {
  return (
    <span>
      <Tooltip
        content={content}
        trigger="click"
        style="dark"
        className="text-sm "
      >
        <Icon
          icon="material-symbols-light:info-outline-rounded"
          className="text-xl cursor-pointer text-yellow-600"
        />
      </Tooltip>
    </span>
  );
}

export default Info;
