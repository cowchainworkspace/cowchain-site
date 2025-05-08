"use client";

import bg from "@/assets/bg/clients_cases.png";
import bg_lg from "@/assets/bg/contact_bg.png";
import ConnectForm from "@/components/utils/ConnectForm";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const TeamContact = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="apply" className={cn("relative", className)}>
      <Image
        sizes="100vw"
        srcSet={`${bg} 360w, ${bg} 480w, ${bg} 720w, ${bg_lg} 1920w`}
        className="absolute left-1/2 top-[200px] min-w-[250vw] -translate-x-1/2  -translate-y-1/2 transform sm:min-w-[100vw] md:top-[300px]"
        src={bg_lg}
        alt=""
      />

      <div className="relative grid grid-cols-1">
        <div className="flex flex-col items-center gap-y-8 border-b border-b-th-fade px-4 py-16 text-center md:gap-y-6 md:py-24 xl:py-36">
          <h3 className="mx-auto text-center uppercase lg:max-w-none">
            want to join the team?
          </h3>
          <span className="mb-10 max-w-[303px] text-sm text-secondary md:max-w-[570px]">
            We often look for new talents, so if you are interested in working
            in Cowchain , send your CV and we will get in touch if you are a
            great fit.
          </span>
          <button
            className="btn-contact mx-auto lg:h-48 lg:w-48"
            onClick={() => setModalOpen(true)}
          >
            Apply to <br /> connect
          </button>
          <ConnectForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </section>
  );
};

export default TeamContact;
