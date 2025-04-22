import Image from "next/image";
import React from "react";

const GBCSolutionCard = () => {
  return (
    <article className="inner-border flex w-[247px] gap-[10px] rounded-lg bg-[#1B1C22] px-[9px] py-2 xl:w-[397px] xl:gap-4 xl:py-[13px] xl:pl-4 xl:pr-[14px]">
      <div>
        <Image
          width={153}
          height={145}
          src={"/cases/gbc/lollipop-car-img.png"}
          alt="lollipop"
          className="size-[91px] xl:h-[145px] xl:w-[153px]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 xl:gap-5">
        <h4 className="align-[text-top] font-anton text-[6.11px] leading-none text-white xl:text-[10.18px]">
          Sweet airdrop & boost
        </h4>
        <p className="align-[text-top] font-poppins text-[6px] leading-none xl:text-[10px]">
          <span className="font-bold">Sweet Airdrop:</span> Every Monday, you’ll
          receive a Sweet Airdrop based on how much buy and sell volume you’ve
          done on the Pass.
        </p>
        <p className="align-[text-top] font-poppins text-[6px] leading-none xl:text-[10px]">
          <span className="font-bold">Airdrop Boost:</span> When early access is
          open or on special days, the Airdrop Boost activates, giving you more
          Sweets for your volume!
        </p>
      </div>
    </article>
  );
};

export default GBCSolutionCard;
