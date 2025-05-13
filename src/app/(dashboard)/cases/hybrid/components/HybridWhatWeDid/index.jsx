import Image from "next/image";
import React from "react";
import {
  robotOne,
  robotTwo
} from "../../../../../../../public/cases/hybrid/weDid";

const HybridWhatWeDid = () => {
  return (
    <section className="pb-[50px] xl:pb-30">
      <div className="mx-auto max-w-[1440px] xl:pl-[96px] xl:pr-[100px]">
        <div className="grid grid-cols-2 justify-items-center gap-[27px] md:hidden ">
          <Image
            src={robotOne}
            width={166}
            height={166}
            alt="robot wit a smile on the yellow background"
          />
          <Image
            src={robotTwo}
            width={166}
            height={166}
            alt="robot wit a disappointed on the yellow background"
          />
        </div>
        <div className="px-4 pt-[50px] md:px-8 md:pt-0 lg:px-10">
          <h2 className="mb-6 font-roc text-[32px] font-medium leading-90 xl:mb-15 xl:text-[60px]">
            What we did
          </h2>
          <div className="grid gap-6 md:mb-6 md:grid-cols-2 xl:mb-[43px] xl:gap-10">
            <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
              <h3 className="mb-2 font-manrope text-xs font-medium uppercase leading-5 tracking-[2px] text-white xl:mb-4">
                business CHALLENGEs
              </h3>
              <p className="text-xs font-normal leading-5 text-white-70 xl:text-sm xl:leading-6">
                Integrating Ethereum’s Layer 2 scalability with the MoE
                framework required optimizing{" "}
                <br className="hidden custom1430:block" /> AI models for
                on-chain execution. Handling real-time AI-driven operations on a
                decen-
                <br className="hidden custom1430:block" />
                tralized network was another hurdle, as blockchain environments
                aren’t built for rapid
                <br className="hidden custom1430:block" />
                computation. Additionally, developing intuitive tools for
                blockchain, AI, and Web3
                <br className="hidden custom1430:block" /> interactions without
                compromising usability was a key challenge.
              </p>
            </div>

            <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
              <h3 className="mb-2 font-manrope text-xs font-medium uppercase leading-5 tracking-[2px] text-white xl:mb-4">
                results
              </h3>
              <p className="text-xs font-normal leading-5 text-white-70 xl:text-sm xl:leading-6">
                The platform now runs on a Layer 2 EVM chain, enabling AI agent
                monetization
                <br className="hidden custom1430:block" /> through the MoE
                framework. Atlas Web3 Copilot streamlines on-chain data
                tracking,
                <br className="hidden custom1430:block" /> while a suite of Web3
                tools, including an Explorer and Bridge, enhances ecosystem
                <br className="hidden custom1430:block" />
                functionality. Within five weeks, the platform scaled to 192
                countries,
                <br className="hidden custom1430:block" /> reflecting rapid
                global adoption.
              </p>
            </div>
          </div>
          <div className="grid hidden grid-cols-2 gap-8 md:grid xl:gap-[95px]">
            <Image
              src={robotOne}
              width={551}
              height={551}
              alt="robot with a smile on the yellow background"
            />
            <Image
              src={robotTwo}
              width={555}
              height={555}
              alt="robot with a disappointed on the yellow background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridWhatWeDid;
