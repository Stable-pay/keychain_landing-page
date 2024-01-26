"use client";

import Image from "next/image";
import MockUpImage from "./mockup.svg";
import {
  ShieldCheckIcon,
  AdjustmentsVerticalIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Body() {
  return (
    <>
      <div className="px-6 lg:px-12 pt-24 lg:pt-40 flex flex-col gap-6 items-center text-white">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:font-extrabold text-center">
          Send money anywhere with a link
        </h1>
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 text-center">
          It’s completely decentralized - without borders - skip the fees!
        </h1>
        <a href="https://app.keychain.money" target="_blank">
          <button className="text-base md:text-lg xl:text-xl py-3 md-py-5 px-7 md:px-10 bg-[#F73558] rounded-full hover:text-[#F73558] hover:bg-white font-semibold">
            Get started
          </button>
        </a>
      </div>
      <div className="flex px-6 flex-col lg:flex-row lg:px-12 justify-between">
        <div className="hidden lg:flex">
          <div className="flex flex-col justify-center -mr-8">
            <div className="flex flex-col gap-4 border rounded-2xl border-[#1C1C1E] bg-[#1C1C1E] p-8 text-[#8E8E93] text-lg">
              <div className="flex gap-4">
                <div className="flex flex-col justify-center">
                  <LinkIcon className="h-12 w-12 text-[#F73558] border border-[#2C2C2E] bg-[#000] rounded-full p-[6px]" />
                </div>
                <h1 className="flex flex-col justify-center">
                  Make local or international payments with a simple link - It’s
                  free!
                </h1>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col justify-center">
                  <AdjustmentsVerticalIcon className="h-12 w-12 text-[#F73558] border border-[#2C2C2E] bg-[#000] rounded-full p-[6px]" />
                </div>
                <h1 className="flex flex-col justify-center">
                  You, and only you, keep custody of your money
                </h1>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col justify-center">
                  <ShieldCheckIcon className="h-12 w-12 text-[#F73558] border border-[#2C2C2E] bg-[#000] rounded-full p-[6px]" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1>
                    Your payments are{" "}
                    <span className="text-white font-medium">secure</span>
                  </h1>
                </div>
              </div>
              <Link href={"/faqs"}>
                <div className="text-md text-white cursor-pointer w-fit">
                  <h1>How it works &gt;</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex -mr-12">
          <Image src={MockUpImage} alt="mockup" width={600} />
        </div>
        <div className="lg:hidden flex flex-col gap-8">
          <div className="w-full flex justify-center">
            <Image src={MockUpImage} alt="mockup-image" width={450} />
          </div>
          <div className="flex flex-col gap-3 md:gap-4 border rounded-2xl border-[#1C1C1E] bg-[#1C1C1E] p-4 text-[#8E8E93] text-xs md:text-base">
            <div className="flex gap-2 md:gap-4">
              <div className="flex flex-col justify-center">
                <LinkIcon className="h-10 w-10 text-[#F73558] border border-[#2C2C2E] bg-[#000] rounded-full p-[6px]" />
              </div>
              <h1 className="flex flex-col justify-center">
                Make local or international payments with a simple link - It’s
                free!
              </h1>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div className="flex flex-col justify-center">
                <AdjustmentsVerticalIcon className="h-10 w-10 text-[#F73558] border border-[#2C2C2E] bg-[#000] rounded-full p-[6px]" />
              </div>
              <h1 className="flex flex-col justify-center">
                You, and only you, keep custody of your money
              </h1>
            </div>
            <div className="flex gap-2 md:gap-4">
              <div className="flex flex-col justify-center">
                <ShieldCheckIcon className="h-10 w-10 text-[#F73558] border border-[#2C2C2E] bg-[#000] rounded-full p-[6px]" />
              </div>
              <div className="flex flex-col justify-center">
                <h1>
                  Your payments are{" "}
                  <span className="text-white font-medium">secure</span>
                </h1>
              </div>
            </div>
            <div className="text-sm md:text-base text-white cursor-pointer w-fit">
              <h1>How it works &gt;</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
