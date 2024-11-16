"use client";
import React, { useState } from "react";
import Image from "next/image";
import TravelImage1 from "@/public/images/Frame 1575.png";
import TravelImage2 from "@/public/images/Frame 1182.png";
import TravelImage3 from "@/public/images/Frame 1183.png";
import TravelBg1 from "@/public/images/Frame 1574.png";
import TravelBg2 from "@/public/images/unsplash_L51aR1NLGXc.png";

import AirplaneIcon from "@/public/airplane.svg";
import MobilePath from "@/public/mobile-path.svg";
import DesktopPath from "@/public/desktop-path.svg";
function TravelSection() {
  return (
    <section
      id={"travel-section"}
      className="relative bg-black flex flex-col gap-8 rounded-lg overflow-hidden"
    >
      <Image
        className={"object-cover top-0 left-0 absolute z-10 "}
        src={TravelBg1}
        alt={"mountain"}
      />
      <article className={"relative z-20 p-6 font-bold text-center"}>
        <h2 className={"text-[2.5rem] mb-2"}>TRAVEL</h2>
        <p className={"text-base font-bold"}>
          Turn your experience into itinerary, travel package with VYB Store and
          share it with your true followers.
        </p>
      </article>
      <article className={"relative z-20 bg-black w-full"}>
        <h3 className={"text-xl font-bold text-center m-4"}>
          Explore Our Curated Travel Itineraries
        </h3>
        <div
          className={
            "flex whitespace-nowrap gap-3 overflow-auto scroll-smooth *:relative *:min-w-[30%]  lg:*:min-w-[20%]  max-w-full w-full p-2"
          }
        >
          <div>
            <Image
              src={TravelImage1}
              className={"w-full"}
              alt={"Darjeeling"}
            ></Image>
            <div
              className={
                "absolute text-primary_cta bottom-0 text-center w-full"
              }
            >
              <p className={"cta"}>Darjeeling Itinerary</p>
              <p>West Bengal</p>
            </div>
          </div>
          <div className={""}>
            <Image
              src={TravelImage2}
              className={"w-full"}
              alt={"Darjeeling"}
            ></Image>
            <div
              className={
                "absolute text-primary_cta bottom-0 text-center w-full"
              }
            >
              <p className={"cta"}>Darjeeling Itinerary</p>
              <p>West Bengal</p>
            </div>
          </div>
          <div className={""}>
            <Image
              src={TravelImage3}
              className={"w-full"}
              alt={"Darjeeling"}
            ></Image>
            <div
              className={
                "absolute text-primary_cta bottom-0 text-center w-full"
              }
            >
              <p className={"cta"}>Darjeeling Itinerary</p>
              <p>West Bengal</p>
            </div>
          </div>
          <div className={""}>
            <Image
              src={TravelImage3}
              className={"w-full"}
              alt={"Darjeeling"}
            ></Image>
            <div
              className={
                "absolute text-primary_cta bottom-0 text-center w-full"
              }
            >
              <p className={"cta"}>Darjeeling Itinerary</p>
              <p>West Bengal</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"relative text-center font-bold overflow-hidden"}>
        <h4 className={"text-xl relative z-30 "}>How to list?</h4>
        <div
          className={
            "grid grid-cols-3 grid-rows-[30px_1fr,_30px] relative z-20 grid-template-columns-auto text-lg mt-32"
          }
        >
          <div
            className={
              "airplane__path absolute h-[50vh] w-screen -translate-y-[calc(20vw)] md:-translate-y-[18vw] -left-3 md:-left-28 z-40"
            }
          ></div>
          <div
            className={
              "relative flex flex-col items-center justify-start row-start-1 row-end-3 col-start-1 col-end-2"
            }
          >
            <Image
              className="absolute scale-50 rotate-45 -translate-y-full"
              src={AirplaneIcon}
            ></Image>
            <p>01</p>
            <p>Create Itinerary</p>
          </div>
          <div
            className={
              " flex flex-col items-center justify-start row-start-2 col-start-2 col-end-3"
            }
          >
            <Image
              className="absolute scale-50 rotate-[25deg] -translate-y-full"
              src={AirplaneIcon}
            ></Image>
            <p>02</p>
            <p>Convert into Travel Package</p>
          </div>
          <div
            className={
              " flex flex-col items-center justify-start row-start-1 row-end-3 col-start-3 col-end-4"
            }
          >
            <Image
              className="absolute scale-50 rotate-15 -translate-y-full"
              src={AirplaneIcon}
            ></Image>
            <p>03</p>
            <p>Earn by sharing</p>
          </div>
        </div>
        <h4 className={"text-center relative z-20 mb-4 md:mb-8"}>
          You Curate Experience We Make It Happen
        </h4>
      </article>
      <Image
        className={"object-cover bottom-0 left-0 absolute z-10 "}
        src={TravelBg2}
        alt={"mountain"}
      />
    </section>
  );
}

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Travel", "Digital", "Brand", "Merch"];
  return (
    <section
      id={"tab-section"}
      className="section flex gap-3 flex-col md:col-start-1 md:col-end-3"
    >
      <div
        className={
          "flex gap-6 md:justify-between text-xl p-6 font-bold bg-black rounded-2xl"
        }
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={
              index === activeTab
                ? "relative after:content-[''] after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-primary after:absolute"
                : ""
            }
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <TravelSection />
    </section>
  );
}
