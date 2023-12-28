import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { teamData } from "data/teamData";
import Autoplay from "embla-carousel-autoplay";

const TeamEmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 5000 })
  ]);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className=" overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex  gap-2 overflow-hidden">
          {teamData.map((post, index) => (
            <div className="relative w-[320px] min-w-[320px]">
              <img
                alt="team_photo"
                className="max-h-[314px] min-h-[314px] min-w-[314px] "
                src={post.photo}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamEmblaCarousel;
