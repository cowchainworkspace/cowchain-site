"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "../blocks/HeroSection";
import { useParams } from 'next/navigation';

import splash from "@/assets/blog/articles/splash.png";
import planet from "@/assets/blog/articles/planet.png";
import FooterForm from "@/components/utils/FooterForm";
import { Blog } from "../blocks/Blog";
import Image from "next/image";
import { ShareLinks } from "../blocks/ShareLinks";
import rightArrow from '@/assets/article/rightArrow.svg';
import authorIcon from '@/assets/article/authorIcon.png'
import { useGetArticleBySlug } from "@/hooks/use-strapi";


const titles = ["first", "second", "third"];

function Article() {
  const [activeButton, setActiveButton] = useState(null);

  const params = useParams(); 
  const { slug } = params;
  const { data, isLoading, isError } = useGetArticleBySlug(slug);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("first-article");
      const secondSection = document.getElementById("second-article");
      const thirdSection = document.getElementById("third-article");
  
      const sections = [
        { id: "first-article", offset: firstSection.getBoundingClientRect().top },
        { id: "second-article", offset: secondSection.getBoundingClientRect().top },
        { id: "third-article", offset: thirdSection.getBoundingClientRect().top }
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

  return (
    <section>
      <div className="relative min-h-screen  bg-black">
        <HeroSection />
        <Image
          src={splash}
          className=" block max-h-[560px] w-full object-cover"
          alt=""
        />

        <div className="mb-28 mt-20 flex  items-start justify-center gap-[71px]">
          <div className="sticky hidden top-0 2xl:flex w-[203px] flex-col items-start transition-all duration-500">
            {titles.map((title, index) => (
              <button
                key={index}
                title={title}
                onClick={() => scrollToSection(`${title}-article`)}
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
            <div className="container relative text-left 2xl:max-w-[670px]">
              <h3
                id="first-article"
                className="mb-6 text-left text-2xl uppercase"
              >
                {data?.attributes.Title}
              </h3>
              <span className="text-sm  text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </span>
              <Image
                src={planet}
                className=" my-12 block max-h-[260px] w-full object-cover"
                alt=""
              />
              <span className="text-sm  text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </span>
            </div>
            <div className="relative my-28 flex w-full flex-col items-center  overflow-hidden">
              <h3 className="mb-2 text-2xl uppercase">
                Subscribe to our newsletter
              </h3>
              <span className="mb-10 text-secondary">
                Receive weekly updates on new posts and features
              </span>
              <FooterForm />
            </div>

            <div className="container mb-28 mt-20 text-left 2xl:max-w-[670px] ">
              <h3
                id="second-article"
                className="mb-6 text-left text-2xl uppercase"
              >
                Building Trust in the Metaverse: Security and Privacy in Web3
                Development
              </h3>
              <span className="text-sm  text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </span>
            </div>

            <div className="container mb-28 mt-20 text-left 2xl:max-w-[670px] ">
              <h3
                id="third-article"
                className="mb-6 text-left text-2xl uppercase"
              >
                Building Trust in the Metaverse: Security and Privacy in Web3
                Development
              </h3>
              <span className="text-sm  text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae.
              </span>
            </div>

            <div className="flex w-[560px] flex-col items-center">
              <Image className="w-[56px] h-[56px] mb-[16px]" src={authorIcon} alt="" />

              <div className="flex flex-col items-center gap-[2px] mb-[24px]">
                <span className="text-[#BBBBBB] text-[12px] leading-[22px]">written by</span>
                <span className="text-[white] text-[16px] leading-[22px] text-center">John Smith, Project Manager at Cowchain</span>
              </div>

              <p className="w-[410px] mb-[24px] text-[#BBBBBB] text-[14px]">
                Proin a ipsum massa. Integer non nulla ultrices, aliquet ante a,
                sagittis tortor. Mauris suscipit tellus in turpis tempus
                venenatis
              </p>

              <a href="/" className="flex items-center gap-[16px]">
                <span className="text-[white] text-[16px] uppercase underline">all articles of this author</span>
                <Image src={rightArrow} className="w-[16px] h-[16px]" alt="" />
              </a>
            </div>
          </div>

          <div className="sticky top-0 ml-[10px] hidden  2xl:flex flex-col items-center  overflow-hidden">
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

        <Blog />
      </div>
    </section>
  );
}

export default Article;