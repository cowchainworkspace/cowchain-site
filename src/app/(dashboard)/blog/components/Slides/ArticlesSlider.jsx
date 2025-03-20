import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { Post } from "../../articles/components/Post";

const ArticlesSlider = ({ articles, fetchNextPage, isFetchingNextPage }) => {
  const [emblaRef] = useEmblaCarousel();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);
  return (
    <div
      className={
        "embla border-y-th h-full  w-screen border-y  border-y-th-fade md:w-[calc(100vw-300px)] md:border-y-0 lg:w-[calc(100vw-506px)]"
      }
    >
      <div className={"embla__viewport"} ref={emblaRef}>
        <div
          className={cn(
            "embla__container grid grid-flow-col-dense opacity-100",
            {
              "opacity-75": isFetchingNextPage
            }
          )}
        >
          {articles?.pages.map((post, index) => {
            const lastItemInArray = articles.pages.at(-1) === index;
            return (
              <Fragment key={index}>
                {post.data.map((article) => {
                  const lastItem = post.data.at(-1) === index;
                  return (
                    <div key={article.id}>
                      <Post key={article.id} attributes={article.attributes} />
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
          <div ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesSlider;
