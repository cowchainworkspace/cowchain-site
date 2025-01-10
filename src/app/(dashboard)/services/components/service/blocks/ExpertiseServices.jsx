"use client";

export function ExpertiseServices({
  title,
  desc,
  data,
  noBg,
  bg,
  topBorder = true,
  bottomBorder = true,
  threeColumns
}) {
  return (
    <section
      className={`relative ${topBorder && "border-t border-t-th-fade"} ${bottomBorder && "border-b border-b-th-fade"}`}
    >
      {!noBg && (
        bg
      )}

      <div
        className={`py-heading px-default relative mx-auto max-w-[1440px] ${threeColumns ? "grid grid-cols-3 gap-[85px]" : " flex justify-between"} `}
      >
        <div className="col-span-1 lg:gap-16">
          <h2 className={`lg:order-0  uppercase text-white
            ${threeColumns ? "text-[50px]" : "text-[60px]"} `}>
            {title}
          </h2>
          <div className="mt-8 flex w-full max-w-xl flex-col justify-between customSmall:flex-row  lg:order-3 lg:ml-auto"></div>
          {desc && (
            <p className="body my-[40px] max-w-[582px] text-base leading-6 md:my-[20px]">
              {desc}
            </p>
          )}
        </div>

        <div
          className={`${threeColumns ? "col-span-2 gap-x-[85px] grid grid-cols-2" : "max-w-[519px]"}`}
        >
          {data.map(({ title, desc }, index) => (
            <div className="relative col-span-1 bg-cover">
              {title && (
                <div
                  className={
                    index === 0 || (threeColumns && index === 1)
                      ? "mr-auto  w-full text-left"
                      : "mr-auto mt-[60px] w-full text-left"
                  }
                >
                  <span className="text-left font-roc !text-[20px] font-medium uppercase !leading-none text-white">
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
