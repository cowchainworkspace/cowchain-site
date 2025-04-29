import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { gbcRewards } from "../../utils/constants";
const [pass, ...rewards] = gbcRewards;

const GBCRewards = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-2 md:px-10">
        <div className="w-full rounded-[12.87px] bg-[#FFFFFF0A] py-5 md:pl-[19px] md:pr-[23px] md:pt-[25px] xl:pb-[90px]">
          <div className="px-4 md:px-0">
            <h2 className="mb-[19px] align-[text-top] font-roc text-[16.08px] font-bold normal-case leading-none">
              Rewards
            </h2>
            <p className="mb-[27px] align-[text-top] font-roc font-[11.26px] leading-none">
              Unlock new assets and rewards the longer you stay in the Pass.
            </p>
          </div>
          <div className="grid w-full grid-cols-3 gap-x-1 gap-y-3 md:grid-cols-3 xl:flex xl:justify-between">
            <article className="flex w-30 flex-col gap-3 justify-self-center md:w-[177px] md:gap-[15px]">
              <Image
                src={pass.img}
                width={pass.width}
                height={pass.height}
                alt={pass.imgDesc}
                className="size-[110px] md:size-[177px]"
              />
              <h4 className="align-[text-top] font-roc text-[16.08px] font-bold leading-none text-white">
                {pass.title}
              </h4>
              <p className="align-[text-top] font-roc text-[12.87px] leading-none">
                {pass.desc}
              </p>
            </article>
            {rewards.map(({ id, imgDesc, width, height, title, img }) => (
              <article
                className={cn(
                  "flex w-[120px] flex-col items-center gap-3 justify-self-center rounded-[12.87px] border-[1.61px] border-[#4C83FF] p-1 md:w-[166px] md:items-start md:gap-[21px] md:p-3",
                  id > 2 && "border-[#FFFFFF14]"
                )}
                key={id}
              >
                <Image
                  src={img}
                  width={width}
                  height={height}
                  alt={imgDesc}
                  className="size-[100px] md:size-[140px]"
                />
                <h4 className="align-[text-top] text-[12.87px] font-bold leading-none text-white">
                  {title}
                </h4>
                <button
                  type="button"
                  className={cn(
                    "pointer-events-none  flex h-8 w-full items-center justify-center rounded-[6.43px] bg-[#4C83FF] align-[text-top] font-poppins text-[12.87px] font-bold leading-none text-white",
                    id > 2 && "bg-[#4C83FF29] text-[#FFFFFF52]"
                  )}
                >
                  Claim
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GBCRewards;
