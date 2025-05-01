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
  bg = false,
  customClasses = "",
  itemClasses = "",
  isWhiteLabel = "",
  descClasses,
  itemTitleClasses,
  titleClasses,
  titleContainerClasses,
  itemContainerClasses,
  containerClasses,
  itemDescClasses,
  isHomePage = false
}) {
  return (
    <section
      id="expertise"
      className={`relative flex justify-center 
        ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {bg && bg}
      <div
        className={cn(
          `mx-auto flex w-full max-w-[1440px] flex-col p-5 pb-[30px] pt-[60px] sm:grid sm:py-[126px] md:px-[32px] lg:px-[88px] 
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
            `,
          containerClasses
        )}
      >
        {!fullGrid && (
          <div
            className={`flex flex-col items-start gap-[18px] md:justify-start md:gap-[26px] ${isTwoSides ? "col-span-1  row-span-2 max-w-[400px]" : "col-span-2 row-span-1 "} ${titleContainerClasses}`}
          >
            <h2
              className={cn(
                "z-[2] whitespace-pre-line text-left text-[36px] uppercase !leading-[90%] md:text-center md:text-start  custom1430:text-[60px]",
                {
                  "xl:text-[42px]": isTwoSides
                },
                titleClasses
              )}
            >
              {title}
            </h2>

            {desc && (
              <p
                className={cn(
                  "leading-22px z-[2] max-w-[650px] text-[16px] text-[#BBBBBB]",
                  descClasses
                )}
              >
                {desc}
              </p>
            )}
          </div>
        )}

        <div
          className={`flex flex-col gap-5 sm:grid ${
            isTwoSides
              ? "col-span-1 grid-cols-2 gap-x-[30px]  gap-y-[42px] sm:gap-y-[30px] custom1000:gap-x-[77px] custom1000:gap-y-[77px]"
              : data.length < 4
                ? "col-span-3 grid-cols-3 gap-x-[109px]  sm:gap-y-[42px] md:mt-[120px]"
                : fullGrid
                  ? `gap-x-[109px] gap-y-[42px]  ${isWhiteLabel && "md:col-span-4 md:grid-cols-2 lg:col-span-4 lg:grid-cols-4"} col-span-4 grid-cols-4`
                  : "col-span-2 grid-cols-2 gap-y-[42px] lg:mt-[120px] lg:gap-x-[109px]"
          }  ${customClasses}`}
        >
          {data.map((expertise, index) => (
            <div
              key={index}
              className={cn(
                `z-[10] col-span-1 row-span-1 flex ${itemClasses}  ${expertise.text ? "items-start" : "items-center"}
                  ${isTwoSides || fullGrid || data.length < 4 ? "max-w-full flex-col gap-0 sm:max-w-[307px]" : "gap-5 lg:gap-[49px]"} ${itemClasses}`,
                itemContainerClasses
              )}
            >
              {expertise.icon && (
                <div
                  style={{
                    border: "0.1px solid rgba(255, 255, 255, 0.5)",
                    flexShrink: 0
                  }}
                  className="mb-[24px] flex h-[42px] w-[42px] items-center justify-center rounded-full  bg-transparent md:mb-[37px] md:max-h-[64px] md:min-h-[64px] md:w-[62px] md:min-w-[64px] md:max-w-[64px] lg:h-[62px] lg:w-[62px]"
                >
                  <expertise.icon className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center md:h-[28px] md:w-[28px]" />
                </div>
              )}
              <div className="mb-2 flex md:items-center">
                <div className="">
                  <h3
                    className={cn(
                      "mb-[22px] max-w-[310px] whitespace-pre-line text-[18px] uppercase !leading-[90%] md:text-[20px]",
                      itemTitleClasses
                    )}
                  >
                    {expertise.title}
                  </h3>
                  {expertise.text && (
                    <p
                      style={{
                        color: "#BBBBBB"
                      }}
                      className={cn(
                        "leading-22px text-[16px]",
                        itemDescClasses
                      )}
                    >
                      {expertise.text}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
