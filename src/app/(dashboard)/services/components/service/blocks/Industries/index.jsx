import React from "react";
import Image from "next/image";
import fullStackImg from "@/assets/icons/expertice/fullStackImg.svg";
import startaps from "@/assets/icons/expertice/startaps.svg";
import venture from "@/assets/icons/expertice/venture.svg";
import marketing from "@/assets/icons/expertice/whiteLabel.svg";

const expertiseData = [
  {
    title: "Healthcare",
    text: "In the healthcare sector, our DEX solutions offer secure data exchange between healthcare providers, ensuring compliance with privacy regulations",
    icon: fullStackImg
  },
  {
    title: "Government",
    text: "Government agencies benefit from decentralized platforms for public services such as secure voting systems and identity verification",
    icon: startaps
  },
  {
    title: "Finance",
    text: "The finance industry benefits from decentralized exchanges by enabling direct asset transfers, minimizing the need for middlemen",
    icon: venture
  },
  {
    title: "Education",
    text: "Decentralized platforms in the education sector streamline the verification of academic records, allowing for immutable storage of credentials",
    icon: marketing
  }
];

export function Industries({ title, desc }) {
  return (
    <section
      id="expertise"
      className="relative flex justify-center border-b border-t border-b-th-fade border-t-th-fade px-[20px] py-[60px] md:pb-[132px] md:pl-[84px] md:pr-[64px] md:pt-[108px]"
    >
      <div className="grid  grid-cols-2  gap-y-[42px] md:gap-x-[100px]">
        <div className="col-span-2 row-span-1 flex flex-col items-start gap-[26px] md:justify-start">
          <h2 className="whitespace-pre-line text-center text-[36px] uppercase md:text-start md:text-[60px]">
            {title}
          </h2>

          <p className="leading-22px text-[16px] text-[#BBBBBB]">
            {desc}
          </p>
        </div>

        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            className="col-span-1 row-span-1 flex items-start gap-[49px]"
          >
            <div
              style={{ border: "0.1px solid rgba(255, 255, 255, 0.5)" }}
              className="mb-[24px] flex min-h-[42px] min-w-[42px] items-center justify-center rounded-full bg-transparent md:mb-[37px] md:min-h-[64px] md:min-w-[64px]"
            >
              <Image
                src={expertise.icon}
                width={"auto"}
                height={"auto"}
                className="h-[20px] w-[20px] md:h-[28px] md:w-[28px]"
                alt={expertise.title}
              />
            </div>
            <div className="mb-2 flex items-center">
              <div className="">
                <h3 className="mb-[22px] max-w-[310px] text-xl uppercase">
                  {expertise.title}
                </h3>
                <p
                  style={{
                    color: "#BBBBBB"
                  }}
                  className="leading-22px text-[16px]"
                >
                  {expertise.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
