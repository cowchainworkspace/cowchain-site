"use client";
import Contact from "@/components/Contact";
import { blogOptions } from "@/hooks/use-strapi";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { Fragment } from "react";
import { HeroSection } from "../../blocks/HeroSection";
import { ViewMoreSection } from "../../blocks/ViewMore";
import { BlogBreadCrumb } from "../BreadCrumb/BlogBreadCrumb";
import { Post } from "../post";

const BlogInfo = () => {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") || "";

  const {
    data: articles,
    fetchNextPage,
    isFetchingNextPage
  } = useSuspenseInfiniteQuery(blogOptions(tag));

  const allArticles = articles?.pages.reduce(
    (acc, value) => acc.concat(value.data),
    []
  );

  const totalArticlesInDB = articles.pages.at(-1).meta.pagination.total;

  return (
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
