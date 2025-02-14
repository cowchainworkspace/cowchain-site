"use client";

import { useGetItems } from "@/hooks/use-strapi";
import { useState } from "react";
import Contact from "../../../components/Contact";
import { HeroSection } from "./blocks/HeroSection";
import { ViewMoreSection } from "./blocks/ViewMore";
import { blogPosts } from "./blogData/data";
import { Post } from "./components/post";

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3);

  const { data: articles } = useGetItems("articles");

  const showMorePosts = () => {
    if (visiblePosts < blogPosts.secondary.length) {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
    }
  };

  const tags = blogPosts.secondary.map((post) => {
    return { tag: post.tag };
  });

  return (
    <section>
      <div className="relative overflow-x-hidden bg-black">
        <HeroSection tags={tags} />
        <section className="container border-y border-th-fade">
          <div className="flex w-full flex-col md:flex-row">
            {articles?.data.slice(0, 2).map((post, index) => (
              <Post key={post + index} atributes={post.attributes} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 gap-y-5 lg:grid-cols-3">
            {articles &&
              [...articles.data]
                .splice(2, visiblePosts)
                .map((post, index) => (
                  <Post key={post + index} atributes={post.attributes} />
                ))}
          </div>
        </section>

        <ViewMoreSection
          current={visiblePosts}
          count={blogPosts.secondary.length}
          showMorePosts={showMorePosts}
        />
        <Contact className={"py-[140px]"} />
      </div>
    </section>
  );
}
