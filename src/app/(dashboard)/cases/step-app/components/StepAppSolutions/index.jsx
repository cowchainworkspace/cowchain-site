import React from "react";
import StepAppSolutionCard from "../StepAppSolutionCard";

const StepAppSolutions = ({ solutions, classes }) => {
  return (
    <section className="overflow-hidden py-[50px] xl:pt-30 custom1430:overflow-visible">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 custom1430:px-[146px]">
        <div className="grid w-full justify-center gap-4 md:grid-cols-2 xl:grid-cols-1  xl:gap-30">
          {solutions.map(({ id, title, desc, img, textBlockWidth }, index) => (
            <StepAppSolutionCard
              key={id}
              desc={desc}
              title={title}
              textBlockWidth={textBlockWidth}
              imgHeight={img.height}
              imgWidth={img.width}
              imgSrc={img.href}
              imgInfo={img.info}
              isReverse={(index + 1) % 2 === 0}
              top={img.top}
              left={img.left}
              mobileHeight={img.mobileHeight}
              mobileWidth={img.mobileWidth}
              topMobile={img.topMobile}
              leftMobile={img.leftMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepAppSolutions;
