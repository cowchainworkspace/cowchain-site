import Image from "next/image";
import React from "react";

const GBCSolutionCard = () => {
  return (
    <article className="inner-border flex w-[397px] gap-4 rounded-lg bg-[#1B1C22] py-[13px] pl-4 pr-[14px]">
      <div>
        <Image
          width={153}
          height={145}
          src={"/cases/gbc/lollipop-car-img.png"}
          alt="lollipop"
        />
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <h4 className="font-anton align-[text-top]  text-[10.18px] leading-none text-white">
          Sweet airdrop & boost
        </h4>
        <p className="font-poppins align-[text-top] text-[10px] leading-none">
          <span className="font-bold">Sweet Airdrop:</span> Every Monday, you’ll
          receive a Sweet Airdrop based on how much buy and sell volume you’ve
          done on the Pass.
        </p>
        <p className="font-poppins align-[text-top] text-[10px] leading-none">
          <span className="font-bold">Airdrop Boost:</span> When early access is
          open or on special days, the Airdrop Boost activates, giving you more
          Sweets for your volume!
        </p>
      </div>
    </article>
  );
};

export default GBCSolutionCard;
