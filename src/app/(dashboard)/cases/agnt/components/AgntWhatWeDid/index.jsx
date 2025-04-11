import React from "react";

const AgntWhatWeDid = () => {
  return (
    <section className="py-30">
      <div className="mx-auto max-w-[1440px] px-[148px]">
        <h2 className="mb-15 font-roc text-[55.24px] font-medium leading-90">
          What we did
        </h2>
        <div className="relative grid grid-cols-2 gap-[37px]">
          <div className="border-t-[0.5px] border-white-50 pt-[30px]">
            <h3 className="mb-4 font-manrope text-[11.05px] font-normal uppercase leading-[18.41px]  tracking-[1.84px] !text-secondary">
              Business Challenges
            </h3>
            <p className="font-manrope text-sm font-medium leading-[22.1px] text-white-70">
              Integrating AI automation into Web3 required overcoming several
              key obstacles. The platform needed to support cross-chain
              transactions, enable real-time AI execution, and provide a
              user-friendly interface for deploying and managing AI agents.
              Ensuring scalability for AI-driven market interactions while
              maintaining secure, decentralized operations was a critical
              challenge.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-[30px]">
            <h3 className="mb-4 font-manrope text-[11.05px] font-normal uppercase leading-[18.41px] tracking-[1.84px] text-white">
              result
            </h3>
            <p className="font-manrope text-sm font-medium leading-[22.1px] text-white-70">
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
