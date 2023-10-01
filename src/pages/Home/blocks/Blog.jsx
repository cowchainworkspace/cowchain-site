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
    <article className="relative min-w-[320px] w-[320px] border-r border-r-th-fade">
      <div
        className="w-full h-72 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className="flex flex-col p-6 min-h-[280px]">
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
    <section id="blog">
      <div className="grid grid-cols-1">
        <div className="border-b border-b-th-fade py-16 text-center px-4 flex flex-col gap-y-6">
          <h3 className="text-center">STAY UP TO DATE</h3>
          <a href="#" className="mx-auto">
            <div className="flex items-center gap-x-2">
              <p className="header text-white uppercase underline">
                ALL ARTICLES
              </p>
              <img className="w-6" src={arrow} alt=""></img>
            </div>
          </a>
        </div>
        <div className="border-b border-b-th-fade flex items-stretch overflow-y-scroll blog_wrapper">
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
