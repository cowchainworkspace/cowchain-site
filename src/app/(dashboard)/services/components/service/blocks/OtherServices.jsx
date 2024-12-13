import React from "react";
import Tag from "@/components/ui/tag";

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

const Quote = ({ text, author, index }) => {
  return (
    <article
      className={
        index === feedbackData.length - 1
          ? "px-default relative flex w-full min-w-[320px] flex-col border-r border-r-th-fade pb-[40px] pt-[71px] md:border-r-0"
          : "px-default relative flex w-full min-w-[320px] flex-col border-r border-r-th-fade  pb-[40px] pt-[71px] md:border-b md:border-r-0 md:border-b-th-fade"
      }
    >
      <p className="header max-w-2xl !font-normal !leading-none !no-underline">
        {text}
      </p>
      <div className="mt-[24px]">
        <p className="caption">{author}</p>
      </div>
    </article>
  );
};

export const OtherServices = ({title, data = feedbackData}) => {
  return (
    <section id="">
      <div className="relative grid grid-cols-1 border-t border-t-th-fade md:grid-cols-6">
        <div className="md-border-r h-full pl-[80px] flex justify-start items-center relative box-border border-b border-b-th-fade md:col-span-3">
          <div className="">
            <Tag
              title={"Other Our Services"}
              className="mb-4 max-w-[194px] md:mb-8"
            />

            <h3 className="text-left text-[42px] uppercase text-white ">
             {title}
            </h3>
          </div>
        </div>
        <div className="quote_wrapper flex items-stretch overflow-x-scroll border-b border-b-th-fade md:col-span-3 md:flex-col md:overflow-x-hidden md:overflow-y-visible">
          {data &&
            data.map((feedback, index) => (
              <Quote key={index} {...feedback} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};
