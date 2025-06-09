import React from "react";

const ReflectWhatWeDid = () => {
  return (
    <section className="py-[50px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-[97px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium leading-90 xl:mb-15 xl:text-[60px]">
          What we did
        </h2>
        <div className="relative grid gap-6 md:grid-cols-2 xl:gap-[37px]">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-normal uppercase leading-5 tracking-[2px]  text-white md:mb-4 xl:font-medium">
              business CHALLENGEs
            </h3>
            <p className="font-semiBold text-xs font-[450] leading-5 text-white-70 md:text-sm md:leading-[22.1px]">
              DeFi interactions are often complex, requiring users to navigate
              multiple interfaces to
              <br className="hidden custom1430:block" /> execute trades, stake
              tokens, or claim rewards. Reflect aimed to simplify this process
              by
              <br className="hidden custom1430:block" /> enabling AI-driven
              automation across multiple chains while maintaining security and
              <br className="hidden custom1430:block" /> reliability. The
              challenge was ensuring smooth blockchain integration while
              optimizing <br className="hidden custom1430:block" /> execution
              speed.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-normal uppercase leading-5 tracking-[2px] text-white md:mb-4 xl:font-medium">
              Results
            </h3>
            <p className="font-semiBold text-xs font-[450] leading-5 text-white-70 md:text-sm md:leading-[22.1px]">
              Reflect successfully merged AI and DeFi automation, enabling
              effortless execution of trades,{" "}
              <br className="hidden custom1400:block" /> staking, and governance
              actions across Velodrome, Aerodrome, and other Drome chains.{" "}
              <br className="hidden custom1400:block" /> With AI-powered
              analytics and crypto success stories in automated trading, Reflect
              sets a <br className="hidden custom1400:block" /> new benchmark in
              digital asset solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectWhatWeDid;
