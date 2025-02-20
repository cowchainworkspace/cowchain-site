"use client";
import ellipseBg from "@/assets/article/ellipse-article-bg.webp";
import rightArrow from "@/assets/article/rightArrow.svg";
import { Loading } from "@/components/loader/Loading";
import FooterForm from "@/components/utils/FooterForm";
import { useGetArticleBySlug } from "@/hooks/use-strapi";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { BlogBreadCrumb } from "../../components/BreadCrumb/BlogBreadCrumb";
import { Blog } from "../blocks/Blog";
import { HeroSection } from "../blocks/HeroSection";
import { ShareLinks } from "../blocks/ShareLinks";
const titles = ["first", "second", "third", "fourth", "five"];

function Article() {
  const [activeButton, setActiveButton] = useState(null);

  const params = useParams();
  const { slug } = params;
  const { data, isLoading, isError } = useGetArticleBySlug(slug);
  const textArrayLength = data
    ? data?.attributes.article_paragraphs.filter(
        (paragraph) => !paragraph.__component.includes("image")
      ).length
    : 0;
  const articleTitles = [];

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

  const getSplitText = (text, value) => {
    if (!text) {
      return;
    }

    return text.split("\n")[value].replaceAll("#", "");
  };

  const paragraphs = data.attributes.article_paragraphs.map((paragraph) => {
    if (!paragraph.__component.includes("image")) {
      const titleId = crypto.randomUUID();
      const title = getSplitText(paragraph.text, 0);
      const description = getSplitText(paragraph.text, 1);
      articleTitles.push({
        id: titleId,
        title
      });

      return {
        titleId,
        id: paragraph.id,
        title,
        description,
        component: paragraph.__component
      };
    }

    return {
      id: paragraph.id,
      component: paragraph.__component,
      imageUrl: paragraph.paragraph_image.data.attributes.url
    };
  });

  return (
    <section>
      <div className="relative  min-h-screen bg-black">
        <BlogBreadCrumb />
        <HeroSection
          tag={data?.attributes.tag}
          title={data?.attributes.article_title}
          author={data?.attributes.author_name.split(",")[0]}
        />
        <Image
          height={560}
          width={600}
          src={data?.attributes.banner_img.data?.attributes?.url}
          className="block max-h-[560px] w-full object-cover"
          alt=""
        />
        <div className="mb-28 mt-20 flex  items-start justify-center gap-[71px]">
          <div className="sticky top-0 hidden w-[203px] flex-col items-start transition-all duration-500 xl:flex">
            {articleTitles.map(({ title, id }) => (
              <button
                type="button"
                key={id}
                title={title}
                onClick={() => {
                  scrollToSection(`${id}`);
                }}
                className={`h-[48px] pl-[20px] text-[12px] leading-[14px] ${
                  activeButton === `${id}` ? "text-[#925EFF]" : "text-[#BBBBBB]"
                }`}
                style={{
                  borderLeft:
                    activeButton === `${id}`
                      ? "2px solid #925EFF"
                      : "2px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                {title}
              </button>
            ))}
          </div>

          <div>
            {paragraphs.map((paragraph, index) => {
              if (paragraph.component.includes("image")) {
                return (
                  <div className="container relative max-w-[340px] text-left md:max-w-[560px]">
                    <Image
                      src={paragraph.imageUrl}
                      height={560}
                      width={600}
                      className=" my-12 block max-h-[260px] w-full object-cover"
                      alt=""
                    />
                  </div>
                );
              }
              if (index === 2) {
                return (
                  <Fragment key={paragraph.id}>
                    <div className="container relative max-w-[340px] text-left md:max-w-[560px]">
                      <h3
                        id={`${paragraph.titleId}`}
                        className="mb-6 text-left text-2xl uppercase"
                      >
                        {paragraph.title}
                      </h3>
                      <p className="text-sm  text-secondary">
                        {paragraph.description}
                      </p>
                    </div>
                    <div className="container relative my-[50px] flex w-full flex-col items-center ">
                      <Image
                        src={ellipseBg}
                        width={546}
                        height={335}
                        alt="background decoration"
                        className="lef absolute -top-20 scale-150"
                      />
                      <h3 className="mb-2 text-center text-2xl uppercase">
                        Subscribe to our newsletter
                      </h3>
                      <p className="mb-10 text-center text-secondary">
                        Receive weekly updates on new posts and features
                      </p>
                      <FooterForm isMiddle={true} />
                    </div>
                  </Fragment>
                );
              }
              return (
                <div
                  key={paragraph.id}
                  className="container relative max-w-[340px] text-left md:max-w-[560px]"
                >
                  <h3
                    id={`${paragraph.titleId}`}
                    className="mb-6 text-left text-2xl uppercase"
                  >
                    {paragraph.title}
                  </h3>
                  <p className="text-sm  text-secondary">
                    {paragraph.description}
                  </p>
                </div>
              );
            })}

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
                  {data?.attributes.author_name}
                </span>
              </div>

              <p className="mb-[24px] text-center text-[14px] text-[#BBBBBB] md:w-[410px]">
                {data?.attributes.author_info}
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
