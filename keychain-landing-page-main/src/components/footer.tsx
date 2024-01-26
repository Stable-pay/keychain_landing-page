"use client";

import Link from "next/link";

export default function Footer(){
    return (
        <div className="px-6 lg:px-12 pt-10 pb-6 flex flex-col gap-3 text-white">
          <div className="text-lg flex flex-col gap-4 text-center md:flex-row md:gap-14">
            <Link href={"/about"}>
              <h1 className="hover:text-[#F73558] hover:cursor-pointer">
                About
              </h1>
            </Link>
            <a
              href="https://mirror.xyz/0x3a98E1e2ad7554AcbeDF1a43cCf8391ccFAE324e"
              target="_blank"
            >
              <h1 className="hover:text-[#F73558] hover:cursor-pointer">
                Blog
              </h1>
            </a>
            <a href="https://twitter.com/keychain_money" target="_blank">
              <h1 className="hover:text-[#F73558] hover:cursor-pointer">
                Twitter
              </h1>
            </a>
            <a href="mailto:hello@keychain.money" target="_blank">
              <h1 className="hover:text-[#F73558] hover:cursor-pointer">
                Contact Us
              </h1>
            </a>
          </div>
          <div className="text-[10px] md:flex text-center md:text-left text-[#8E8E93]">
            2023 Stable Labs Corporation. All Rights Reserved.
          </div>
        </div>
    )
}