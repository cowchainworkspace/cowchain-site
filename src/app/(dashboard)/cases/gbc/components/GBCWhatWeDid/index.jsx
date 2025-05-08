import Image from "next/image";
import React from "react";

const GBCWhatWeDid = () => {
  return (
    <section className="py-[50px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-[97px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium leading-90 xl:mb-15 xl:text-[55.24px]">
          What we did
        </h2>
        <div className="relative grid gap-6 md:grid-cols-2 xl:gap-[37px]">
          <Image
            src={"/cases/gbc/gbc-wwd-img.webp"}
            width={148}
            height={138}
            alt={"gbc with lollipop"}
            className="absolute -right-[16px] -top-[78%] hidden xl:block"
          />
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-normal uppercase leading-5 tracking-[2px]  text-white md:mb-4 xl:font-medium">
              Business Challenges
            </h3>
            <p className="font-semiBold text-xs font-[450] leading-5 text-white-70 md:text-sm md:leading-[22.1px]">
              Expanding NFT functionality beyond basic ownership required a
              comprehensive dApp
              <br className="hidden custom1400:block" /> technology approach.
              Integrating on-chain transactions while maintaining a
              user-friendly
              <br className="hidden custom1400:block" /> experience was a key
              challenge. Additionally, ensuring scalability and security in
              trading
              <br className="hidden custom1400:block" /> mechanics and reward
              distribution demanded protocol-level optimization.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-normal uppercase leading-5 tracking-[2px] text-white md:mb-4 xl:font-medium">
              results
            </h3>
            <p className="font-semiBold text-xs font-[450] leading-5 text-white-70 md:text-sm md:leading-[22.1px]">
              The GBC dApp now supports NFT customization, on-chain trading, and
              gamified
              <br className="hidden custom1400:block" /> engagement, creating a
              sustainable and interactive ecosystem. The Camp enhances user
              <br className="hidden custom1400:block" /> retention while trading
              competitions encourage active participation. Backed by Arbitrum,
              <br className="hidden custom1400:block" />
              the platform has positioned itself as a case study in blockchain
              deployment and user-driven
              <br className="hidden custom1400:block" /> NFT innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GBCWhatWeDid;
