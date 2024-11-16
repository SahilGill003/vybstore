"use client";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import SearchIcon from "@/public/search.svg";
import UserIcon from "@/public/user-icon.svg";
import DownArrowIcon from "@/public/downarrow.svg";
import UserOutlineIcon from "@/public/user-outline.svg";
import LocationIcon from "@/public/location.svg";
import HeadphoneIcon from "@/public/headphone.svg";
import InfoIcon from "@/public/info.svg";
import ProfileImg from "@/public/images/profile.png";
import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import loginContext from "@/app/authContext";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const { setIsLoggedIn, isLoggedIn } = useContext(loginContext);
  return (
    <header className="h-10">
      <nav className="flex gap-6 items-center justify-between">
        <Image className={"w-20"} src={Logo} width={120} alt="logo" />
        <div className="relative">
          <Image
            src={SearchIcon}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
          />
          <Input
            className="!text-base pl-10 bg-gray-100 border-gray-800 text-gray-800 rounded-2xl"
            placeholder="Search Course/Product"
          />
        </div>
        {isLoggedIn ? (
          !toggle ? (
            <button
              className="w-10 h-10 right-0 hamburger md:hidden"
              onClick={() => setToggle(true)}
            ></button>
          ) : (
            <button
              className="w-10 h-10 right-0 cross md:hidden relative z-40"
              onClick={() => setToggle(false)}
            ></button>
          )
        ) : null}
        <div className="hidden lg:flex items-center gap-4 *:text-base *:text-white">
          <Button variant="link">Fav Creators</Button>
          <Button variant="link">Merchandise</Button>
          <Button variant="link">Brand</Button>
          <Button variant="link">Digital</Button>
        </div>
        {!toggle ? (
          ""
        ) : (
          <div className="flex flex-col z-30 md:hidden absolute top-0 right-0 bg-black items-start gap-4 py-8 px-3 pr-6 md:text-xl">
            <div className="pl-3">
              <Image className="w-20 rounded-full" src={ProfileImg} />
              <p className="font-bold">Samira Hadid</p>
              <p>@samirahadid</p>
            </div>
            <Button
              variant="link"
              className="text-white opacity-70 !justify-start"
            >
              <Image src={UserOutlineIcon}></Image>
              Profile
            </Button>
            <Button variant="link" className="text-white opacity-70">
              <Image src={LocationIcon}></Image>
              Address
            </Button>
            <Button variant="link" className="text-white opacity-70">
              <Image src={HeadphoneIcon}></Image>
              Contact Us
            </Button>
            <Button variant="link" className="text-white opacity-70">
              <Image src={InfoIcon}></Image>
              About Us
            </Button>

            <Button
              variant="link"
              className="text-white mt-5"
              onClick={() => {
                setToggle(false);
                setIsLoggedIn(false);
              }}
            >
              <Image src={InfoIcon}></Image>
              Logout
            </Button>
          </div>
        )}
        <div
          className={
            "w-20 py-2 px-3 bg-white rounded-3xl md:flex items-center justify-between hidden"
          }
        >
          <button>
            <div className="flex items-center justify-center size-6 bg-gray-100 rounded-full">
              <Image
                className={"absolute"}
                src={UserIcon}
                width={10}
                height={15}
                alt="logo"
              />
            </div>
          </button>
          <div className="relative">
            <button onClick={() => setToggle(!toggle)}>
              <Image
                className={toggle ? "rotate-180" : ""}
                src={DownArrowIcon}
                width={15}
                height={15}
                alt="logo"
              />
            </button>
            {toggle ? (
              <div className="absolute z-30 -translate-x-1/2 translate-y-3 rounded-xl hidden md:block p-4 space-y-2 bg-black">
                <Button variant="link" className="text-white">
                  Profile
                </Button>
                <Button variant="link" className="text-white">
                  Dashboard
                </Button>
                <Button variant="link" className="text-white">
                  My Store
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
