import { anchorLinks } from "@/lib/constants/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import CollapsedHeaderIcon from "../../public/svgIcons/CollapsedHeaderIcon";

const NavbarAnchorLinks = ({ toggleServices, serviceMenuOpen }) => {
  return (
    <nav className="hidden w-full max-w-[360px] items-center gap-[80px]  pl-12 lg:flex xl:max-w-md">
      <button
        type="button"
        className="menu-toggle-button navlink z-50 mt-1 flex cursor-pointer items-center gap-[15px]"
        onClick={toggleServices}
      >
        Services & Technologies
        <div
          className={cn(
            "z-10 flex rotate-0 items-center justify-center transition-transform duration-300",
            serviceMenuOpen && "-rotate-180"
          )}
        >
          <CollapsedHeaderIcon />
        </div>
      </button>
      {anchorLinks.map((link, index) => (
        <Link key={index} href={link.link}>
          <p className="navlink mt-1">{link.title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavbarAnchorLinks;
