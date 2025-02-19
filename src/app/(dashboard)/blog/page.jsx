"use client";

import { Loading } from "@/components/loader/Loading";
import { useGetArticles } from "@/hooks/use-strapi";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";
import Contact from "../../../components/Contact";
import { HeroSection } from "./blocks/HeroSection";
import { ViewMoreSection } from "./blocks/ViewMore";
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

  const tags = allArticles.map((article) => ({
    tag: article.attributes.tag
  }));

  const totalArticles = articles.pages.at(-1).meta.pagination.total;

  return (
    <section>
      <div className="relative overflow-x-hidden bg-black">
        <HeroSection tags={tags} />
        <section className="container border-y border-th-fade">
          <div className="grid w-full md:grid-cols-2">
            {articles?.pages.map((post, index) => (
              <Fragment key={index}>
                {post.data.map((article) => (
                  <Post key={article.id} atributes={article.attributes} />
                ))}
              </Fragment>
            ))}
          </div>
        </section>

        <ViewMoreSection
          current={allArticles?.length}
          count={totalArticles}
          showMorePosts={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
        <Contact className={"py-[140px]"} />
      </div>
    </section>
  );
}
