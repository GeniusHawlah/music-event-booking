import HeroSection from "./components/landing/HeroSection";
import PopularEvents from "./components/landing/PopularEvents";
import React from "react";

export default async function Home() {
  return (
    <div className="" key={Math.random()}>
      <HeroSection />
      <PopularEvents />
    </div>
  );
}
