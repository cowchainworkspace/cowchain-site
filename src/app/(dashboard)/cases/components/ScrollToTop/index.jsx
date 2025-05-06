import React from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = ({ currentNumber, totalNumber }) => {
  return (
    <section className="flex justify-center border-b-[0.5px] border-b-th-fade py-[100px]">
      <div className="flex flex-col items-center gap-8">
        <p className="font-roc text-sm font-medium uppercase leading-90">{`${currentNumber} of ${totalNumber} projects`}</p>
        <button
          onClick={() => scroll.scrollToTop()}
          type="button"
          className="cases-border-gradient size-[180px] bg-white font-roc text-sm font-medium uppercase leading-90 text-black"
        >
          back to top
        </button>
      </div>
    </section>
  );
};

export default ScrollToTop;
