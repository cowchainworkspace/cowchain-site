"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import { gbcClubSlides } from "../../utils/constants";

const GBCSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    slidesToScroll: 1,
    loop: true,
    startIndex: 1
  });
  return (
    <section className={"relative mx-auto h-[254px] w-full max-w-[1440px]"}>
      <div className={"embla relative h-full  w-screen"}>
        <div className={"embla__viewport"} ref={emblaRef}>
          <div className={"embla__container flex "}>
            {gbcClubSlides.map(
              ({ id, height, width, img, imgDesc, name, tag }) => {
                return (
                  <article
                    key={id}
                    className={
                      "club-inner-border ml-[25px] w-[190px] flex-shrink-0 rounded-[14.73px] bg-[#FFFFFF0A] p-[15px]"
                    }
                  >
                    <Image
                      src={img}
                      width={width}
                      height={height}
                      alt={imgDesc}
                      className="mb-[15px]"
                    />
                    <h3 className="font-poppins mb-2 align-[text-top] text-[12.89px] leading-none text-[#FFFFFF80]">
                      {tag}
                    </h3>
                    <h4 className="font-poppins align-[text-top] text-[14.73px] font-bold leading-none text-white">
                      {name}
                    </h4>
                  </article>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GBCSlider;
