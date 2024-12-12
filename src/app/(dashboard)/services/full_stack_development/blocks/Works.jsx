import React from "react";
import Image from "next/image";

export default function Works() {
  return (
    <div className="relative mt-10 grid grid-cols-1">
      <div className="mb-14 flex flex-col items-center justify-center gap-y-8 px-4 text-center   text-white ">
        <h3 className="mx-auto cursor-default text-center font-roc text-4xl   uppercase md:text-[54px]">
          our works
        </h3>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className="flex flex-col items-start gap-4">
              <Image
                alt=""
                width={530}
                height={377}
                className="max-h-[500px]"
                src={"/assets/services/work1.png"}
              />
              <span className="text-left uppercase">Non-custodial wallet</span>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Image
                alt=""
                width={530}
                height={377}
                className="max-h-[500px]"
                src={"/assets/services/work1.png"}
              />
              <span className="text-left uppercase">Non-custodial wallet</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-start gap-4">
              <Image
                alt=""
                width={530}
                height={377}
                className="max-h-[500px]"
                src={"/assets/services/work1.png"}
              />
              <span className="text-left uppercase">Non-custodial wallet</span>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Image
                alt=""
                width={530}
                height={377}
                className="max-h-[500px]"
                src={"/assets/services/work1.png"}
              />
              <span className="text-left uppercase">Non-custodial wallet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
