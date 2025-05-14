import { ellipseBg } from "@/assets/article/index";
import rightArrow from "@/assets/article/rightArrow.svg";
import FooterForm from "@/components/utils/FooterForm";
import Image from "next/image";
import React from "react";

export const ArticleParagraphs = ({
  paragraphs,
  authorIcon,
  authorName,
  authorInfo
}) => {
  return (
    <div className="mb-20">
      {paragraphs.map((paragraph, index) => {
        if (paragraph.component.includes("image")) {
          return (
            <div className="container relative max-w-[340px] px-0 text-left md:max-w-[560px]">
              <Image
                src={paragraph.imageUrl}
                height={560}
                width={600}
                className="my-[50px] block max-h-[260px] w-full object-cover"
                alt=""
              />
            </div>
          );
        }
        if (index === 2) {
          return (
            <div id={`${paragraph.titleId}`}>
              <div className="container relative max-w-[340px] px-0 text-left md:max-w-[560px]">
                <h2 className="mb-6 text-left text-2xl uppercase">
                  {paragraph.title}
                </h2>
                {paragraph.description.map((section, index) => (
                  <div key={index}>
                    {section.subtitle && (
                      <h3 className="mb-3 text-left text-base uppercase">
                        {section.subtitle}
                      </h3>
                    )}
                    {section.content.map((para, idx) => (
                      <p key={idx} className="mb-4 text-sm text-secondary">
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="container relative my-[50px] flex w-full flex-col items-center px-0">
                <Image
                  src={ellipseBg}
                  width={540}
                  height={335}
                  alt="background decoration"
                  className="-z-1 pointer-events-none absolute -top-[110px] hidden scale-150 md:block"
                />
                <Image
                  src="/decoration-ellipse-blog-mobile.webp"
                  alt="background decoration"
                  width={600}
                  height={550}
                  className="pointer-events-none absolute -top-30 scale-[1.8] custom480:-top-[190px]  custom480:scale-150 md:hidden"
                />

                <h3 className="font z-10 mb-2 text-center text-lg font-medium uppercase ">
                  Subscribe to our newsletter
                </h3>
                <p className="z-10 mb-10 text-center text-sm text-secondary">
                  Receive weekly updates on new posts and features
                </p>
                <FooterForm classes="z-10" />
              </div>
            </div>
          );
        }
        return (
          <div
            id={`${paragraph.titleId}`}
            key={paragraph.id}
            className="container relative mb-[50px] max-w-[340px] px-0 text-left md:max-w-[560px]"
          >
            <h2 className="mb-6 text-left text-2xl uppercase">
              {paragraph.title}
            </h2>
            {paragraph.description.map((section, index) => (
              <div key={index}>
                {section.subtitle && (
                  <h3 className="mb-3 text-left text-base uppercase">
                    {section.subtitle}
                  </h3>
                )}
                {section.content.map((para, idx) => (
                  <p key={idx} className="mb-4 text-sm text-secondary">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        );
      })}

      <div className="container flex w-[340px] flex-col items-center px-0 pt-12 md:w-[560px]">
        <Image
          width={56}
          height={56}
          className="mb-[16px] h-[56px] w-[56px]  rounded-full"
          src={authorIcon}
          alt="Picture of the author"
        />

        <div className="mb-[24px] flex flex-col items-center gap-[2px]">
          <span className="text-[12px] leading-[22px] text-[#BBBBBB]">
            written by
          </span>
          <span className="text-center text-[16px] leading-[22px] text-[white]">
            {authorName}
          </span>
        </div>

        <p className="mb-[24px] text-center text-[14px] text-[#BBBBBB] md:w-[410px]">
          {authorInfo}
        </p>

        <a href="/blog" className="flex items-center gap-[16px]">
          <span className="text-[16px] uppercase text-[white] underline">
            all articles of this author
          </span>
          <Image
            src={rightArrow}
            className="h-[16px] w-[16px]"
            alt="Arrow icon"
          />
        </a>
      </div>
    </div>
  );
};
