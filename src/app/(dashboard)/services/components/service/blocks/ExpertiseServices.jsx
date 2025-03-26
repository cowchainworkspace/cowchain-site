"use client";

import Tag from "@/components/ui/tag";
import { cn } from "@/lib/utils";

export function ExpertiseServices({
  title,
  desc,
  data,
  noBg,
  bg,
  topBorder = true,
  bottomBorder = true,
  threeColumns,
  tag,
  isDevelop = false,
  titleClasses = ""
}) {
  return (
    <section
      className={`relative ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {!noBg && bg}

      <div
        className={`relative mx-auto flex max-w-[1440px] flex-col px-8 py-[60px] md:px-[88px] lg:py-[126px] xl:flex-row ${threeColumns ? "flex grid-cols-3 flex-col gap-5 md:gap-[85px] xl:grid" : " flex justify-between"} `}
      >
        <div className="col-span-1 lg:gap-10">
          {tag && <Tag title={tag} className="mb-4 w-fit md:mb-8" />}
          <h2
            className={cn(
              "lg:order-0 text-[42px] uppercase text-white md:text-[60px]",
              {
                "xl:!text-[50px]": threeColumns,
                "!text-[42px] leading-[37.59px]": isDevelop
              },
              titleClasses
            )}
          >
            {title}
          </h2>
          <div className="mt-[60px] flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto" />
          {desc && (
            <p className="body my-[40px] max-w-[582px] text-base leading-6 md:my-[20px]">
              {desc}
            </p>
          )}
        </div>

        <div
          className={`${threeColumns ? "col-span-2 grid grid-cols-2 gap-x-[20px] md:gap-x-[85px]" : "md:max-w-[350px] custom1000:max-w-[400px] custom1200:max-w-[519px]"}`}
        >
          {data.map(({ title, desc }, index) => (
            <div className="relative col-span-1 bg-cover">
              {title && (
                <div
                  className={
                    index === 0 || (threeColumns && index === 1)
                      ? "mr-auto  w-full text-left"
                      : "mr-auto mt-[42px] w-full text-left md:mt-[60px]"
                  }
                >
                  <span className="text-left font-roc text-lg font-medium uppercase !leading-none text-white md:!text-[24px]">
                    {title}
                  </span>
                </div>
              )}
              <div>
                <p
                  className={cn(
                    "mb-6 text-[16px] !leading-[22px] !text-[#BBBBBB]",
                    {
                      "mt-6": title
                    }
                  )}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
