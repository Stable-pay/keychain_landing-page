import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Body from "@/components/home";

export default function Home() {
  return (
    <>
      <div className="bg-black w-full font-lato">
        <Navbar/>
        <Body />
        <Footer/>
      </div>
    </>
  );
}
