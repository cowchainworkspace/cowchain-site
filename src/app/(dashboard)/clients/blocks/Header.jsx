import React from "react";
import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import Image from "next/image";
import home from "@/assets/icons/home.png";
import arrow from "@/assets/icons/arrow.svg";
import Link from "next/link";

const Header = () => {
  return (
    <section id="clients-header" className="relative pt-20 lg:pt-[120px]">
      <Image
        alt="Header Background"
        className="absolute right-0 top-0 min-h-[150%] min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />

      <div className="px-default relative flex flex-col pb-16 md:pb-32 lg:pb-48">
        <div className="mb-6 flex gap-4">
          <Link className="flex gap-2" href={"/"}>
            <Image className="h-[24px] w-[24px]" src={home} />
            <span className="text-white">Home</span>
          </Link>
          <Image className="h-[24px] w-[24px]" src={arrow} />
          <span className="text-white">Clients</span>
        </div>

        <div className="mr-auto rounded-full border border-white px-8 py-[6px] lg:py-3">
          <p className="body1 text-white">clients</p>
        </div>
        <h1 className="mt-4 uppercase text-white lg:mt-6 xl:!text-[100px]">
          cowchain <br></br> works with
        </h1>
      </div>
    </section>
  );
};

export default Header;
