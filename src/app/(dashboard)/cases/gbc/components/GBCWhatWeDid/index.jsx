import Image from "next/image";
import React from "react";

const GBCWhatWeDid = () => {
  return (
    <section className="py-30">
      <div className="mx-auto max-w-[1440px] px-[90px]">
        <h2 className="mb-15 font-roc text-[60px] font-medium leading-90">
          What we did
        </h2>
        <div className="relative grid grid-cols-2 gap-[37px]">
          <Image
            src={"/cases/gbc/gbc-wwd-img.webp"}
            width={148}
            height={138}
            alt={"gbc with lollipop"}
            className="absolute -right-[18px] -top-[56%]"
          />
          <div className="border-t-[0.5px] border-white-50 pt-8">
            <h3 className="mb-4 font-manrope text-sm font-normal uppercase leading-[18.41px]  tracking-[1.84px] !text-secondary">
              Business Challenges
            </h3>
            <p className="font-semiBold text-xl leading-[30px] text-white">
              Expanding NFT functionality beyond basic ownership required a
              comprehensive dApp technology approach. Integrating on-chain
              transactions while maintaining a user-friendly experience was a
              key challenge. Additionally, ensuring scalability and security in
              trading mechanics and reward distribution demanded protocol-level
              optimization.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-8">
            <h3 className="mb-4 font-manrope text-sm font-normal uppercase leading-[18.41px] tracking-[1.84px] text-white">
              result
            </h3>
            <p className="font-semiBold text-xl leading-[30px] text-white">
              The GBC dApp now supports NFT customization, on-chain trading, and
              gamified engagement, creating a sustainable and interactive
              ecosystem. The Camp enhances user retention while trading
              competitions encourage active participation. Backed by Arbitrum,
              the platform has positioned itself as a case study in blockchain
              deployment and user-driven NFT innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GBCWhatWeDid;
