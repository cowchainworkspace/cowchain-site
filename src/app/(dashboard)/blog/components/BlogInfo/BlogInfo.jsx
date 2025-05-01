"use client";
import { cn } from "@/lib/utils";

import React, { useState } from "react";
import { HeroSection } from "../../blocks/HeroSection";
import BlogContact from "../BlogContact/BlogContact";
import BlogList from "../BlogList";
import OldBreadCrumbs from "../BreadCrumb/OldBreadCrumbs";

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
