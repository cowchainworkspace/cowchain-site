import { Category } from "@/components/ui/category";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const Categories = ({ categories }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    dragFree: true
  });
  return (
    <div
      className={
        "z-20 mt-9  max-w-[110%]  lg:max-w-full lg:justify-between xl:max-w-none"
      }
    >
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
    </div>
  );
};

export default Categories;
