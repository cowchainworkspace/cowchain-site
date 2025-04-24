import React from "react";

const SolutionCardImage = ({
  top,
  left,
  mobileWidth,
  mobileHeight,
  imgSrc
}) => {
  return (
    <div className="relative h-[180px] w-[343px] overflow-visible xl:hidden">
      <div
        className="absolute"
        style={{
          top: `${top || 50}%`,
          left: `${left || 50}%`,
          transform: "translate(-50%, -50%)",
          width: `${mobileWidth}px`,
          height: `${mobileHeight}px`,
          backgroundImage: `url(${imgSrc.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
    </div>
  );
};

export default SolutionCardImage;
