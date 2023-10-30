import React, { useState } from "react";
import ContactForm from "./utils/ContactForm";
import bg_lg from "../assets/bg/contact_bg.png";
import bg from "../assets/bg/clients_cases.png";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden">
      <img
        sizes="100vw"
        srcSet={`${bg} 360w, ${bg} 480w, ${bg} 720w, ${bg_lg} 1920w`}
        className="absolute min-w-[200vw] -left-[50%] -top-[40%] md:min-w-0 md:bottom-0 md:top-0 md:m-auto md:left-0 xl:left-[10vw] md:h-[150%]"
        src={bg_lg}
        alt=""
      ></img>
      <div className="grid grid-cols-1 relative">
        <div className="border-b border-b-th-fade py-16 md:py-24 xl:py-36 text-center px-4 flex flex-col gap-y-8 md:gap-y-24">
          <h3 className="text-center lg:max-w-xl mx-auto">
            HAVE PROJECT IN MIND?
          </h3>
          <button
            className="btn-contact mx-auto lg:w-48 lg:h-48"
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
