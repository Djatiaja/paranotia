import Link from "next/link";
import Nav from "./component/navbar/Nav";
import LinkProject from "./component/LinkProject/LinkProject";
import Footer from "./component/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="px-52 pt-12 flex w-full flex-col ">
        <Nav />
        <div className="flex w-full justify-center">
          <img
            src="https://placehold.co/1500x300"
            alt="placeholder"
            width={"100%"}
            height={300}
          />
        </div>
        <div className="pt-6 text-3xl/8">
          <h1 className="">
            <LinkProject text="easy" link="/" target="_blank" />
            &nbsp;(dia) <br />
            is a self-proclaimed artist. Focusing on graphic design and 3D art.
          </h1>
          <br />
          <p>
            Occasionally writing{" "}
            <LinkProject text="poems" link="/" target="_blank" />. Playing
            with&nbsp;
            <LinkProject text="codes" link="/" target="_blank" /> on the side.{" "}
            <br /> Their interest are community service, advocacy, inclusivity,
            and journalism. Would like to spend time to learn something new,
            everyday.
          </p>
          <br />
          <p>Based in Yogyakarta, Indonesia.</p>
          <br />
          <h2>
            <LinkProject text="easy!`" link="\" target="_blank" /> currently
            active in{" "}
            <LinkProject
              text="DEMA Fisipol UGM"
              link="\"
              target="_blank"
              extraStyle="underline"
            />
            ,{" "}
            <LinkProject
              text="SAUDC UGM"
              link="\"
              target="_bank"
              extraStyle="underline"
            />
            , and{" "}
            <LinkProject
              text="LPPM SINTESA"
              link="\"
              target="_bank"
              extraStyle="underline"
            />
            .
          </h2>
          <br />
          <p>Reach me out on @feasypol, everywhere.</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
