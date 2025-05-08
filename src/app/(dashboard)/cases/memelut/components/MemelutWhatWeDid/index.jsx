import Image from "next/image";
import React from "react";

const MemelutWhatWeDid = () => {
  return (
    <section className="py-[50px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 xl:px-[97px]">
        <h2 className="mb-6 font-roc text-[32px] font-medium leading-90 xl:mb-15 xl:text-[60px]">
          What we did
        </h2>
        <div className="relative grid gap-6 md:grid-cols-2 xl:gap-[37px]">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-normal uppercase leading-5 tracking-[2px]  text-white md:mb-4 xl:font-medium">
              Business Challenges
            </h3>
            <p className="font-semiBold text-xs font-[450] leading-5 text-white-70 md:text-sm md:leading-[22.1px]">
              The fragmented nature of the memecoin market required an
              all-in-one blockchain solution{" "}
              <br className="hidden custom1400:block" /> that prioritized
              usability and scalability. Users previously needed five different
              apps to track, <br className="hidden custom1400:block" />
              trade, and store memecoins, creating a complex and inefficient
              process. Additionally, <br className="hidden custom1400:block" />{" "}
              ensuring secure and transparent transactions while maintaining
              high-performance trading{" "}
              <br className="hidden custom1400:block" /> mechanics was a
              critical challenge.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-normal uppercase leading-5 tracking-[2px] text-white md:mb-4 xl:font-medium">
              Results
            </h3>
            <p className="font-semiBold text-xs font-[450] leading-5 text-white-70 md:text-sm md:leading-[22.1px]">
              Memelut now provides a streamlined trading experience, combining
              swipe-to-trade <br className="hidden custom1400:block" />{" "}
              mechanics, social trading feeds, and a secure wallet in a single
              platform. The app reduces{" "}
              <br className="hidden custom1400:block" /> complexity in memecoin
              investing, streamlining the user journey from discovery to{" "}
              <br className="hidden custom1400:block" /> transaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemelutWhatWeDid;
