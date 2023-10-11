import React, { useState } from "react";
import icons from "../../../assets/clients/client_icon.png";
import ContactForm from "../../../components/utils/ContactForm";

const Credo = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <section id="clients-credo">
      <div className="credo-wrapper bg-black relative px-default gap-y-8 md:gap-y-12 py-heading xl:py-48 flex flex-col bg-credo bg-contain bg-no-repeat bg-top border-b border-b-th-fade">
        <div className="flex items-center gap-x-2 mt-20 mx-auto">
          <img className="w-[140px]" src={icons} alt=""></img>
          <p className="text-white font-roc !font-medium">happy clients</p>
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-roc uppercase font-medium text-center mx-auto max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl leading-[120%]">
          Our commitment to code excellence and seamless collaboration drives us
          to provide custom blockchain solutions that are shaped by clients’
          visions and resonate with their audiences.
        </p>
        <button
          onClick={() => setOpenForm(true)}
          className="btn-submit w-[200px] mx-auto"
        >
          GET IN TOUCH
        </button>
        <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />
      </div>
    </section>
  );
};

export default Credo;
