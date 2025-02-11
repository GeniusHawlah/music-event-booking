import HeroSection from "./components/landing/HeroSection";
import React from "react";
import PopularEvents from "./components/landing/PopularEvents";

export default async function Home() {
  return (
    <div className="" key={Math.random()}>
      <HeroSection />
    <PopularEvents/>
    </div>
  );
}
