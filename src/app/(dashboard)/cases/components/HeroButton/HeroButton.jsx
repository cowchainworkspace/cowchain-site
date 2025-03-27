import React from "react";

const HeroButton = ({ buttonLabel = "Get a free quote" }) => {
  return (
    <button
      type="button"
      className="flex h-[50px] w-[226px] items-center justify-center bg-white font-roc font-medium uppercase leading-[0.9] text-black"
    >
      {buttonLabel}
    </button>
  );
};

export default HeroButton;
