"use client";
import { Loading } from "@/components/loader/Loading";
import { blogOptions } from "@/hooks/use-strapi";
import { cn } from "@/lib/utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useState } from "react";
import { HeroSection } from "../../blocks/HeroSection";
import { ViewMoreSection } from "../../blocks/ViewMore";
import BlogContact from "../BlogContact/BlogContact";
import { BlogBreadCrumb } from "../BreadCrumb/BlogBreadCrumb";
import OldBreadCrumbs from "../BreadCrumb/OldBreadCrumbs";
import { Post } from "../post";

const BlogInfo = () => {
  const [isClicking, setIsClicking] = useState(false);
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") || "";

  const handleClick = () => {
    setIsClicking(true);
  };

  const {
    data: articles,
    fetchNextPage,
    isFetchingNextPage,
    isLoading
  } = useInfiniteQuery(blogOptions(tag));

  if (isLoading) {
    return (
      <div className="flex h-[100dvh] items-center justify-center border-b-[0.5px] border-th-fade">
        <Loading />
      </div>
    );
  }

  const allArticles = articles?.pages.reduce(
    (acc, value) => acc.concat(value.data),
    []
  );

  const totalArticlesInDB = articles?.pages.at(-1).meta.pagination.total;

  return (
    <div
      className={cn(
        "relative overflow-visible bg-black transition-opacity  duration-300",
        {
          "opacity-75": isClicking
        }
      )}
    >
      <OldBreadCrumbs />
      <HeroSection />
      <section className="container max-w-[1440px] px-0">
        <div className="border-t-[0.5px] border-th-fade md:border-0">
          {articles?.pages.map((post, index) => (
            <Fragment key={index}>
              <div className="grid w-full border-th-fade md:border-t-[0.5px] lg:grid-cols-2">
                {post.data.slice(0, 2).map((article) => (
                  <Post
                    handleClick={handleClick}
                    key={article.id}
                    atributes={article.attributes}
                    isDisabled={isClicking}
                  />
                ))}
              </div>
              <div className=" grid border-th-fade md:border-t-[0.5px]  lg:grid-cols-3 ">
                {post.data.slice(2).map((article) => (
                  <Post
                    key={article.id}
                    atributes={article.attributes}
                    isThreeLines={true}
                    handleClick={handleClick}
                    isDisabled={isClicking}
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
      <BlogContact className="px-6 pb-[60px] pt-[72px] md:py-[140px]" />
    </div>
  );
};

export default BlogInfo;
