import React from "react";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className="relative grid grid-cols-1">
      <div className="mb-16 flex flex-col items-center justify-center gap-y-8 px-4 text-center   text-white ">
        <h3 className="mx-auto cursor-default text-center font-roc text-2xl   uppercase md:text-[54px]">
          Our achievements
        </h3>
        <div>
          <Image
            width={530}
            height={377}
            src={"/assets/services/achiev1.png"}
          />
        </div>
      </div>
    </div>
  );
}
