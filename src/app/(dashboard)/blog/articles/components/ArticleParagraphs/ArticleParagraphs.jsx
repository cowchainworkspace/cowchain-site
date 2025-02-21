import { ellipseBg, ellipseBgMb } from "@/assets/article/index";
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
    <div className="mb-20 md:mb-[100px] md:overflow-hidden">
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
                <h3 className="mb-6 text-left text-2xl uppercase">
                  {paragraph.title}
                </h3>
                <p className="text-sm  text-secondary">
                  {paragraph.description}
                </p>
              </div>
              <div className="container relative my-[50px] flex w-full flex-col items-center px-0">
                <Image
                  src={ellipseBg}
                  width={546}
                  height={335}
                  alt="background decoration"
                  className="absolute -top-20 hidden scale-150 md:block"
                />
                <Image
                  src={ellipseBgMb}
                  width={546}
                  height={526}
                  alt="background decoration"
                  className="absolute -top-[300px] w-screen md:hidden"
                />
                <h3 className="mb-2 text-center text-2xl uppercase">
                  Subscribe to our newsletter
                </h3>
                <p className="mb-10 text-center text-secondary">
                  Receive weekly updates on new posts and features
                </p>
                <FooterForm isMiddle={true} />
              </div>
            </div>
          );
        }
        return (
          <div
            id={`${paragraph.titleId}`}
            key={paragraph.id}
            className="container relative max-w-[340px] px-0 text-left md:max-w-[560px]"
          >
            <h3 className="mb-6 text-left text-2xl uppercase">
              {paragraph.title}
            </h3>
            <p className="text-sm  text-secondary">{paragraph.description}</p>
          </div>
        );
      })}

      <div className="container flex w-[340px] flex-col items-center px-0 pt-12 md:w-[560px]">
        <Image
          width={16}
          height={16}
          className="mb-[16px] h-[56px] w-[56px]  rounded-full"
          src={authorIcon}
          alt=""
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

        <a href="/" className="flex items-center gap-[16px]">
          <span className="text-[16px] uppercase text-[white] underline">
            all articles of this author
          </span>
          <Image src={rightArrow} className="h-[16px] w-[16px]" alt="" />
        </a>
      </div>
    </div>
  );
};
