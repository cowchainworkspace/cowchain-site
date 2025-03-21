"use client";
import Contact from "@/components/Contact";
import { Loading } from "@/components/loader/Loading";
import { blogOptions, tagsOptions } from "@/hooks/use-strapi";
import { cn } from "@/lib/utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useState } from "react";
import { HeroSection } from "../../blocks/HeroSection";
import { ViewMoreSection } from "../../blocks/ViewMore";
import { BlogBreadCrumb } from "../BreadCrumb/BlogBreadCrumb";
import { Post } from "../post";

const BlogInfo = () => {
  const [isClicking, setIsClicking] = useState(false);
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") || "";
  const { data: tags } = useQuery(tagsOptions);

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
      <div className="flex min-h-[100dvh]">
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
      <BlogBreadCrumb />
      <HeroSection categories={tags} />
      <section className="container max-w-[1440px]">
        <div className="border-t-[0.5px] border-th-fade md:border-0">
          {articles?.pages.map((post, index) => (
            <Fragment key={index}>
              <div className="grid w-full border-t-[0.5px] border-th-fade lg:grid-cols-2">
                {post.data.slice(0, 2).map((article) => (
                  <Post
                    handleClick={handleClick}
                    key={article.id}
                    atributes={article.attributes}
                    isDisabled={isClicking}
                  />
                ))}
              </div>
              <div className=" grid border-t-[0.5px] border-th-fade  lg:grid-cols-3 ">
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
      <Contact className="px-[64px] py-[159px] md:pb-[127px] md:pt-[169px]" />
    </div>
  );
};

export default BlogInfo;
