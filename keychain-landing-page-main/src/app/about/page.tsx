import Image from "next/image";
import Logo from "./logo.png";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <div className="bg-black w-full font-lato">
        <Navbar/>
        <div className="px-6 lg:px-12 pt-20 lg:pt-32">
          <div className="text-2xl md:text-3xl font-bold pb-4">About Us</div>
          <div className="flex flex-col gap-4 text-xs md:text-sm text-[#8E8E93] pb-4">
            <h1>
              Imagine a world where money is not just a means of exchange, but a
              gateway to new and endless opportunities.
            </h1>
            <h1>
              The concept of money has continually evolved. In ancient times,
              people relied on barter systems, directly exchanging goods they
              needed. As money became more sophisticated, standardized coins
              were introduced and eventually paper money. Each innovation
              represented a significant leap forward in simplifying trade and
              commerce.
            </h1>
            <h1>
              Money is constantly evolving. It evolves to become simpler and
              easier for everyone to use.
            </h1>
          </div>
          <hr className="border border-[#8E8E93]" />
          <div className="text-base md:text-lg font-bold pt-4 pb-4">
            A New Language in Payments
          </div>
          <div className="flex flex-col gap-4 text-xs md:text-sm text-[#8E8E93]">
            <h1>
              We are contributing to this evolution by building Keychain. We are
              transforming complex blockchain technology into something
              practical and useful.
            </h1>
            <h1>
              We recognized the complexity and unfamiliarity of using crypto for
              everyday payments. Keychain is our solution, simplifying crypto
              transactions to make them as straightforward as traditional ones.
            </h1>
            <h1>
              Our journey with Keychain is deeply personal, born from our
              struggle with slow, costly cross-border payments. We've turned
              this challenge into a commitment to empower millions, transforming
              personal hurdles into a global solution.
            </h1>
            <h1>
              We're witnessing the next phase in the evolution of money. We're
              excited about this journey. If you're excited too, please reach
              out to us at <a href="mailto:hello@keychain.money" target="_blank"><u className="text-[#007AFF]">hello@keychain.money</u></a>.
            </h1>
            <h1>– <a href="https://kunalpurohit.xyz/" target="_blank"><u>Kunal</u></a>, Yash, Mukul, Anuj and entire Keychain team</h1>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
