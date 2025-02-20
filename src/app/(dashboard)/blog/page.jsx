"use client";

import { Loading } from "@/components/loader/Loading";
import { useGetArticles } from "@/hooks/use-strapi";
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

  const {
    data: articles,
    isLoading,
    fetchNextPage,
    isFetchingNextPage
  } = useGetArticles({ tag });

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
      <div className="relative -mt-[440px] overflow-x-hidden overflow-y-hidden bg-black lg:-mt-[670px]">
        <BlogBreadCrumb />
        <HeroSection />
        <section className="container max-w-[1440px]">
          <div>
            {articles?.pages.map((post, index) => (
              <Fragment key={index}>
                <div className="grid w-full border-t-[0.5px] border-th-fade md:grid-cols-2">
                  {post.data.slice(0, 2).map((article) => (
                    <Post key={article.id} atributes={article.attributes} />
                  ))}
                </div>
                <div className="grid border-t-[0.5px] border-th-fade md:grid-cols-3">
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
        <Contact className={"py-[72px] md:py-[140px]"} />
      </div>
    </section>
  );
}
