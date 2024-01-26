"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowLongDownIcon,
  ArrowsUpDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useLayoutEffect, useState } from "react";
import MockUp from "../../../public/International-txn.svg";
import Image from "next/image";
import Link from "next/link";
import { exchangeRate } from "@/components/utils/getConversion";

export default function FAQs() {
  const [value, setValue] = useState("100.00");
  const [exRate,setExrate] = useState(0.0);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = e.target.value;
    if (Number(newValue) < 0) return;
    setValue(newValue);
  };
  useEffect(() => {
    const getExRate=async () => {
        const exRateFetched=await exchangeRate("INR");
        setExrate(Number(exRateFetched));
    }
    getExRate();
},[]);
const amount=(exRate*Number(value)).toFixed(2);
const recevingAmount=Intl.NumberFormat("en-US").format(Number(amount));
  return (
    <>
      <div className="bg-black w-full font-lato text-white">
        <Navbar />
        <div className="pt-52 pb-44 hidden lg:block w-full">
          <div className="flex flex-col">
            <div className="font-bold lg:text-[42px] xl:text-[55px] xl:font-extrabold text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 ">
                Sending money to India is{" "}
              </span>
              <span className="line-through font-light">
                slow and expensive
              </span>
            </div>
            <div className="flex justify-center lg:gap-12 xl:gap-52">
              <div className="pt-12 pb-12 lg:pl-12 xl:pl-16">
                <div className="border border-[#1C1C1E] rounded-3xl flex flex-col px-4 py-6">
                  <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F73558] from-40% to-[#0A84FF] to-[60%] text-base font-bold text-center">
                    USD to INR
                  </h1>
                  <div className="pt-7">
                    <div className="flex justify-between px-5 border border-[#1C1C1E] bg-[#1C1C1E] rounded-[20px] py-3 text-[#FFFFFF] relative">
                      <div className="flex"><h1 className="text-2xl leading-tight px-1">$</h1>
                      <div>
                        <input
                          name="sentAmount"
                          inputMode="decimal"
                          type="number"
                          value={value}
                          onChange={handleInputChange}
                          required={true}
                          placeholder="Add Amount"
                          className="text-2xl leading-none bg-inherit w-fit focus:outline-none"
                        />
                      </div></div>
                      <div className="right-5 top-4 absolute">
                        <h1 className="text-sm bg-black rounded-lg px-2 py-[1px]">
                          USD ($)
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 flex justify-center">
                    <ArrowsUpDownIcon className="w-6" />
                  </div>
                  <div className="flex justify-between px-5 border border-[#1C1C1E] bg-[#1C1C1E] rounded-[20px] py-3 text-[#8E8E93] relative">
                    <div className="flex"><h1 className="text-2xl leading-tight px-1">₹</h1>
                    <div>
                      <input
                        type="text"
                        value={recevingAmount}
                        disabled={true}
                        className="text-2xl leading-none bg-inherit w-fit focus:outline-none"
                      />
                    </div></div>
                    <div className="right-5 top-4 absolute">
                      <h1 className="text-sm bg-black rounded-lg px-2 py-[1px]">
                        INR (₹)
                      </h1>
                    </div>
                  </div>
                  <div className="w-full flex justify-end text-sm text-[#0A84FF] pt-2">
                    <h1>1 USD = {exRate.toFixed(2)} INR</h1>
                    <div className="pt-[2px] px-1">
                      <ExclamationCircleIcon className="rotate-180 w-[15px]" />
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <Link href={"https://app.keychain.money"} target="_blank"><button className="w-full text-center rounded-full text-white bg-[#F73558] text-base font-semibold py-3 hover:text-[#F73558] hover:bg-white">
                    Send money now
                  </button></Link>
                </div>
              </div>
              <div>
                <div className="-ml-10 py-2">
                  <ArrowLongDownIcon className="h-32" />
                </div>
                <div className="text-right font-bold lg:text-[42px] xl:text-[55px] xl:font-extrabold">
                  now <span className="text-[#FF9933]">fast</span> and{" "}
                  <span className="text-[#138808]">free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-24 pb-20 w-full lg:hidden">
          <div className="flex flex-col">
            <div className="font-bold flex flex-col text-3xl text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 ">
                Sending money to India is{" "}
              </span>
              <span className="line-through font-light">
                slow and expensive
              </span>
            </div>
            <div className="text-center">
            <div>
                <div className="flex justify-center py-3">
                  <ArrowLongDownIcon className="h-16" />
                </div>
                <div className="font-bold text-3xl text-center">
                  now <span className="text-[#FF9933]">fast</span> and{" "}
                  <span className="text-[#138808]">free</span>
                </div>
              </div>
              <div className="pt-12 px-16 flex justify-center">
                <div className="md:w-96 w-72">
                <div className="border border-[#1C1C1E] rounded-3xl flex flex-col px-4 py-6">
                  <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F73558] from-40% to-[#0A84FF] to-[60%] text-base font-bold text-center">
                    USD to INR
                  </h1>
                  <div className="pt-7">
                    <div className="flex justify-between px-5 border border-[#1C1C1E] bg-[#1C1C1E] rounded-[20px] py-3 text-[#FFFFFF] relative">
                      <div className="flex"><h1 className="text-2xl leading-tight px-1">$</h1>
                      <div>
                        <input
                          name="sentAmount"
                          inputMode="decimal"
                          type="number"
                          value={value}
                          onChange={handleInputChange}
                          required={true}
                          placeholder="Add Amount"
                          className="text-2xl leading-none bg-inherit w-fit focus:outline-none"
                        />
                      </div></div>
                      <div className="right-5 top-4 absolute">
                        <h1 className="text-sm bg-black rounded-lg px-2 py-[1px]">
                          USD ($)
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 flex justify-center">
                    <ArrowsUpDownIcon className="w-6" />
                  </div>
                  <div className="flex justify-between px-5 border border-[#1C1C1E] bg-[#1C1C1E] rounded-[20px] py-3 text-[#8E8E93] relative">
                    <div className="flex"><h1 className="text-2xl leading-tight px-1">₹</h1>
                    <div>
                      <input
                        type="text"
                        value={recevingAmount}
                        disabled={true}
                        className="text-2xl leading-none bg-inherit w-fit focus:outline-none"
                      />
                    </div></div>
                    <div className="right-5 top-4 absolute">
                      <h1 className="text-sm bg-black rounded-lg px-2 py-[1px]">
                        INR (₹)
                      </h1>
                    </div>
                  </div>
                  <div className="w-full flex justify-end text-sm text-[#0A84FF] pt-2">
                    <h1>1 USD = {exRate.toFixed(2)} INR</h1>
                    <div className="pt-[2px] px-1">
                      <ExclamationCircleIcon className="rotate-180 w-[15px]" />
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <Link href={"https://app.keychain.money"} target="_blank"><button className="w-full text-center rounded-full text-white bg-[#F73558] text-base font-semibold py-3 hover:text-[#F73558] hover:bg-white">
                    Send money now
                  </button></Link>
                </div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F73558] w-full h-[535px] hidden lg:block">
          <div className="text-center pt-20 lg:text-4xl xl:text-5xl font-semibold text-[#9D0025]">
            <h1>
              Money transfer app - without borders -{" "}
              <span className="text-white">without fees!</span>
            </h1>
          </div>
          <div className="flex justify-center py-20 gap-20 xl:gap-24">
          <Image src={MockUp} alt="Mockup" width={230}></Image>
          <div className="flex justify-end text-2xl font-extrabold">
            <div className="flex flex-col gap-9">
              <div className="flex gap-4">
                <div className="border border-black bg-black h-10 w-10 text-center flex flex-col justify-center rounded-full">
                  1
                </div>
                <h1 className="text-black pt-[2px]">
                  Add funds in your Keychain wallet
                </h1>
              </div>
              <div className="flex gap-4">
                <div className="border border-black bg-black h-10 w-10 text-center flex flex-col justify-center rounded-full">
                  2
                </div>
                <h1 className="text-black pt-[2px]">
                  Check USD to INR exchange rate
                </h1>
              </div>
              <div className="flex gap-4">
                <div className="border border-black bg-black h-10 w-10 text-center flex flex-col justify-center rounded-full">
                  3
                </div>
                <h1 className="text-black pt-[2px]">
                  Send money with a simple link - It’s free!
                </h1>
              </div>
              <Link href={"/faqs"}><h1 className="text-xl text-[#9D0025] underline">
                Your payments are secure {">"}
              </h1></Link>
            </div>
          </div>
          </div>
        </div>
        <div className="bg-[#F73558] w-full lg:hidden py-16">
          <div className="text-center text-xl font-bold text-[#9D0025]">
            <h1 className="flex flex-col">
              Money transfer app - without borders
              <span className="text-white">- without fees!</span>
            </h1>
          </div>
          <div className="py-12 flex justify-center">
          <Image src={MockUp} alt="Mockup" width={230}></Image></div>
          <div className="flex justify-center text-base font-black">
            <div className="flex flex-col">
              <div className="flex gap-2">
                <div className="border border-black bg-black h-8 w-8 text-center flex flex-col justify-center rounded-full">
                  1
                </div>
                <h1 className="text-black pt-1">
                  Add funds in your Keychain wallet
                </h1>
              </div>
              <div className="flex gap-2 py-6">
                <div className="border border-black bg-black h-8 w-8 text-center flex flex-col justify-center rounded-full">
                  2
                </div>
                <h1 className="text-black pt-1">
                  Check USD to INR exchange rate
                </h1>
              </div>
              <div className="flex gap-2">
                <div className="border border-black bg-black h-8 w-8 text-center flex flex-col justify-center rounded-full">
                  3
                </div>
                <h1 className="text-black pt-1">
                  Send money with a simple link - It’s free!
                </h1>
              </div>
              <Link href={"/faqs"}><h1 className="text-sm pt-3 text-[#9D0025] underline">
                Your payments are secure {">"}
              </h1></Link>
            </div>
          </div>
          </div>
        <div className="pt-16 lg:pt-24 pb-6 lg:pb-12 text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-snug">Get started <br/>With Keychain</h1>
            </div>
            <div className="pt-8 lg:pt-14">
                <Link href="https://app.keychain.money" target="_blank"><button className="box1 py-3 px-10 text-xl font-medium">Get Started</button></Link>
            </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
