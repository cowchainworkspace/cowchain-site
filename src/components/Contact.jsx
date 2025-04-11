"use client";

import bg from "@/assets/bg/get-contact.png";
import bgMb from "@/assets/blog/elipse-contact-mobile.webp";
import React, { useState } from "react";
import ContactForm from "./utils/ContactForm";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Contact({ className }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className={cn("relative", className)}>
      <Image
        className="absolute left-1/2  top-1/2   hidden -translate-x-1/2 -translate-y-1/2  md:block"
        src={bg}
        alt="Contacts Background"
      />
      <Image
        className="absolute left-1/2 top-[40%] h-auto w-full -translate-x-1/2 -translate-y-1/2 md:hidden"
        src={bgMb}
        alt=""
      />
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col gap-y-[32px] border-b border-b-th-fade px-[30px] py-[105px] text-center md:gap-y-[40px] md:py-24 xl:py-36">
          <div className="flex flex-col  items-center gap-[12px]">
            <h3 className="mx-auto max-w-[303px] text-center lg:max-w-xl">
              HAVE PROJECT <br /> IN MIND?
            </h3>
            <p className="text-[14px] max-w-[550px] font-[400] leading-[22px] text-[#BBBBBB]">
              We often look for new talents, so if you are interested in working
              in Cowchain, send your CV and our HRs will get in touch if you are
              a great fit
            </p>
          </div>
          <button
            className="btn-contact mx-auto lg:h-48 lg:w-48"
            onClick={() => setModalOpen(true)}
          >
            Get in touch
          </button>
          <ContactForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </section>
  );
}
