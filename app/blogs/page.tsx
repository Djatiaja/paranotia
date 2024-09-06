import Link from "next/link";
import LinkProject from "../component/LinkProject/LinkProject";
import Nav from "../component/navbar/Nav";
import Hero from "../component/Hero/Hero";
import Footer from "../component/footer/Footer";

export default function Page() {
  return (
    <div className="px-52 pt-12 flex w-full flex-col">
      <Nav />
      <div className="flex w-full justify-center">
        <img
          src="https://placehold.co/1500x300"
          alt="placeholder"
          width={"100%"}
          height={300}
        />
      </div>
      <Hero />
      <Footer />
    </div>
  );
}
