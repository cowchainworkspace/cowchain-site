import React, { useState } from "react";
import Popup from "reactjs-popup";
import modal_close from "../../assets/homepage/modal_close.svg";
import error from "../../assets/footer/error.svg";
import success from "../../assets/footer/success.svg";

const ModalPopup = ({ isOpen, toggleOpen, isError }) => {
  const successText = (
    <div className="flex flex-col">
      <img className="w-12 mx-auto" src={success}></img>
      <p className="text-2xl uppercase font-roc font-medium text-white text-center mt-4">
        Thanks! <br></br>
        Your request was sent successfully. <br></br> We will contact you in
        next 48 ours!
      </p>
    </div>
  );

  const errorText = (
    <div className="flex flex-col">
      <img className="w-12 mx-auto" src={error}></img>
      <p className="text-xl font-roc font-normal text-[#bbb] text-center mt-4">
        Sorry, an error occured...
      </p>
      <p className="text-xl font-roc font-normal text-[#bbb] text-center mt-4">
        Please, contact us directly on
      </p>
      <a href="mailto:sales@cowchain.io" onClick={toggleOpen}>
        <p className="text-[#bbb] underline text-center text-xl">
          sales@cowchain.io
        </p>
      </a>
    </div>
  );

  return (
    <Popup
      open={isOpen}
      closeOnDocumentClick
      className="popup-modal"
      lockScroll
    >
      <div className="modal max-h-[90vh] min-w-full pt-4 pb-12 px-8 bg-black max-w-5xl border-2 border-white">
        <div className="flex">
          <img
            className="cursor-pointer w-8 ml-auto"
            alt=""
            onClick={toggleOpen}
            src={modal_close}
          />
        </div>
        {isError ? errorText : successText}
      </div>
    </Popup>
  );
};

export default ModalPopup;
