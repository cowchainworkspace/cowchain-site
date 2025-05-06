import React from "react";

const AgntWhatWeDid = () => {
  return (
    <section className="py-[50px] xl:py-30">
      <div className="lg:px10 mx-auto max-w-[1440px] px-4 md:px-8 xl:px-[148px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium leading-90 xl:mb-15 xl:text-[55.24px]">
          What we did
        </h2>
        <div className="relative grid gap-6 md:grid-cols-2 xl:gap-[37px]">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-[30px]">
            <h3 className="mb-2 font-manrope text-xs font-normal uppercase leading-5 tracking-[2px]  text-white xl:mb-4">
              Business Challenges
            </h3>
            <p className="font-manrope text-xs font-medium leading-5 text-white-70 xl:text-sm xl:leading-6">
              Integrating AI automation into Web3 required overcoming several
              key obstacles. The platform needed to support cross-chain
              transactions, enable real-time AI execution, and provide a
              user-friendly interface for deploying and managing AI agents.
              Ensuring scalability for AI-driven market interactions while
              maintaining secure, decentralized operations was a critical
              challenge.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-[30px]">
            <h3 className="mb-2 font-manrope text-xs font-normal uppercase leading-5 tracking-[2px] text-white xl:mb-4">
              result
            </h3>
            <p className="font-manrope text-xs font-medium leading-5 text-white-70 xl:text-sm xl:leading-6">
              AGNT.Hub now delivers a fully integrated AI & Web3 experience,
              enabling users to automate trading, analyze trends, and interact
              with AI-driven tools directly inside X. InfoFi capabilities within
              AGNT Connect enhance real-time market insights and on-chain data
              tracking. The AGNT Marketplace has become a key hub for DeFAI,
              allowing users to deploy, enhance, and monetize AI agents, making
              it a prime example of project management cases in AI & Web3
              innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgntWhatWeDid;
