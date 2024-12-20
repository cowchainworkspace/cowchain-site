import React from "react";
import education from "@/assets/industries/educationIcon.svg";
import finance from "@/assets/industries/financeIcon.svg";
import government from "@/assets/industries/govermentIcon.svg";
import healthcare from "@/assets/industries/HelthcareIcon.svg";

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
  fullGrid = false
}) {
  return (
    <section
      id="expertise"
      className={`relative flex justify-center px-[20px] py-[60px] md:pb-[132px] md:pl-[84px] md:pr-[64px] md:pt-[108px] 
        ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      <div
        className={`grid  ${isTwoSides ? "grid-cols-2 gap-x-[134px] gap-y-[77px]" : data.length < 4 ? "grid-cols-3 gap-y-[42px] md:gap-x-[100px]" : fullGrid ? "grid-cols-4 gap-y-[42px] md:gap-x-[100px]" : "grid-cols-2 gap-y-[42px] md:gap-x-[100px]"}`}
        style={{
          gridTemplateColumns: `${data.length < 4 && !isTwoSides ? "405px 1fr 1fr" : fullGrid ? "" : "405px 1fr"} `
        }}
      >
        {!fullGrid && (
          <div
            className={`flex flex-col items-start gap-[26px] md:justify-start ${isTwoSides ? "col-span-1  row-span-2 max-w-[400px]" : "col-span-2 row-span-1 "}`}
          >
            <h2 className="whitespace-pre-line text-center text-[36px] uppercase md:text-start md:text-[60px]">
              {title}
            </h2>

            <p className="leading-22px max-w-[650px] text-[16px] text-[#BBBBBB]">
              {desc}
            </p>
          </div>
        )}

        <div
          className={`grid  ${isTwoSides ? "col-span-1 grid-cols-2 gap-x-[77px] gap-y-[77px]" 
            : data.length < 4 ? "col-span-3 mt-[120px] grid-cols-3 gap-x-[109px] gap-y-[42px]" 
            : fullGrid ? "col-span-4 grid-cols-4 gap-x-[109px] gap-y-[42px]" 
            : "col-span-2 mt-[120px] grid-cols-2 gap-x-[109px] gap-y-[42px]"}`}
        >
          {data.map((expertise, index) => (
            <div
              key={index}
              className={`col-span-1 row-span-1 flex  ${expertise.text ? "items-start" : "items-center"}
                  ${(isTwoSides || fullGrid) ? "max-w-[307px] flex-col gap-0" : "gap-[49px]"}`}
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
