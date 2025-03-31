import Image from "next/image";
import React from "react";
import {
  robotOne,
  robotTwo
} from "../../../../../../../public/cases/hybrid/weDid";

const HybridWhatWeDid = () => {
  return (
    <section className="pb-30">
      <div className="mx-auto max-w-[1440px] px-[98px]">
        <h2 className="mb-15 font-roc text-[60px] font-medium leading-90">
          What we did
        </h2>
        <div className="mb-[43px] grid grid-cols-2 gap-10">
          <div className="border-t-[0.5px] border-white-50 pt-8">
            <h3 className="mb-4 font-manrope text-sm font-semibold uppercase leading-5 tracking-[2px] text-white-70">
              CHALLENGE
            </h3>
            <p className="text-sm font-medium leading-6 text-white-70">
              Integrating Ethereum’s Layer 2 scalability with the MoE framework
              required optimizing AI models for on-chain execution. Handling
              real-time AI-driven operations on a decen-tralized network was
              another hurdle, as blockchain environments aren’t built for rapid
              computation. Additionally, developing intuitive tools for
              blockchain, AI, and Web3 interactions without compromising
              usability was a key challenge.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-8">
            <h3 className="mb-4 font-manrope text-sm font-semibold uppercase leading-5 tracking-[2px] text-white-70">
              result
            </h3>
            <p className="text-sm font-medium leading-6 text-white-70">
              The platform now runs on a Layer 2 EVM chain, enabling AI agent
              monetization through the MoE framework. Atlas Web3 Copilot
              streamlines on-chain data tracking, while a suite of Web3 tools,
              including an Explorer and Bridge, enhances ecosystem
              functionality. Within five weeks, the platform scaled to 192
              countries, reflecting rapid global adoption.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[95px]">
          <Image
            src={robotOne}
            width={551}
            height={551}
            alt="robot wit a smile on the yellow background"
          />
          <Image
            src={robotTwo}
            width={555}
            height={555}
            alt="robot wit a disappointed on the yellow background"
          />
        </div>
      </div>
    </section>
  );
};

export default HybridWhatWeDid;
