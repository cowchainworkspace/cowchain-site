import arrow from "@/assets/arrow_right.svg";
import { Loading } from "@/components/loader/Loading";
import { useGetMorePosts } from "@/hooks/use-strapi";
import Image from "next/image";
import ArticlesSlider from "./../../components/Slides/ArticlesSlider";

export const Blog = ({ slug }) => {
  const {
    data: articles,
    isLoading,
    fetchNextPage,
    isFetchingNextPage
  } = useGetMorePosts(slug);

  const scroll = (scrollOffset, element) => {
    element.scrollLeft += scrollOffset;
  };

  return (
    <section id="blog" className="relative md:h-[622px]">
      <div className="grid h-full w-full md:grid-cols-2 lg:grid-cols-[500px_1fr]">
        <div className="py-heading  px-default md-border-r flex flex-1 flex-col gap-y-6 border-b-th-fade border-t-th-fade md:border-b md:border-t ">
          <h3 className="text-center md:text-left lg:max-w-[320px]">
            Stay up to date
          </h3>
          <a href="/blog" className="mx-auto md:mx-0">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                ALL ARTICLES
              </p>
              <Image className="w-6" src={arrow} alt="" />
            </div>
          </a>
        </div>
        <ArticlesSlider
          articles={articles}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </section>
  );
};
