"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import TabSection from "@/components/sections/TabSection";
import FeatureSection from "@/components/sections/FeatureSection";
import InfluencerSection from "@/components/sections/InfluencerSection";
import HeroSection from "@/components/sections/HeroSection";
import GetStartedSection from "@/components/sections/GetStartedSection";
import Login from "@/components/sections/Login";
import loginContext from "./authContext";

import Image from "next/image";
import { useState } from "react";

import HeroImage from "@/public/images/iamge.png";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="min-h-screen overflow-x-clip flex flex-col gap-6 bg-[#181818] py-4 px-4 md:gap-12 md:py-9 md:px-[7.5rem] text-white">
        <Header />
        {!isLoggedIn ? (
          <Login />
        ) : (
          <>
            <main className="grid items-center content-center gap-6 w-full md:grid-cols-[1fr_1fr]">
              <HeroSection />
              <div className="w-full overflow-hidden rounded-3xl">
                <Image
                  className={"w-full md:row-start-1 md:col-start-2"}
                  src={HeroImage}
                  width={300}
                  alt={"Hero Image"}
                />
              </div>
              <TabSection />
              <FeatureSection />
              <InfluencerSection />
              <GetStartedSection />
            </main>
            <Footer />
          </>
        )}
      </div>
    </loginContext.Provider>
  );
}
