import Link from "next/link";
import React from "react";
import RightArrowSvg from "../../../../../../public/svgIcons/RightArrowSvg";

const MoreProjects = ({ projects }) => {
  return (
    <section className="pt-[154px]">
      <div className="max-width-[1440px] mx-auto mb-[50px] flex items-start justify-between pl-[95px] pr-[99px]">
        <h2 className="text-[60px] font-semibold uppercase leading-[42px] text-white">
          More projects
        </h2>
        <Link className="flex gap-4" href={"/cases"} target="_blank">
          <span className="leading-90 text-2xl font-medium uppercase text-white underline">
            view all
          </span>{" "}
          <RightArrowSvg />
        </Link>
      </div>
      <div className="!border-white-50 grid grid-cols-3 border-y-[0.5px]">
        {projects.map(({ id, tags, title, desc, img }) => {
          console.log(img);
          return (
            <div
              key={id}
              className={
                "flex h-[624px] w-full flex-col items-center pb-[30px]"
              }
              style={{
                backgroundImage: `url(${img.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="mt-auto flex max-w-[403px] flex-col gap-6">
                <div className="flex gap-2">
                  {tags.map((tag) => (
                    <div
                      className="flex items-center justify-center rounded-20 border-[0.5px] border-white bg-white px-4 py-2"
                      key={tag}
                    >
                      <p className="font-manrope text-sm font-medium leading-[18px] text-black">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
                <h3 className="leading-90 font-roc text-2xl font-medium uppercase text-white">
                  {title}
                </h3>
                <p className="font-manrope text-base leading-[22px] text-white">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoreProjects;
