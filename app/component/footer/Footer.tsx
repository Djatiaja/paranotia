import LinkProject from "../LinkProject/LinkProject";

export default function Footer() {
    return (
      <div className="sticky bottom-8 mx-auto self-center">
        <div className="flex w-full justify-center gap-12 mt-9">
          <LinkProject text="blog" link="/blogs" target="_self" />
          <LinkProject text="gallery" link="/" target="_self" />
          <LinkProject text="mail" link="/" target="_self" />
        </div>
      </div>
    );
}