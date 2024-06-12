"use client";

import React, { useState } from "react";
import ContactForm from "@/components/utils/ContactForm";
import Image from "next/image";

export const ContactDialog = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section
      id="view_more"
      className="relative z-10 border-t border-t-th-fade pt-16  md:hidden lg:my-[120px]"
    >
      <div className="relative grid grid-cols-1">
        <Image
          alt=""
          width={530}
          height={377}
          className="absolute -top-60 right-0 -z-10"
          src={"/assets/services/radial-mobile.png"}
        />
        <div className="mb-16 flex flex-col items-center justify-center gap-y-8 px-4 text-center   text-white ">
          <h3 className="mx-auto cursor-default text-center font-roc text-2xl   uppercase md:text-[54px]">
            Expertise of Our Smart Contract Development Company
          </h3>

          <button
            onClick={() => setModalOpen(true)}
            type="submit"
            className="btn-submit uppercase xl:px-12"
          >
            Have a project in mind?
          </button>
          <ContactForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </section>
  );
};
