import Image from "next/image";
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
            />
            // <div
            //   key={id}
            //   className={cn(
            //     "flex w-full items-center justify-between last:-mt-[55px]",
            //     (index + 1) % 2 === 0 && "flex-row-reverse",
            //     classes
            //   )}
            // >
            //   {/* Text Block */}
            //   <div
            //     className={cn(
            //       "flex  flex-col gap-[30px]",
            //       (index + 1) % 2 === 0 && "items-end"
            //     )}
            //     style={{
            //       width: `${textBlockWidth}px`
            //     }}
            //   >
            //     <h3 className="font-manrope text-xs uppercase leading-[18.41px] tracking-[1.84px] text-secondary">
            //       {title}
            //     </h3>
            //     <p
            //       className={cn(
            //         "font-manrope text-xl font-medium leading-[27.62px] text-white",
            //         (index + 1) % 2 === 0 && "text-right"
            //       )}
            //     >
            //       {desc}
            //     </p>
            //   </div>
            //   {!img ? (
            //     <GBCSolutionCard />
            //   ) : (
            //     <div
            //       className={cn("relative flex-shrink-0", img.leftMargin)}
            //       style={{
            //         width: `${img.width}px`,
            //         height: `${img.height}px`
            //       }}
            //     >
            //       <Image
            //         src={img.href}
            //         alt={img.info}
            //         fill
            //         className="object-contain"
            //       />
            //     </div>
            //   )}
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepAppSolutions;
