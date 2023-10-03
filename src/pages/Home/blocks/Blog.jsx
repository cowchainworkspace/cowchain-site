import React from "react";
import arrow from "../../../assets/arrow_right.svg";
import TextTruncate from "react-text-truncate";
import { blogData } from "../../../data/blogData";

const Post = ({ id, title, description, photo }) => {
  const toText = (node) => {
    const tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };
  return (
    <article className="relative min-w-[320px] lg:min-w-[480px] w-[320px] lg:w-[480px] border-r border-r-th-fade">
      <div
        className="w-full h-72 lg:h-96 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className="flex flex-col p-6 lg:p-12 min-h-[280px] lg:min-h-[420px]">
        <h2 className="mb-auto">{title}</h2>
        <TextTruncate className="body" line={5} text={toText(description)} />
        <div className="mt-auto">
          <a href="#">
            <p className="text-base font-roc text-white uppercase underline">
              READ MORE
            </p>
          </a>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="relative">
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="border-b border-b-th-fade py-heading px-default flex flex-col gap-y-6 md:col-span-2 md-border-r">
          <h3 className="text-center md:text-left">STAY UP TO DATE</h3>
          <a href="#" className="mx-auto md:mx-0">
            <div className="flex items-center gap-x-2">
              <p className="header text-white uppercase underline">
                ALL ARTICLES
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
        <div className="border-b border-b-th-fade flex items-stretch overflow-y-scroll blog_wrapper md:col-span-3">
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
