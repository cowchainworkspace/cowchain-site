import React from "react";
import Image from "next/image";

export default function Planet() {
  return (
    <section id="view_more" className="relative z-10  mt-16  lg:my-[120px]">
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <Image
          alt=""
          width={530}
          height={377}
          className="absolute -top-60 right-0 -z-10 md:hidden"
          src={"/assets/services/radial-mobile.png"}
        />
        <div className="px-4">
          <div className="mb-16  flex flex-col items-center justify-center gap-y-8  text-center text-white">
            <h3 className="mx-auto cursor-default text-left font-roc text-2xl uppercase   leading-none md:text-[48px]">
              Our blockchain advisory background
            </h3>
            <span className="text-left text-[#bbb]">
              The experts at our smart contract development company are
              experienced in working with various blockchain networks, which
              allows us to offer optimal solutions depending on the project
              requirements:
            </span>
          </div>
          <div className=" flex max-w-[350px] justify-between">
            <div className="flex flex-col items-start gap-4">
              <p className="font-roc text-3xl uppercase text-white">35+</p>
              <p className="text-md uppercase text-white">Technologies</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="font-roc text-3xl   uppercase text-white">105+</p>
              <p className="text-md uppercase text-white">projects</p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="font-roc text-3xl  uppercase text-white">50+</p>
              <p className="text-md uppercase text-white">clients</p>
            </div>
          </div>
        </div>

        <Image
          alt="globus"
          width={530}
          height={377}
          className=" w-full"
          src={"/assets/services/globus.png"}
        />
      </div>
    </section>
  );
}
