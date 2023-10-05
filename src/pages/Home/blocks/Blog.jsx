import React, { useRef } from "react";
import arrow from "../../../assets/arrow_right.svg";
import TextTruncate from "react-text-truncate";
import { blogData } from "../../../data/blogData";
import arrow_btn from "../../../assets/homepage/arrow-btn.png";

const Post = ({ id, title, description, photo }) => {
  const toText = (node) => {
    const tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  return (
    <article className="relative min-w-[320px] lg:min-w-[420px] w-[320px] lg:w-[420px] border-r border-r-th-fade">
      <div
        className="w-full h-72 lg:h-96 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className="flex flex-col p-6 lg:p-8 min-h-[280px] lg:min-h-[320px]">
        <h2 className="mb-auto lg:!text-lg lg:!leading-none">{title}</h2>
        <TextTruncate
          className="p !text-[#bbb]"
          line={5}
          text={toText(description)}
        />
        <div className="mt-auto">
          <a href="#">
            <p className="text-base font-medium font-roc text-white uppercase underline">
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
        className="hidden md:block absolute top-1/3 right-24 h-[50px] w-[50px] z-30"
        onClick={() => {
          scroll(480, wrapper.current);
        }}
      >
        <img className="w-full h-full" src={arrow_btn} alt=""></img>
      </button>
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="border-b border-b-th-fade py-heading px-default flex flex-col gap-y-6 md:col-span-2 md-border-r">
          <h3 className="text-center md:text-left lg:max-w-[320px]">
            STAY UP TO DATE
          </h3>
          <a href="#" className="mx-auto md:mx-0">
            <div className="flex items-center gap-x-2">
              <p className="header text-white uppercase underline">
                ALL ARTICLES
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
        <div
          ref={wrapper}
          className="border-b border-b-th-fade flex items-stretch overflow-x-scroll blog_wrapper md:col-span-3"
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
