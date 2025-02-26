"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { blocksData } from "../homeData/data";

export default function ExpandingBlocks({ isSecondary = false }) {
  const [activeBlock, setActiveBlock] = useState(blocksData[0]);

  const handleClick = (id) => {
    setActiveBlock(id);
  };

  return (
    <>
      <section
        className={`relative mx-auto max-w-[1440px] border-t border-t-th-fade`}
      >
        <div className="px-default relative flex flex-col justify-between gap-[107px] pb-[61px] pt-[90px]">
          <div className="  lg:gap-16">
            <h2 className="lg:order-0 text-[36px] uppercase text-white sm:text-[60px] ">
              Advantages of Web3 Development
            </h2>
            <div className="mt-8 flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto" />
            <p
              className={cn(
                "body my-[40px] max-w-[592px] text-base leading-6 md:my-[20px]",
                {
                  "!text-secondary": isSecondary
                }
              )}
            >
              Blockchain technology is reshaping industries, offering a range of
              benefits for businesses ready to embrace decentralized solutions.
              As a web3 development services company, Cowchain ensures that our
              solutions address the unique needs of businesses
            </p>
          </div>
        </div>
      </section>

      <div className="w-full border-t border-t-th-fade">
        <div className="flex flex-col gap-[24px] px-[20px] py-[43px] sm:hidden">
          <h2 className="lg:order-0 text-[20px] uppercase text-white sm:text-[60px]  ">
            {activeBlock.title}
          </h2>
          <p className="body text-[16px]">{activeBlock.description}</p>
        </div>
        <div className="px-default mx-auto  flex h-[411px] max-w-[1440px] border-t border-t-th-fade md:border-0">
          {blocksData.map((block, index) => (
            <>
              <div
                key={block.id}
                className={`hidden h-full transition-all duration-300 ease-in-out sm:block ${
                  activeBlock.id === block.id
                    ? "w-[635px] bg-[url('/assets/faq-gradient.png')] bg-no-repeat"
                    : "w-[82px]"
                } ${index < blocksData.length - 1 && " border-r border-r-th-fade"} flex cursor-pointer flex-col justify-center  text-white`}
                onClick={() => handleClick(block)}
              >
                {activeBlock.id === block.id ? (
                  <div className="p-6">
                    <h2 className="mb-4 text-2xl font-bold">{block.title}</h2>
                    <p className="text-sm leading-6">{block.description}</p>
                  </div>
                ) : (
                  <div className="flex h-full w-full rotate-180 transform items-center justify-center">
                    <p
                      className="whitespace-nowrap text-sm font-bold uppercase tracking-wide"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {block.title}
                    </p>
                  </div>
                )}
              </div>

              <div
                key={block.id}
                className={`block h-full w-full transition-all duration-300 ease-in-out sm:hidden
                   ${index < blocksData.length - 1 && " border-r border-r-th-fade"} flex cursor-pointer flex-col justify-center  text-white`}
                onClick={() => handleClick(block)}
              >
                <div className="flex h-full w-full rotate-180 transform items-center justify-center">
                  <p
                    className="whitespace-nowrap text-sm font-bold uppercase tracking-wide"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {block.title}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
