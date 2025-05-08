"use client";

import bgEllipse from "@/assets/blog/contact-bg-image.webp";
import bgMb from "@/assets/blog/elipse-contact-mobile.webp";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import ContactForm from "./utils/ContactForm";

export default function Contact({
  className,
  descriptionClasses,
  titleClasses,
  title = (
    <>
      HAVE PROJECT <br className="hidden md:block" /> IN MIND?
    </>
  ),
  desc = (
    <>
      We often look for new talents, so if you are interested in working in
      Cowchain, <br className="hidden md:block" /> send your CV and our HRs will
      get in touch if you are a great fit
    </>
  ),
  hasNoDesc = true
}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className={cn("relative border-b border-b-th-fade", className)}
    >
      <Image
        className="pointer-events-none absolute left-1/2  top-[45%] hidden  -translate-x-1/2 -translate-y-1/2  md:block"
        src={bgEllipse}
        alt=""
      />
      <Image
        className="pointer-events-none absolute left-1/2 top-[40%]  h-auto w-full -translate-x-1/2 -translate-y-1/2 md:hidden"
        src={bgMb}
        alt=""
      />
      <div className="relative">
        <div className="flex flex-col text-center md:gap-10">
          <h3
            className={cn(
              "mx-auto mb-4 items-center text-center uppercase md:mb-0",
              titleClasses
            )}
          >
            {title}
          </h3>
          {!hasNoDesc && (
            <p
              className={cn(
                "mx-auto max-w-[550px] text-[14px] font-[400] leading-[22px] text-[#BBBBBB]",
                descriptionClasses
              )}
            >
              {desc}
            </p>
          )}
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
