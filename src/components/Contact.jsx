"use client";

import bgEllipse from "@/assets/blog/contact-bg-image.webp";
import bgMb from "@/assets/blog/elipse-contact-mobile.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "./utils/ContactForm";

export default function Contact({ className }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className={cn("relative border-b border-b-th-fade", className)}
    >
      <Image
        className="absolute left-1/2 pointer-events-none  top-[45%] hidden  -translate-x-1/2 -translate-y-1/2  md:block"
        src={bgEllipse}
        alt=""
      />
      <Image
        className="absolute left-1/2 top-[40%] pointer-events-none  h-auto w-full -translate-x-1/2 -translate-y-1/2 md:hidden"
        src={bgMb}
        alt=""
      />
      <div className="relative">
        <div className="flex flex-col text-center md:gap-10">
          <h3 className="mx-auto max-w-[303px] text-center lg:max-w-xl">
            HAVE PROJECT <br /> IN MIND?
          </h3>
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
