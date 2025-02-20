import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

export const BlogBreadCrumb = () => {
  const pathname = usePathname();
  const values = pathname.split("/").filter((item) => item.length);
  return (
    <>
      {values.length === 1 ? (
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
      ) : (
        <Breadcrumb
          className="absolute left-5 top-0 z-50 line-clamp-1 flex max-w-[300px] gap-1 overflow-hidden md:left-10 md:top-[23px]"
          separator={"/"}
          size={"sm"}
        >
          {values.map((path, index) => {
            const lastIndex = values.length - 1;

            return (
              <BreadcrumbItem
                className=" text-xs leading-5 text-white"
                key={path}
                isCurrentPage={index === lastIndex}
              >
                <BreadcrumbLink
                  className={cn("breadcrumb-item", {
                    "!text-secondary": index === lastIndex
                  })}
                  href={path === "blog" ? `/${path}` : "#"}
                >
                  {path}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      )}
    </>
  );
};
