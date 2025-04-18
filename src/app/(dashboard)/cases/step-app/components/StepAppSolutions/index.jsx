import React from "react";
import StepAppSolutionCard from "../StepAppSolutionCard";

const StepAppSolutions = ({ solutions, classes }) => {
  return (
    <section className="pt-30">
      <div className="mx-auto max-w-[1440px] px-[146px]">
        <div className="flex w-full flex-col gap-30">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepAppSolutions;
