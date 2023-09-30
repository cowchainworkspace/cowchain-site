import React from "react";
import logo_light from "../assets/logo_light.svg";
import menu_open from "../assets/menu_open.svg";

const Navbar = () => {
  const page = "Home";

  return (
    <section className="bg-none relative">
      <div className="px-4 h-24 flex items-center">
        <a href="/" rel="nofollow">
          <img
            className="w-32"
            title="Home"
            alt="Home-1"
            src={logo_light}
          ></img>
        </a>
        <img
          className="w-6 ml-auto cursor-pointer"
          title="Home"
          alt="Home-2"
          src={menu_open}
        ></img>
      </div>
    </section>
  );
};

export default Navbar;
