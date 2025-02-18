"use client";

import rightArrow from "@/assets/article/rightArrow.svg";
import { Loading } from "@/components/loader/Loading";
import FooterForm from "@/components/utils/FooterForm";
import { useGetArticleBySlug } from "@/hooks/use-strapi";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Blog } from "../blocks/Blog";
import { HeroSection } from "../blocks/HeroSection";
import { ShareLinks } from "../blocks/ShareLinks";

const titles = ["first", "second", "third"];

function Article() {
  const [activeButton, setActiveButton] = useState(null);

  const params = useParams();
  const { slug } = params;
  const { data, isLoading, isError } = useGetArticleBySlug(slug);
  const textArrayLength = data ? data?.attributes.Text_block.length : 0;

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("first-article");
      const secondSection = document.getElementById("second-article");
      const thirdSection = document.getElementById("third-article");
      if (!firstSection && !secondSection && !thirdSection) {
        return;
      }
      const sections = [
        {
          id: "first-article",
          offset: firstSection.getBoundingClientRect().top
        },
        {
          id: "second-article",
          offset: secondSection.getBoundingClientRect().top
        },
        {
          id: "third-article",
          offset: thirdSection.getBoundingClientRect().top
        }
      ];

      const closestSection = sections.reduce((prev, curr) =>
        Math.abs(curr.offset) < Math.abs(prev.offset) ? curr : prev
      );

      setActiveButton(closestSection.id);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[100dvh] items-start">
        <Loading />
      </div>
    );
  }

  const returnSplitValue = (text, value) => {
    if (!text) {
      return;
    }
    return text.split("\n")[value].replaceAll("#", "");
  };

  return (
    <section>
      <div className="relative  min-h-screen bg-black">
        <HeroSection
          tag={data?.attributes.tag}
          title={data?.attributes.title}
          author={data?.attributes.author_title.split(",")[0]}
        />
        <Image
          height={560}
          width={600}
          src={data?.attributes.Banner.data?.attributes?.url}
          className="block max-h-[560px] w-full object-cover"
          alt=""
        />

        <div className="mb-28 mt-20 flex  items-start justify-center gap-[71px]">
          <div className="sticky top-0 hidden w-[203px] flex-col items-start transition-all duration-500 xl:flex">
            {titles.map((title, index) => (
              <button
                key={index}
                title={title}
                onClick={() => {
                  scrollToSection(`${title}-article`);
                }}
                className={`h-[48px] pl-[20px] text-[12px] leading-[14px] ${
                  activeButton === `${title}-article`
                    ? "text-[#925EFF]"
                    : "text-[#BBBBBB]"
                }`}
                style={{
                  borderLeft:
                    activeButton === `${title}-article`
                      ? "2px solid #925EFF"
                      : "2px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                {title}
              </button>
            ))}
          </div>

          <div>
            <div className="container relative max-w-[340px] text-left md:max-w-[670px]">
              <h3
                id={`first-article`}
                className="mb-6 text-left text-2xl uppercase"
              >
                {returnSplitValue(data?.attributes.Paragraph[0].text, 0)}
              </h3>
              <p className="text-sm  text-secondary">
                {returnSplitValue(data?.attributes.Paragraph[0].text, 1)}
              </p>
              <Image
                src={data?.attributes.center_content.data?.attributes?.url}
                height={560}
                width={600}
                className=" my-12 block max-h-[260px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="container mb-12 mt-10 max-w-[340px] text-left md:mb-28 md:mt-20 md:max-w-[670px] ">
              <h3
                id={"second-article"}
                className="mb-6 text-left text-2xl uppercase"
              >
                {returnSplitValue(data?.attributes.Paragraph[0].text, 0)}
              </h3>
              <p className="text-sm  text-secondary">
                {returnSplitValue(data?.attributes.Paragraph[0].text, 1)}
              </p>
            </div>
            <div className="container relative my-28 flex w-full flex-col items-center  overflow-hidden">
              <h3 className="mb-2 text-center text-2xl uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mb-10 text-center text-secondary">
                Receive weekly updates on new posts and features
              </p>
              <FooterForm />
            </div>
            <div className="container mb-12 mt-10 max-w-[340px] text-left md:mb-28 md:mt-20 md:max-w-[670px] ">
              <h3
                id={"third-article"}
                className="mb-6 text-left text-2xl uppercase"
              >
                {returnSplitValue(data?.attributes.Paragraph[0].text, 0)}
              </h3>
              <p className="text-sm  text-secondary">
                {returnSplitValue(data?.attributes.Paragraph[0].text, 1)}
              </p>
            </div>

            <div className="container flex w-[340px] flex-col items-center md:w-[560px]">
              <Image
                width={16}
                height={16}
                className="mb-[16px] h-[56px] w-[56px]  rounded-full"
                src={data?.attributes.author_avatar.data?.attributes?.url}
                alt=""
              />

              <div className="mb-[24px] flex flex-col items-center gap-[2px]">
                <span className="text-[12px] leading-[22px] text-[#BBBBBB]">
                  written by
                </span>
                <span className="text-center text-[16px] leading-[22px] text-[white]">
                  {data?.attributes.author_title}
                </span>
              </div>

              <p className="mb-[24px] text-center text-[14px] text-[#BBBBBB] md:w-[410px]">
                {data?.attributes.author_description}
              </p>

              <a href="/" className="flex items-center gap-[16px]">
                <span className="text-[16px] uppercase text-[white] underline">
                  all articles of this author
                </span>
                <Image src={rightArrow} className="h-[16px] w-[16px]" alt="" />
              </a>
            </div>
          </div>

          <div className="sticky top-0 ml-[10px] hidden  flex-col items-center overflow-hidden  2xl:flex">
            <h3 id="first-article" className="mb-2 text-2xl uppercase">
              Subscribe to our newsletter
            </h3>
            <span className="mb-10 text-secondary">
              Receive weekly updates on new posts and features
            </span>
            <FooterForm />

            <div className="mt-[40px] w-full">
              <h3 className="mb-[12px] text-[18px] uppercase">
                Share the article
              </h3>
              <ShareLinks />
            </div>
          </div>
        </div>

        <Blog slug={slug} />
      </div>
    </section>
  );
}

export default Article;
