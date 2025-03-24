import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { Post } from "../../articles/components/Post";

const ArticlesSlider = ({ articles }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, slidesToScroll: 1, dragFree: true },
    [
      Autoplay({
        playOnInit: true,
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  );

  return (
    <div
      className={
        "embla border-y-th relative h-full  w-screen border-y  border-y-th-fade md:w-[calc(100vw-300px)] md:border-y-0 lg:w-[calc(100vw-506px)]"
      }
    >
      <div className={"embla__viewport"} ref={emblaRef}>
        <div className={cn("embla__container flex opacity-100")}>
          {articles?.map((article) => {
            return (
              <div key={article.id}>
                <Post key={article.id} attributes={article.attributes} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSlider;
