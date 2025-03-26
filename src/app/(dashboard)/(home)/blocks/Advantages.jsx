"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { blocksData } from "../homeData/data";
export default function ExpandingBlocks({ isSecondary = false }) {
  const [activeBlock, setActiveBlock] = useState(blocksData[1]);

  const handleClick = (id) => {
    setActiveBlock(id);
  };

  return (
    <>
      <section
        className={`relative mx-auto max-w-[1440px] border-t border-t-th-fade`}
      >
        <div className="px-default relative flex flex-col justify-between gap-[91px] pb-[61px] pt-[90px]">
          <div className="  lg:gap-16">
            <h2 className="lg:order-0 text-[36px] uppercase text-white sm:text-[60px] ">
              Advantages
              <br /> of Web3 Development
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
              <motion.div
                key={block.id}
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => handleClick(block)}
                className={cn(
                  "hidden h-full cursor-pointer flex-col overflow-hidden text-white sm:flex",
                  index < blocksData.length - 1 && "border-r border-r-th-fade",
                  activeBlock.id !== block.id && "justify-center"
                )}
                style={{
                  width: activeBlock.id === block.id ? 635 : 82,
                  backgroundImage:
                    activeBlock.id === block.id
                      ? "url('/assets/faq-gradient.png')"
                      : undefined,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              >
                {activeBlock.id === block.id ? (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-full p-6"
                  >
                    <h2 className="mb-4 text-2xl font-bold">{block.title}</h2>
                    <p className="break-words text-sm leading-6">
                      {block.description}
                    </p>
                  </motion.div>
                ) : (
                  <div className="flex  w-full rotate-180 transform items-center justify-center">
                    <p
                      className="whitespace-nowrap text-sm font-bold uppercase tracking-wide"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {block.title}
                    </p>
                  </div>
                )}
              </motion.div>

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
