import healthcare from "@/assets/industries/HelthcareIcon.svg";
import education from "@/assets/industries/educationIcon.svg";
import finance from "@/assets/industries/financeIcon.svg";
import government from "@/assets/industries/govermentIcon.svg";
import { cn } from "@/lib/utils";
import React from "react";

const expertiseData = [
  {
    title: "Healthcare",
    text: "In the healthcare sector, our DEX solutions offer secure data exchange between healthcare providers, ensuring compliance with privacy regulations",
    icon: healthcare
  },
  {
    title: "Government",
    text: "Government agencies benefit from decentralized platforms for public services such as secure voting systems and identity verification",
    icon: government
  },
  {
    title: "Finance",
    text: "The finance industry benefits from decentralized exchanges by enabling direct asset transfers, minimizing the need for middlemen",
    icon: finance
  },
  {
    title: "Education",
    text: "Decentralized platforms in the education sector streamline the verification of academic records, allowing for immutable storage of credentials",
    icon: education
  }
];

export function Industries({
  title,
  desc,
  data = expertiseData,
  isTwoSides,
  topBorder = true,
  bottomBorder = true,
  fullGrid = false,
  bg = false
}) {
  return (
    <section
      id="expertise"
      className={`relative flex justify-center 
        ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {bg && bg}
      <div
        className={`mx-auto flex w-full max-w-[1440px] flex-col px-[20px] py-[60px] sm:grid sm:py-[126px] md:px-[88px] 
          ${
            isTwoSides
              ? "grid-cols-2 gap-x-[50px] gap-y-[42px] sm:gap-y-[77px] custom1000:gap-x-[100px] custom1200:gap-x-[134px]"
              : data.length < 4
                ? "grid-cols-3 gap-y-[42px] md:gap-x-[100px]"
                : fullGrid
                  ? "grid-cols-4 gap-y-[42px] md:gap-x-[100px]"
                  : "grid-cols-2 gap-y-[42px] md:gap-x-[100px]"
          } 
             ${data.length < 4 && !isTwoSides ? "grid-cols-[405px_1fr_1fr]" : ""}
  ${fullGrid ? "" : "grid-cols-[250px_1fr] custom1000:grid-cols-[323px_1fr]"}
            `}
      >
        {!fullGrid && (
          <div
            className={`flex flex-col items-start gap-[18px] md:justify-start md:gap-[26px] ${isTwoSides ? "col-span-1  row-span-2 max-w-[400px]" : "col-span-2 row-span-1 "}`}
          >
            <h2
              className={cn(
                "whitespace-pre-line text-left text-[36px] uppercase md:text-center md:text-start md:text-[48px] custom1000:text-[60px]",
                {
                  "!text-[42px]": isTwoSides
                }
              )}
            >
              {title}
            </h2>

            {desc && (
              <p className="leading-22px max-w-[650px] text-[16px] text-[#BBBBBB]">
                {desc}
              </p>
            )}
          </div>
        )}

        <div
          className={`flex flex-col sm:grid  ${
            isTwoSides
              ? "col-span-1 grid-cols-2 gap-x-[30px] gap-y-[42px] sm:gap-y-[30px] custom1000:gap-x-[77px] custom1000:gap-y-[77px]"
              : data.length < 4
                ? "col-span-3 mt-[120px] grid-cols-3 gap-x-[109px] sm:gap-y-[42px]"
                : fullGrid
                  ? "col-span-4 grid-cols-4 gap-x-[109px] gap-y-[42px]"
                  : "col-span-2 grid-cols-2 gap-x-[109px] gap-y-[42px] md:mt-[120px]"
          }`}
        >
          {data.map((expertise, index) => (
            <div
              key={index}
              className={`col-span-1 row-span-1 flex  ${expertise.text ? "items-start" : "items-center"}
                  ${isTwoSides || fullGrid || data.length < 4 ? "max-w-full flex-col gap-0 sm:max-w-[307px]" : "gap-[49px]"}`}
            >
              {expertise.icon && (
                <div
                  style={{ border: "0.1px solid rgba(255, 255, 255, 0.5)" }}
                  className="mb-[24px] flex min-h-[42px] min-w-[42px] items-center justify-center rounded-full bg-transparent md:mb-[37px] md:max-h-[64px] md:min-h-[64px] md:min-w-[64px] md:max-w-[64px]"
                >
                  <expertise.icon className="flex h-[20px] w-[20px] items-center justify-center md:h-[28px] md:w-[28px]" />
                </div>
              )}
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
      </div>
    </section>
  );
}
