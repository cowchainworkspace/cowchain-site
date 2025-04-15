import { Category } from "@/components/ui/category";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { NextButton, PrevButton, usePrevNextButtons } from "./SliderButtons";

const Categories = ({ categories }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    startIndex: 1,
    slidesToScroll: 1
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <div
      className={
        "z-20 mt-9  flex  max-w-full items-center lg:max-w-full lg:gap-4 xl:max-w-none"
      }
    >
      <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
      <div className={"embla__viewport"} ref={emblaRef}>
        <div className={cn("embla__container flex gap-2")}>
          {categories?.map(({ id, attributes }) => {
            return (
              <div key={id}>
                <Category key={id} title={attributes.tag_name} />
              </div>
            );
          })}
        </div>
      </div>
      <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
    </div>
  );
};

export default Categories;
