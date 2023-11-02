import React, { useState } from "react";
import ContactForm from "./utils/ContactForm";
import bg_lg from "assets/bg/contact_bg.png";
import bg from "assets/bg/clients_cases.png";
import { cn } from "lib/utils";

const Contact = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className={cn("relative overflow-hidden", className)}>
      <img
        sizes="100vw"
        srcSet={`${bg} 360w, ${bg} 480w, ${bg} 720w, ${bg_lg} 1920w`}
        className="absolute -left-[50%] -top-[40%] min-w-[200vw] md:bottom-0 md:left-0 md:top-0 md:m-auto md:h-[150%] md:min-w-0 xl:left-[10vw]"
        src={bg_lg}
        alt=""
      ></img>
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col gap-y-8 border-b border-b-th-fade px-4 py-16 text-center md:gap-y-24 md:py-24 xl:py-36">
          <h3 className="mx-auto text-center lg:max-w-xl">
            HAVE PROJECT IN MIND?
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
};

export default Contact;
