import Link from "next/link";
import React from "react";
import ArrowLeftSvg from "../../../../../../public/svgIcons/ArrowLeftSvg";
import { cn } from "@/lib/utils";

const CasesBackButton = ({ classes }) => {
  return (
    <Link className={cn("flex items-center", classes)} href={"/cases"}>
      <ArrowLeftSvg />{" "}
      <span className="font-manrope text-sm font-medium leading-5 text-secondary">
        back to all projects
      </span>
    </Link>
  );
};

export default CasesBackButton;
