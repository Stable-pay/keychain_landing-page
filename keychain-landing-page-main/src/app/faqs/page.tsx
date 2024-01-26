import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function FAQs() {
  return (
    <>
      <div className="bg-black w-full font-lato">
        <Navbar />
        <div className="px-6 lg:px-12 pt-20 lg:pt-32 text-white">
        <div className="text-2xl md:text-3xl font-bold pb-4">FAQs</div>
          <div className="pb-4">
            <h1 className="text-base md:text-lg font-bold pb-2">
              How do I download the app?
            </h1>
            <p className="text-xs md:text-sm text-[#8E8E93]">
              Keychain is a Progressive Web App (PWA), which means you don't
              need to download it from any app store. To access Keychain on your
              mobile device, follow these simple steps: <br />
              <ul className="list-decimal pl-8">
                <li>Open your mobile browser.</li>
                <li>Go to <a href="https://app.keychain.money" target="_blank"><u className="text-[#007AFF]">https://app.keychain.money.</u></a></li>
                <li>Tap the "share" icon in your browser.</li>
                <li>Select "Add to home screen".</li>
                <li>
                  You'll now have the Keychain app icon on your home screen for
                  easy access.
                </li>
              </ul>
              <br />
              Enjoy using Keychain seamlessly!
            </p>
          </div>
          <div className="pb-4">
            <h1 className="text-base md:text-lg font-bold pb-2">
              What is Keychain?
            </h1>
            <p className="text-xs md:text-sm text-[#8E8E93]">
              Keychain is a user-friendly digital wallet that simplifies
              payments. You can send money directly to another user or share a
              payment link - all without fees, delays, or middlemen. Say goodbye
              to traditional cash and bank hassles!
            </p>
          </div>
          <div className="pb-4">
            <h1 className="text-base md:text-lg font-bold pb-2">
              Which countries do you support?
            </h1>
            <p className="text-xs md:text-sm text-[#8E8E93]">
              Keychain currently supports sending and receiving payments locally
              or internationally in the following countries: <br />
              <ul className="list-disc pl-8">
                <li>USA</li>
                <li>India</li>
                <li>Chile</li>
                <li>Peru</li>
                <li>Colombia</li>
                <li>Mexico</li>
              </ul>
              <br />
              We're continuously working to expand our reach, so stay tuned for
              updates on additional supported countries in the future!
            </p>
          </div>
          <div className="pb-4">
            <h1 className="text-base md:text-lg font-bold pb-2">
              Pay by sharing a link. What does that mean?
            </h1>
            <p className="text-xs md:text-sm text-[#8E8E93]">
              A Keychain payment link is a simple URL (link) that you can
              generate in the Keychain app and share with anyone via email or
              messaging apps like WhatsApp, text messages, or chat. It contains
              all the information needed for them to receive the money you're
              sending. Just share the link, and they can collect the funds—it's
              as simple and as magical as that!
            </p>
          </div>
          <div className="pb-4">
            <h1 className="text-base md:text-lg font-bold pb-2">
              How do I fund my Keychain Account Balance so that I can make
              payments?
            </h1>
            <p className="text-xs md:text-sm text-[#8E8E93]">
              You have two convenient options to add funds to your Keychain
              Balance: <br />
              <ul className="pl-8 list-disc">
                <li>
                  <strong className="text-white">Wallet Transfer:</strong> For a near-instant transfer,
                  you can send funds from your existing web3 wallet, such as
                  Metamask or Coinbase, directly to your Keychain Balance.
                  Please ensure that you are sending{" "}
                  <strong>
                    <u>USDC</u>
                  </strong>{" "}
                  on the{" "}
                  <strong>
                    <u>Polygon network</u>
                  </strong>{" "}
                  to facilitate a smooth transaction.
                </li>
                <li>
                  <strong className="text-white">Bank Account:</strong> You can transfer funds from
                  your bank account to your Keychain Balance through an on-ramp
                  service provider. To get started, complete their Know Your
                  Customer (KYC) process and request to add funds. It's
                  important to note that on-ramp partners are third-party
                  services, and we do not control their fees or transaction
                  times. The time it takes for your funds to reflect in your
                  wallet may vary.
                </li>
              </ul>
              <br />
              Choose the method that suits you best, and start enjoying the
              convenience of Keychain for your digital payments!
            </p>
          </div>
          <div className="pb-4">
            <h1 className="text-base md:text-lg font-bold pb-2">
              Can I change my native currency?
            </h1>
            <p className="text-xs md:text-sm text-[#8E8E93]">
              Absolutely! You can change your native currency to your preferred
              local currency within Keychain. It's important to note that your
              chosen currency is for display purposes, as you are actually
              holding stablecoin assets. Keychain's platform will automatically
              convert your stablecoin holdings into your selected local
              currency, ensuring a seamless experience.
            </p>
          </div>
          <div className="pb-4">
            <h1 className="text-base md:text-lg font-bold pb-2">
              Is Keychain Secure?
            </h1>
            <p className="text-xs md:text-sm text-[#8E8E93]">
              Yes, Keychain prioritizes your security. We use advanced
              technology like blockchain and smart contracts to safeguard your
              assets and transactions. Plus, our smart contract wallets work
              seamlessly with your web2 logins, making your private key more
              secure. Your safety is our top concern.
            </p>
          </div>
          <div>
            <h1 className="text-base md:text-lg font-bold pb-2">
              What Happens If I Send Funds to the Wrong Recipient?
            </h1>
            <p className="text-xs md:text-sm text-[#8E8E93]">
              With blockchain technology, transactions are irreversible, much
              like giving someone physical cash. Once you send funds, they can
              only be retrieved if the recipient chooses to send them back to
              you. So, it's crucial to double-check the recipient's details
              before making a transaction to ensure it goes to the right person.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
