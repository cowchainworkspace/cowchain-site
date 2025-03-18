import arrow from "@/assets/icons/arrow.svg";
import home from "@/assets/icons/home.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OldBreadCrumbs = ({ title }) => {
  return title ? (
    <div className="absolute left-4 top-0 z-20 flex gap-1  md:left-8 md:top-5 md:gap-4 lg:left-12 xl:top-10">
      <Link className="flex gap-2" href={"/"}>
        <Image className="h-[24px] w-[24px]" src={home} />
        <span className="text-white">Home</span>
      </Link>
      <Image className="h-[24px] w-[24px]" src={arrow} />
      <Link className="text-white" href={"/blog"}>
        Blog
      </Link>
      <Image className="h-[24px] w-[24px]" src={arrow} />
      <span className="breadcrumb-item text-white">{title}</span>
    </div>
  ) : (
    <div className="absolute left-4 top-0 z-20 flex gap-1 md:left-8 md:top-5 md:gap-4 lg:left-12  xl:top-10">
      <Link className="flex gap-2" href={"/"}>
        <Image className="h-[24px] w-[24px]" src={home} />
        <span className="text-white">Home</span>
      </Link>
      <Image className="h-[24px] w-[24px]" src={arrow} />
      <span className="text-white">Blog</span>
    </div>
  );
};

export default OldBreadCrumbs;
