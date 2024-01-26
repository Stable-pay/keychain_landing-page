"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.svg";
import { useState } from "react";
import {XMarkIcon,Bars3Icon} from "@heroicons/react/24/outline";

export default function Navbar(){
    const [hamburger,setHamburger] = useState(false);
    const handleHamburger = () => {
        setHamburger(!hamburger);
    }
    return (
        <>
        {hamburger === true ? <div className="fixed z-10 lg:hidden bg-black w-screen h-screen text-center text-xl text-white flex flex-col justify-center">
        <ul className="flex flex-col gap-10">
            <div className="relative">
                <div className="absolute right-12" onClick={() => handleHamburger()}>
                <XMarkIcon className="w-10 h-10"/>
                </div>
            </div>
          <Link href={"/"}>
            <li className="hover:text-[#F73558] hover:cursor-pointer" onClick={() => handleHamburger()}>
              Home
            </li>
          </Link>
          <Link href={"/faqs"}>
            <li className="hover:text-[#F73558] hover:cursor-pointer" onClick={() => handleHamburger()}>
              FAQs
            </li>
          </Link>
          <a href="https://app.keychain.money/" target="_blank">
            <li className="hover:text-[#F73558] hover:cursor-pointer" onClick={() => handleHamburger()}>
              Log in & Claim
            </li>
          </a>
        </ul>
    </div>: <div className="fixed px-4 lg:px-12 py-4 lg:py-8 w-full z-10">
    <div className="hidden lg:flex px-4 py-3 justify-between backdrop-blur-md border rounded-lg border-[#314254]">
      <Link href={"/"}>
        <div className="flex">
          <div className="flex gap-2">
            <Image src={Logo} alt="logo"/>
            <h1 className="text-2xl text-[#FFFFFF] font-bold flex flex-col justify-center">
            keychain
          </h1>
          </div>
        </div>
      </Link>
      <div className="flex flex-col justify-center">
      <div className="flex gap-28 text-base text-white font-bold">
        <Link href={"/"}>
          <h1 className="hover:text-[#F73558] hover:cursor-pointer">
            Home
          </h1>
        </Link>
        <Link href={"/faqs"}>
          <h1 className="hover:text-[#F73558] hover:cursor-pointer">
            FAQs
          </h1>
        </Link>
        <a href="https://app.keychain.money/" target="_blank">
          <h1 className="hover:text-[#F73558] hover:cursor-pointer">
            Log in & Claim
          </h1>
        </a>
      </div></div>
    </div>
    <div className="flex lg:hidden px-4 py-1 justify-between backdrop-blur-md border rounded-full border-[#314254]">
      <div>
      <Link href={"/"}>
        <div className="flex gap-1">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <h1 className="text-xl text-[#FFFFFF] font-bold flex flex-col justify-center">
            keychain
          </h1>
        </div>
      </Link>
      </div>
      <div className="flex flex-col justify-center" onClick={() => handleHamburger()}><Bars3Icon className="w-8 h-8"/></div>
    </div>
  </div>}
  </>
    )
}