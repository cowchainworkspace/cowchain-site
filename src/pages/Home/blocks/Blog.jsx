import React, { useRef, useState } from "react";
import arrow from "../../../assets/arrow_right.svg";
import TextTruncate from "react-text-truncate";
import { blogData } from "../../../data/blogData";
import arrow_btn from "../../../assets/homepage/arrow-btn.png";
import { cn } from "lib/utils";

const Post = ({ id, title, description, photo }) => {
  const toText = (node) => {
    const tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  return (
    <article className="relative w-[320px] min-w-[320px] border-r border-r-th-fade lg:w-[420px] lg:min-w-[420px]">
      <div
        className="h-72 w-full bg-cover bg-center bg-no-repeat lg:h-96"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className="flex min-h-[280px] flex-col p-6 lg:min-h-[320px] lg:p-8">
        <h2 className="mb-auto lg:!text-lg lg:!leading-none">{title}</h2>
        <TextTruncate
          className="p !text-[#bbb]"
          line={5}
          text={toText(description)}
        />
        <div className="mt-auto">
          <a href="#">
            <p className="font-roc text-base font-medium uppercase text-white underline">
              READ MORE
            </p>
          </a>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  const wrapper = useRef(null);

  const scroll = (scrollOffset, element) => {
    element.scrollLeft += scrollOffset;
  };

  return (
    <section id="blog" className="relative">
      <button
        id="blog-scroll"
        className={cn(
          "absolute right-24 top-1/3 z-30 hidden h-[50px] w-[50px] md:block"
        )}
        onClick={() => {
          scroll(550, wrapper.current);
        }}
      >
        <img className="h-full w-full" src={arrow_btn} alt=""></img>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="py-heading px-default md-border-r flex flex-col gap-y-6 border-b border-b-th-fade md:col-span-2">
          <h3 className="text-center md:text-left lg:max-w-[320px]">
            STAY UP TO DATE
          </h3>
          <a href="#" className="mx-auto md:mx-0">
            <div className="flex items-center gap-x-2">
              <p className="header uppercase text-white underline">
                ALL ARTICLES
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
        <div
          ref={wrapper}
          className="blog_wrapper flex items-stretch overflow-x-scroll border-b border-b-th-fade md:col-span-3"
        >
          {blogData &&
            blogData.map((postData, index) => (
              <Post key={index} {...postData} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
