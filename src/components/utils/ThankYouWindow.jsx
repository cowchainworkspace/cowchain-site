"use client";

import Popup from "reactjs-popup";
import modal_close from "../../assets/homepage/closeButtonIcon.svg";
import Image from "next/image";
import bg from "./../../assets/homepage/form/formBg.svg";

export default function ThankYouWindow({ modalThanksOpen, setModalThanksOpen }) {

  return (
    <Popup
      open={modalThanksOpen}
      closeOnDocumentClick
      onClose={() => setModalThanksOpen(false)}
      className="modal-form relative"
      lockScroll
      nested
    >
      <Image
        className="absolute left-[-350px] top-[-300px] z-[-1] min-h-[1100px] min-w-[900px] md:left-[-500px] md:top-[-900px] md:min-h-[2000px] md:min-w-[1500px]"
        alt=""
        src={bg}
      />

      <div className="modal p-x-[20px] relative flex h-full min-w-full max-w-7xl gap-[20px]">
        <div className="flex w-[335px]  flex-col items-center gap-[32px] md:w-[633px]">
          <div className="text-center md:text-left">
            <p className="mb-[16px] text-center uppercase text-[36px] font-bold text-white md:text-left md:text-5xl md:text-[60px]">
              Thank you for <br /> contact us!
            </p>
            <p
              style={{
                color: "rgba(187, 187, 187, 0.8)"
              }}
            >
              Our manager will get in contact with you shortly
            </p>
          </div>

         
        </div>

        <div
          className="hidden h-[50px] w-[50px] items-center justify-center md:flex"
          style={{
            border: "1px rgba(255, 255, 255, 0.5) solid",
            borderRadius: "50%"
          }}
        >
          <Image
            className="cursor-pointer"
            alt=""
            onClick={() => setModalThanksOpen(false)}
            src={modal_close}
          />
        </div>
      </div>
    </Popup>
  );
}
