"use client";
import { Loading } from "@/components/loader/Loading";
import { blogOptions, tagsOptions } from "@/hooks/use-strapi";
import { cn } from "@/lib/utils";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React, { Fragment, useState } from "react";
import { HeroSection } from "../../blocks/HeroSection";
import { ViewMoreSection } from "../../blocks/ViewMore";
import BlogContact from "../BlogContact/BlogContact";
import BlogList from "../BlogList";
import OldBreadCrumbs from "../BreadCrumb/OldBreadCrumbs";
import { Post } from "../post";

const BlogInfo = () => {
  const [isClicking, setIsClicking] = useState(false);
  const handleClick = () => {
    setIsClicking(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-visible bg-black transition-opacity  duration-300",
        isClicking && "opacity-75"
      )}
    >
      <OldBreadCrumbs />
      <HeroSection />
      <BlogList isClicking={isClicking} handleClick={handleClick} />
      <BlogContact className="px-6 pb-[60px] pt-[72px] md:py-[140px]" />
    </div>
  );
};

export default BlogInfo;
