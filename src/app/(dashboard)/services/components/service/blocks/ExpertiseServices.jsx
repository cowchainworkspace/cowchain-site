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
  itemsClasses = "",
  itemClasses = "",
  titleClasses = "",
  descClasses,
  cryptoWalletClass,
  itemTitleClasses,
  containerClasses = "",
  sectionContainerClasses = ""
}) {
  return (
    <section
      className={`relative ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {!noBg && bg}

      <div
        className={cn(
          `relative mx-auto flex max-w-[1440px] flex-col px-5 pb-[30px] pt-[60px] md:px-8 lg:px-[88px] lg:py-[126px] xl:flex-row ${threeColumns ? "flex grid-cols-3 flex-col gap-5 md:gap-[85px] xl:grid" : " flex justify-between"}`,
          sectionContainerClasses
        )}
      >
        <div
          className={cn("col-span-1  lg:gap-10", !desc && "mb-[50px] md:mb-0")}
        >
          {tag && <Tag title={tag} className="mb-4 w-fit md:mb-8" />}
          <h2
            className={cn(
              "lg:order-0 relative  z-[2] text-[36px] uppercase !leading-[90%] text-white xl:text-[42px]",
              {
                "xl:!text-[50px]": threeColumns,
                "text-[36px] xl:!text-[42px]": isDevelop
              },
              titleClasses
            )}
          >
            {title}
          </h2>
          {desc && (
            <p className="body relative z-[2] my-[40px] max-w-[582px] text-base leading-6 md:my-[20px]">
              {desc}
            </p>
          )}
        </div>

        <div
          className={cn(
            `${
              threeColumns
                ? "relative z-[20] col-span-2 grid grid-cols-2 gap-x-[20px] md:gap-x-[85px]"
                : "md:max-w-[350px] custom1000:max-w-[400px]  custom1200:max-w-[519px]"
            } ${itemsClasses}`,
            containerClasses
          )}
        >
          {data.map(({ title, desc }, index) => (
            <div className="relative col-span-1 whitespace-pre-line bg-cover">
              {title && (
                <div
                  className={
                    (index === 0 || (threeColumns && index === 1)
                      ? "mr-auto  w-full text-left"
                      : "mr-auto mt-[22px] w-full text-left md:mt-[60px]",
                    `${itemClasses}`)
                  }
                >
                  <span
                    className={cn(
                      "text-left font-roc text-lg font-medium uppercase !leading-none text-white md:text-[24px]",
                      itemTitleClasses
                    )}
                  >
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
                    },
                    descClasses,
                    index !== data.length - 1 && cryptoWalletClass
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
