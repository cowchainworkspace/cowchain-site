"use client";

import { Loading } from "@/components/loader/Loading";
import { useGetArticles } from "@/hooks/use-strapi";
import { useMediaQuery } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";
import Contact from "../../../components/Contact";
import { HeroSection } from "./blocks/HeroSection";
import { ViewMoreSection } from "./blocks/ViewMore";
import { BlogBreadCrumb } from "./components/BreadCrumb/BlogBreadCrumb";
import { Post } from "./components/post";

export default function Blog() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") || "";
  const isTablet = useMediaQuery("(max-width: 1023px)");
  const itemsPerPage = isTablet ? 6 : 5;
  const {
    data: articles,
    isLoading,
    fetchNextPage,
    isFetchingNextPage
  } = useGetArticles({ tag, itemsPerPage });

  if (isLoading) {
    return (
      <section className="relative h-dvh">
        <Loading />
      </section>
    );
  }

  const allArticles = articles?.pages.reduce(
    (acc, value) => acc.concat(value.data),
    []
  );

  const totalArticlesInDB = articles.pages.at(-1).meta.pagination.total;

  return (
    <section>
      <div className="relative overflow-visible  bg-black">
        <BlogBreadCrumb />
        <HeroSection />
        <section className="container max-w-[1440px]">
          <div className="border-t-[0.5px] border-th-fade md:border-0">
            {articles?.pages.map((post, index) => (
              <Fragment key={index}>
                <div className="grid w-full border-t-[0.5px] border-th-fade lg:grid-cols-2">
                  {post.data.slice(0, 2).map((article) => (
                    <Post key={article.id} atributes={article.attributes} />
                  ))}
                </div>
                <div className=" grid border-t-[0.5px] border-th-fade  lg:grid-cols-3 ">
                  {post.data.slice(2).map((article) => (
                    <Post
                      key={article.id}
                      atributes={article.attributes}
                      isThreeLines={true}
                      isMobile
                    />
                  ))}
                </div>
              </Fragment>
            ))}
          </div>
        </section>

        <ViewMoreSection
          current={allArticles?.length}
          count={totalArticlesInDB}
          showMorePosts={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
        <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
      </div>
    </section>
  );
}
