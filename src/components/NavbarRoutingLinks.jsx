import { routerLinks } from "@/lib/constants/navbar";
import Link from "next/link";
import React from "react";
import { trackEvent } from "./utils/event-track";

const NavbarRoutingLinks = ({ setOpenForm }) => {
  return (
    <div className="hidden w-full max-w-[360px] items-center justify-end gap-16 lg:flex xl:max-w-md">
      {routerLinks.map((link, index) => (
        <Link key={index * 4} href={link.link}>
          <p className="navlink mt-1">{link.title}</p>
        </Link>
      ))}
      <button
        type="button"
        onClick={() => {
          trackEvent();
          setOpenForm(true);
        }}
        className="btn-submit h-16 w-[200px]"
      >
        GET IN TOUCH
      </button>
    </div>
  );
};

export default NavbarRoutingLinks;
