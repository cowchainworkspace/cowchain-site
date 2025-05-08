import React from "react";

const HeroButton = ({ buttonLabel = "Get a free quote", openModal }) => {
  return (
    <button
      onClick={() => {
        openModal(true);
      }}
      type="button"
      className="z-[5] flex h-[50px] w-[226px] items-center justify-center bg-white font-roc text-sm font-medium uppercase leading-90 text-black transition-colors duration-500 hover:bg-[#ffffff10] hover:text-white"
    >
      {buttonLabel}
    </button>
  );
};

export default HeroButton;
