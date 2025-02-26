import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

export const BlogBreadCrumb = ({ slug }) => {
  return (
    <>
      {slug ? (
        <Breadcrumb
          className="absolute left-5 top-0 z-50 line-clamp-1 flex max-w-[300px] gap-1 overflow-hidden md:left-10 md:top-[23px]"
          separator={"/"}
          size={"sm"}
        >
          <BreadcrumbItem className=" text-xs leading-5 text-white">
            <BreadcrumbLink className={"breadcrumb-item"} href={"/blog"}>
              blog
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem className=" text-xs leading-5 text-white">
            <BreadcrumbLink
              className={"breadcrumb-item pointer-events-none !text-secondary"}
              href={"#"}
            >
              {slug}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <Breadcrumb
          className="absolute left-5 top-0 z-50 line-clamp-1 flex max-w-[300px] gap-1 overflow-hidden md:left-10 md:top-[23px]"
          separator={"/"}
          size={"sm"}
        >
          <BreadcrumbItem className="text-xs leading-5 text-white">
            <BreadcrumbLink href="/blog">blog</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem
            className="text-xs leading-5 text-white"
            isCurrentPage
          >
            <BreadcrumbLink href="#" isCurrentPage className="text-secondary">
              home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </>
  );
};
