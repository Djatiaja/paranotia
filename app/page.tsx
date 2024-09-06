import Link from "next/link";
import Nav from "./navbar/Nav";
import LinkProject from "./LinkProject/LinkProject";

export default function Home() {
  return (
    <div className="px-52 pt-20 flex w-full flex-col ">
      <Nav />
      <div className="flex w-full justify-center">
        <img
          src="https://placehold.co/1500x300"
          alt="placeholder"
          width={"100%"}
          height={300}
        />
      </div>
      <div className="pt-6 text-xl">
        <h1 className="text-2xl">
          <LinkProject
            text="paranotia"
            link="https://www.twitter.com/paranotia"
            target="_blank"
          />
          &nbsp; is a self-taught artist, majoring in sociology. Born with the
          spirit of doing qualitative research. Occasionally writing&nbsp;
          <LinkProject
            text="poems"
            link="https://www.instagram.com/sajakmesin"
            target="_blank"
          />
          . Playing with &nbsp;
          <LinkProject
            text="codes"
            link="https://www.github.com/faisipol"
            target="_blank"
          />
          &nbsp; on the side. Their interest are community service, advocacy,
          and inclusivity. They would like to spend time to learn something new,
          everyday. Based in Yogyakarta, Indonesia.
        </h1>
      </div>
    </div>
  );
}
