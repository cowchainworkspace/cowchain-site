"use client";

import { HeroSection } from "./blocks/HeroSection";
import Contact from "../../../components/Contact";
import { ViewMoreSection } from "./blocks/ViewMore";
import { Post } from "./components/post";
import { useState } from "react";
import { useGetItems } from "@/hooks/use-strapi";
import { blogPosts } from "./blogData/data";

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3);

  const { data: articles } = useGetItems("articles");

  const showMorePosts = () => {
    if (visiblePosts < blogPosts.secondary.length) {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
    }
  };

  const tags = blogPosts.secondary.map((post) => {
return {tag: post.tag}
  })
  return (
    <section>
      <div className="relative overflow-x-hidden bg-black">
        <HeroSection tags={tags} />
        <section className="border-y border-th-fade">
          <div className="flex w-full flex-col xl:flex-row">
            {articles?.data.slice(0, 2).map((post, index) => (
              <Post key={post + index} atributes={post.attributes} />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 gap-y-5 xl:grid-cols-3">

            {articles && [...articles.data].splice(2, visiblePosts).map((post, index) => (
              <Post key={post + index} atributes={post.attributes} />
            ))}
          </div>

        </section>

        <ViewMoreSection
  current={visiblePosts}
  count={blogPosts.secondary.length}
  showMorePosts={showMorePosts}
/>
        <Contact className={'py-[140px]'} />
      </div>
    </section>
  );
}
