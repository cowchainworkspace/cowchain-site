import React, { useState } from "react";
import ContactForm from "./utils/ContactForm";
import bg from "../assets/bg/contact_bg.png";

const Contact = () => {
  
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className="relative">
      <img
        className="hidden md:block absolute bottom-0 top-0 w-full m-auto -left-[5vw] text-center"
        src={bg}
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
