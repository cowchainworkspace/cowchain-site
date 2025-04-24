import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

const feedbackData = [
  {
    text: "DApp Development",
    author: "Custom decentralized applications for various industries"
  },
  {
    text: "Smart Contract Development",
    author: "Secure smart contract design and development"
  },
  {
    text: "Audit and Optimization",
    author: "Auditing and enhancing existing blockchain systems"
  },
  {
    text: "Token Creation and NFT Development",
    author:
      "Comprehensive services for token creation and NFT development tailored to your project’s needs"
  }
];

const Quote = ({
  text,
  author,
  lastIndex,
  noItemsBorders,
  ishomePage,
  itemClasses
}) => {
  return (
    <article
      className={`px-[20px] py-[20px] md:px-[50px] custom1200:px-[88px] custom1200:py-[44px] ${itemClasses}
    ${
      !noItemsBorders
        ? "relative flex w-full min-w-[320px] flex-col"
        : "relative flex w-full min-w-[320px] flex-col"
    }`}
    >
      {!lastIndex && (
        <div className="absolute bottom-0 left-0 h-[1px] w-[calc(100vw)] border-t border-t-th-fade" />
      )}
      <p className="max-w-2xl whitespace-pre-line  font-roc text-[18px] font-medium uppercase leading-none !no-underline md:font-[500] md:leading-[90%] custom1000:text-[20px]">
        {text}
      </p>
      <div className={clsx(ishomePage ? "md:mt-[24px]" : "mt-2 md:mt-[20px]")}>
        <p className="text-[16px] font-thin text-[#BBBBBB]">{author}</p>
      </div>
    </article>
  );
};

export const OtherServices = ({
  title,
  data = feedbackData,
  tag,
  desc,
  topBorder = true,
  bottomBorder = true,
  noItemsBorders = false,
  ishomePage = false,
  typographyContainerClasses = "",
  itemClasses,
  bg,
  descClasses = ""
}) => {
  return (
    <section
      className={`relative ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {bg && bg}
      <div className="relative grid grid-cols-1 sm:mx-auto sm:max-w-[1440px] md:grid-cols-6">
        <div
          className={cn(
            "pr-[20px] sm:mt-0 sm:pt-[60px] md:col-span-3 md:mb-0 md:h-full custom1000:px-0 custom1000:pl-[88px] ",
            `md-border-r relative custom1000:pt-[126px] ${noItemsBorders ? "mb-[60px]" : "mb-[24px]"} z-[2]`,
            " mt-[60px] box-border flex flex-col items-start justify-start pl-[20px]",
            typographyContainerClasses
          )}
        >
          {tag && (
            <Tag title={tag} className="mb-[42px] md:mb-8 xl:mb-[60px]" />
          )}

          <h3 className="text-left text-[32px] uppercase leading-[90%] text-white xl:text-[36px] custom1430:text-[42px] ">
            {title}
          </h3>
          {desc && (
            <p
              className={cn(
                "body my-5 max-w-[592px] text-base leading-6 md:leading-[22px] md:my-[20px] md:my-[40px]",
                descClasses
              )}
            >
              {desc}
            </p>
          )}
        </div>
        <div
          className={`${noItemsBorders && "gap-[42px] pb-[42px] md:gap-0"} quote_wrapper 
          flex flex-col z-[2]
          items-stretch overflow-x-scroll sm:flex-row sm:flex-col md:col-span-3 
          md:overflow-x-visible md:overflow-y-visible`}
        >
          {data?.map((feedback, index) => (
            <Quote
              key={index}
              {...feedback}
              lastIndex={index === data.length - 1}
              noItemsBorders={noItemsBorders}
              ishomePage={ishomePage}
              itemClasses={itemClasses}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
