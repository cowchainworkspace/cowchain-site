"use client";

import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

const TWEEN_FACTOR_BASE = 0.01;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const CasesSlider = ({
  images,
  decorationElement,
  isPixelVerse,
  sectionClasses
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "center", loop: true, slidesToScroll: 1, startIndex: 1 },
    [
      Autoplay({
        playOnInit: true,
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  );

  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current =
      (isPixelVerse ? 0.05 : TWEEN_FACTOR_BASE) *
      emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;

        const opacityFactor = 1.2;
        const opacityValue = numberWithinRange(
          1 - Math.abs(diffToTarget * opacityFactor),
          0.3,
          1
        ).toString();

        emblaApi.slideNodes()[slideIndex].style.opacity = opacityValue;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <section
      className={cn(
        "relative mx-auto h-[522px] w-full max-w-[1440px]",
        sectionClasses
      )}
    >
      {decorationElement}
      <div className={"embla relative h-full  w-screen"}>
        <div className={"embla__viewport"} ref={emblaRef}>
          <div
            className={cn(
              "embla__container flex",
              isPixelVerse && "gap-[15px]"
            )}
          >
            {images?.map(({ id, height, width, desc, href }, index) => {
              const lastIndex = index === images.length - 1;
              return (
                <div
                  key={id}
                  className={cn(
                    "relative flex-shrink-0 pl-[30px]",
                    isPixelVerse && lastIndex && "last:!mr-[15px]"
                  )}
                  style={{ width: `${width}px`, height: `${height}px` }}
                >
                  <Image
                    src={href}
                    width={width}
                    height={width}
                    alt={desc}
                    objectFit="contain"
                    className="embla__slide__number h-full w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSlider;
