"use client";
import { useState } from "react";
import { blocksData } from '../homeData/data'

export default function ExpandingBlocks() {
  const [activeBlock, setActiveBlock] = useState(blocksData[0].id);

  const handleClick = (id) => {
    setActiveBlock(id);
  };

  return (
    <>
      <section
        className={`relative mx-auto border-t border-t-th-fade max-w-[1440px]`}
      >
        <div className="px-default relative flex flex-col justify-between gap-[107px] pt-[90px] pb-[61px]">
          <div className="  lg:gap-16">
            <h2 className="lg:order-0 text-[36px] sm:text-[60px] uppercase text-white  ">
              Advantages of Web3 Development
            </h2>
            <div className="mt-8 flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto"></div>
            <p className="body my-[40px] max-w-[592px] text-base leading-6 md:my-[20px]">
              Blockchain technology is reshaping industries, offering a range of
              benefits for businesses ready to embrace decentralized solutions.
              As a web3 development services company, Cowchain ensures that our
              solutions address the unique needs of businesses
            </p>
          </div>
        </div>
      </section>

      <div className="w-full border-t border-t-th-fade">
        <div className="mx-auto px-default  flex h-[411px] max-w-[1440px]">
          {blocksData.map((block, index) => (
            <div
              key={block.id}
              className={`h-full transition-all duration-300 ease-in-out ${
                activeBlock === block.id
                  ? "w-[635px] bg-[url('/assets/faq-gradient.png')] bg-no-repeat"
                  : "w-[82px]"
              } ${index < blocksData.length - 1 && " border-r border-r-th-fade"} flex cursor-pointer flex-col justify-center  text-white`}
              onClick={() => handleClick(block.id)}
            >
              {activeBlock === block.id ? (
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
          ))}
        </div>
      </div>
    </>
  );
}
