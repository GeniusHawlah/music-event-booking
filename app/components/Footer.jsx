"use client";

import React, { useEffect, useRef, useState } from "react";


function Footer() {
  return (
    <section id="footer" className="select-none  scroll-mt-10">
      <div className="bg-sec-bg md:px-16 py-6 text-the-white">
        <hr className="border-sub-title rounded-full my-3 border-2 mx-5" />
        <div className="flex flex-col items-center space-y-2 justify-center mt-3 text-sm text-center">
          <p>© 2025 Music Event Booking. All Rights Reserved.</p>
        </div>{" "}
      </div>
    </section>
  );
}

export default Footer;
