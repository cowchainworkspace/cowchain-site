import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { gbcRewards } from "../../utils/constants";
const [pass, ...rewards] = gbcRewards;

const GBCRewards = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-10">
        <div className="w-full rounded-[12.87px] bg-[#FFFFFF0A] pb-[90px] pl-[19px] pr-[23px] pt-[25px]">
          <h2 className="mb-[19px] align-[text-top] font-roc text-base font-bold normal-case leading-none">
            Rewards
          </h2>
          <p className="mb-[27px] align-[text-top] font-roc font-[11.26px] leading-none">
            Unlock new assets and rewards the longer you stay in the Pass.
          </p>
          <div className="flex w-full justify-between">
            <article className="flex w-[177px] flex-col gap-[15px]">
              <Image
                src={pass.img}
                width={pass.width}
                height={pass.height}
                alt={pass.imgDesc}
              />
              <h4 className="align-[text-top] font-roc text-base font-bold leading-none text-white">
                {pass.title}
              </h4>
              <p className="align-[text-top] font-roc text-[13px] leading-none">
                {pass.desc}
              </p>
            </article>
            {rewards.map(({ id, imgDesc, width, height, title, img }) => (
              <article
                className={cn(
                  "flex w-[166px] flex-col gap-[21px] rounded-[12.87px] border-[1.61px] border-[#4C83FF] p-3",
                  id > 2 && "border-[#FFFFFF14]"
                )}
                key={id}
              >
                <Image src={img} width={width} height={height} alt={imgDesc} />
                <h4 className="align-[text-top] text-[12.87px] font-bold leading-none text-white">
                  {title}
                </h4>
                <button
                  type="button"
                  className={cn(
                    "font-poppins  pointer-events-none flex h-8 w-full items-center justify-center rounded-[6.43px] bg-[#4C83FF] align-[text-top] text-[12.87px] font-bold leading-none text-white",
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
