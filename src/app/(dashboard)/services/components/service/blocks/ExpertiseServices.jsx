"use client";

import Tag from "@/components/ui/tag";

export function ExpertiseServices({
  title,
  desc,
  data,
  noBg,
  bg,
  topBorder = true,
  bottomBorder = true,
  threeColumns,
  tag
}) {
  return (
    <section
      className={`relative ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {!noBg && bg}

      <div
        className={`relative mx-auto flex max-w-[1440px] flex-col px-[20px] py-[60px] md:flex-row ${threeColumns ? "flex grid-cols-3 flex-col gap-[85px] sm:grid" : " flex justify-between"} `}
      >
        <div className="col-span-1 lg:gap-16">
          {tag && <Tag title={tag} className="mb-[42px] w-fit md:mb-8" />}
          <h2
            className={`lg:order-0 uppercase text-white
            ${threeColumns ? "text-[24px] sm:text-[50px]" : "text-[24px] custom1000:text-[36px] custom1200:text-[40px] 1custom:text-[60px]"} `}
          >
            {title}
          </h2>
          <div className="mt-[60px] flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto"></div>
          {desc && (
            <p className="body my-[40px] max-w-[582px] text-base leading-6 md:my-[20px]">
              {desc}
            </p>
          )}
        </div>

        <div
          className={`${threeColumns ? "col-span-2 grid grid-cols-2 gap-x-[85px]" : "md:max-w-[350px] custom1000:max-w-[400px] custom1200:max-w-[519px]"}`}
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
                  <span className="text-left font-roc !text-[24px] font-medium uppercase !leading-none text-white">
                    {title}
                  </span>
                </div>
              )}
              <div>
                <p className="mt-[24px] text-[16px] !leading-[22px] !text-[#BBBBBB] ">
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
