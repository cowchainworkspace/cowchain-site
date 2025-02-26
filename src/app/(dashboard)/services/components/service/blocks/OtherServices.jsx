import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";
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

const Quote = ({ text, author, lastIndex, noItemsBorders }) => {
  return (
    <article
      className={
        lastIndex
          ? `px-[20px] py-[20px] md:px-[50px] custom1200:px-[88px] custom1200:py-[44px] 
          ${
            !noItemsBorders
              ? "border-t border-t-th-fade  md:border-r-0 md:border-t-0"
              : "gap-[24px] "
          } relative flex w-full min-w-[320px] flex-col`
          : `px-[20px] py-[20px] md:px-[50px] custom1200:px-[88px] custom1200:py-[44px] 
          ${
            !noItemsBorders
              ? "border-b-0 border-t border-t-th-fade sm:border-r sm:border-r-th-fade "
              : "gap-[24px] "
          } 
          relative flex w-full min-w-[320px] flex-col md:gap-0 md:border-b md:border-b md:border-r-0 md:border-t-0 md:border-b-th-fade md:border-b-th-fade`
      }
    >
      <p className="max-w-2xl font-roc text-[18px] font-medium uppercase !leading-none !no-underline md:font-normal custom1000:text-[20px]">
        {text}
      </p>
      <div className="md:mt-[24px]">
        <p className="text-[16px] text-th-grey">{author}</p>
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
  noItemsBorders = false
}) => {
  return (
    <section
      className={`${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-6">
        <div
          className={`md-border-r relative ${noItemsBorders ? "mb-[60px]" : "mb-[24px]"} mt-[60px] box-border flex flex-col items-start justify-start px-[20px] sm:mt-0 sm:pt-[60px] md:col-span-3 md:mb-0 md:h-full custom1000:px-0 custom1000:pl-[80px] custom1000:pt-[126px]`}
        >
          {tag && <Tag title={tag} className="mb-[42px] md:mb-8" />}

          <h3 className="text-left text-[24px] uppercase text-white custom1000:text-[36px] custom1200:text-[42px] ">
            {title}
          </h3>
          {desc && (
            <p className="body my-[40px] max-w-[592px] text-base leading-6 md:my-[20px]">
              {desc}
            </p>
          )}
        </div>
        <div
          className={`${noItemsBorders && "gap-[42px] pb-[42px] md:gap-0"} quote_wrapper flex flex-col items-stretch overflow-x-scroll sm:flex-row sm:flex-col md:col-span-3 md:overflow-x-hidden md:overflow-y-visible`}
        >
          {data?.map((feedback, index) => (
            <Quote
              key={index}
              {...feedback}
              lastIndex={index === data.length - 1}
              noItemsBorders={noItemsBorders}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
