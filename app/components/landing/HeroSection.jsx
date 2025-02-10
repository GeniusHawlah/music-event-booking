"use client";

import React from "react";
import Image from "next/image";
import { generalStore } from "../../(store)/zustand/generalStore";
import bgImage from "@/public/images/logo.png";
import ScrollAnimationMin from "react-animate-on-scroll";
import { useRouter } from "next/navigation";

function HeroSection(props) {
  const router = useRouter();

  const heroTitle = "A <span style='color: #D726A1'>few taps away</span>  from your next groove.";

  const heroSubtitle =
    "No more endless scrolling - only the best music events at your fingertips.";

  return (
    <section
      id="section1"
      className="scroll-mt-10  md:mt-10- py-10 gen-padding  mt-5- text-the-white bg-pry-bg"
    >
      
      {/* //>Large Screen */}
      <div
        className="  hidden 890:block"
        // md:bg-[url('/images/hero.png')]
      >
        <div className="890:flex flex-row-reverse">
          <div className="890:w-1/2  890:flex items-center justify-center">
            <Image
              alt="Hero Image"
              className=""
              width={792}
              height={667}
              src={bgImage}
              // style={{ backgroundImage: `url(${bgUrl})` }}
            />
          </div>

          <div className="  890:w-[50%] ">
            <div className="">
              <div
                dangerouslySetInnerHTML={{
                  __html: heroTitle,
                }}
                className="890:mt-5   890:text-the-white md:leading-[3.5rem] md:text-5xl xl:text-[4rem] lg:text-[3rem] lg:leading-[3.5rem] xl:leading-[5rem] text-2xl sm:text-5xl sm:leading-[3.5rem] 340:text-[30px] 340:leading-[2.2rem] font-bold"
              >
                {}
              </div>
            </div>
            <div className="mt-5 xl:leading-10 md:mt-3 890:w-[90%]    lg:mb-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: heroSubtitle,
                }}
                className="text-tertiary-text text-[20px]   md:leading-10"
              >
                {}
              </div>
            </div>

            <div className="mt-5 gap-x-2 md:mt-10 flex justify-center 890:justify-start">
              <button
                onClick={() => {
                  router.push("/#popular_events");
                }}
                className="bg-the-pink hover:bg-hover-blue text-the-white py-2 px-4 font-   rounded-xl shadow hover:bg-opacity-80"
              >
                Book a Seat
              </button>

              <button
                onClick={() => {
                  router.push("/events");
                }}
                className="bg-the-white text-the-pink   py-2 px-4 font-   rounded-xl  -the-pink hover:bg-opacity-80"
              >
                Browse Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* //>Small Screen */}
      <div
        className={`890:hidden gen-padding relative bg-center bg-contain bg-no-repeat   text-the-white bg-pry-bg  -mx-5 md:-mx-10 lg:mx-[105px]  py-10 600:py-1 lg:py-28 xl:py-32 xl:h-[35rem]`}
        style={{
          backgroundImage: `url(${"./images/logo.png"})`,
        }}
      >
        <div className="absolute text-the-white bg-pry-bg  inset-0 bg-opacity-80 pointer-events-none "></div>
        <div className="relative z-10">
          <ScrollAnimationMin
            //  duration="1"
            animateIn="zoomIn"
            animateOnce={true}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: heroTitle,
              }}
              className={`text-center 700:text-lef text-3xl/10  600:text-4xl/[3rem] 700:text-5xl/[4rem]   lg:text-[64px]/[5.5rem] font-semibold 700:font-bold `}
            >
              {}
            </div>
          </ScrollAnimationMin>

          <div
            className={` mt-8 flex flex-col items-center justify-center gap-x-2 `}
          >
            <button
              onClick={() => {
                router.push("/#popular_events");
              }}
              className="text-the-white w-fit bg-the-pink  border rounded-md px-4 py-2 mt-8 hover:bg-hover-blue lg:text-2xl border-the-white duration-300 font-"
            >
              Browse Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
