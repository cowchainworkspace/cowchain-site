import React from "react";

const TenetWhatWeDid = () => {
  return (
    <section className="py-[50px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-[97px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium leading-90 xl:mb-15 xl:text-[60px]">
          What we did
        </h2>
        <div className="relative grid gap-6 md:grid-cols-2 xl:gap-[37px]">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-medium uppercase leading-5 tracking-[2px]  text-white md:mb-4">
              Business Challenges
            </h3>
            <p className="font-semiBold text-xs font-[450] leading-5 text-white-70 md:text-sm md:leading-6">
              The fragmentation of liquid staking created barriers to
              cross-chain participation and
              <br className="hidden custom1400:block" /> governance. Tenet
              needed a scalable and efficient solution to unify staking across
              multiple
              <br className="hidden custom1400:block" /> networks, ensuring
              liquidity, security, and usability. Additionally, the bridge
              infrastructure
              <br className="hidden custom1400:block" /> required optimization
              to support seamless asset transfers between chains.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-medium uppercase leading-5 tracking-[2px] text-white md:mb-4">
              results
            </h3>
            <p className="font-semiBold text-xs font-[450] leading-5 text-white-70 md:text-sm md:leading-[22.1px]">
              Tenet now delivers a unified staking experience, enabling
              cross-chain governance, <br className="hidden custom1400:block" />{" "}
              diversified staking strategies, and AI-enhanced security.
              TenetScan V2 improves transaction{" "}
              <br className="hidden custom1400:block" />
              transparency, while the introduction of a native stablecoin
              strengthens DeFi integrations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenetWhatWeDid;
