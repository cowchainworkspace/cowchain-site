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

      <div className="w-full md:border-t md:border-t-th-fade">
        <div className="faq-home-gradient-mb h-[256px] px-[20px] py-[43px] sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBlock.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex h-full flex-col gap-[24px]"
            >
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="text-[20px] uppercase text-white sm:text-[60px]"
              >
                {activeBlock.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="body text-[16px] !text-secondary"
              >
                {activeBlock.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="px-default mx-auto  flex h-[411px] max-w-[1440px] border-t border-t-th-fade md:border-0">
          {blocksData.map((block, index) => (
            <>
              <motion.div
                key={block.id}
                layout
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={() => handleClick(block)}
                className={cn(
                  "op hidden h-full w-[82px] cursor-pointer flex-col overflow-hidden text-white transition-all duration-500 ease-in-out sm:flex",
                  index < blocksData.length - 1 && "border-r border-r-th-fade",
                  activeBlock.id !== block.id && "justify-center",
                  activeBlock.id === block.id && "faq-home-gradient w-[635px]"
                )}
                style={{
                  opacity: activeBlock.id === block.id ? 1 : 0.9
                }}
              >
                {activeBlock.id === block.id ? (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="1440custom:px-[56px] flex h-full w-full flex-col justify-center p-6"
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: -40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.6
                      }}
                      className="mb-4 w-full text-2xl font-bold"
                    >
                      {block.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.4
                      }}
                      className="max-w-md text-sm leading-6 text-secondary"
                    >
                      {block.description}
                    </motion.p>
                  </motion.div>
                ) : (
                  <div className="flex w-full items-center justify-center">
                    <p
                      className="whitespace-nowrap text-wrap text-base font-medium uppercase tracking-wide md:text-lg"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)"
                      }}
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
