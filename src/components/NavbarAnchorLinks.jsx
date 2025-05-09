import { anchorLinks } from "@/lib/constants/navbar";
import Link from "next/link";
import React from "react";

const NavbarAnchorLinks = ({ toggleServices }) => {
  return (
    <nav className="hidden w-full max-w-[360px] items-center gap-[80px]  pl-12 lg:flex xl:max-w-md">
      <button
        type="button"
        className="menu-toggle-button navlink mt-1 cursor-pointer"
        onClick={toggleServices}
      >
        Services & Technologies
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
