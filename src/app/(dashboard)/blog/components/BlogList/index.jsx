import { Loading } from "@/components/loader/Loading";
import { blogOptions } from "@/hooks/use-strapi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Fragment } from "react";
import { ViewMoreSection } from "../../blocks/ViewMore";
import { Post } from "../post";

const BlogList = ({ isClicking, handleClick }) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") || "";

  const {
    data: articles,
    fetchNextPage,
    isFetchingNextPage,
    isLoading
  } = useInfiniteQuery(blogOptions(tag));

  if (isLoading) {
    return (
      <div className="flex h-[60dvh] items-center justify-center border-b-[0.5px] border-th-fade">
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
    <div>
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
    </div>
  );
};

export default BlogList;
