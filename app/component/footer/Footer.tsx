import LinkProject from "../LinkProject/LinkProject";

export default function Footer() {
    return (
      <div className="fixed mx-auto self-center top-[88vh]">
        <div className="flex w-full justify-center gap-12 mt-10">
          <LinkProject text="blog" link="/blogs" target="_self" />
          <LinkProject text="gallery" link="/" target="_self" />
          <LinkProject text="mail" link="/" target="_self" />
        </div>
      </div>
    );
}