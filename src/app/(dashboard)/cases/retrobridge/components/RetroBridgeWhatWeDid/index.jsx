import Image from "next/image";
import React from "react";
import {
  pictureOne,
  pictureTwo
} from "../../../../../../../public/cases/RetroBridge/weDid";

const RetroBridgeWhatWeDid = () => {
  return (
    <section className="pb-[134px]">
      <div className="mx-auto max-w-[1440px] pl-[97px] pr-[99px]">
        <div className="mb-20 grid grid-cols-2 gap-10">
          <div className="relative h-[500px] w-full overflow-hidden bg-vintage-velvet">
            <Image
              className="absolute bottom-0  left-1/2 -translate-x-1/2"
              src={pictureTwo}
              width={384}
              height={500}
              alt="screenshot of the game"
            />
          </div>
          <div className="relative h-[500px] w-full overflow-hidden bg-muted-horizon">
            <Image
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              src={pictureOne}
              width={384}
              height={500}
              alt="screenshot of the game"
            />
          </div>
        </div>
        <h2 className="mb-15 font-roc text-[60px] font-medium leading-90">
          What we did
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <div className="border-t-[0.5px] border-white-50 pt-8">
            <h3 className="mb-4 font-manrope text-sm font-medium uppercase leading-5 tracking-[2px] text-white-70">
              CHALLENGE
            </h3>
            <p className="text-xl font-[450] leading-[30px] text-white">
              Cross-chain transactions introduce security risks, inconsistent
              execution rules, and integration barriers across networks.
              Supporting multiple networks meant adapting to different smart
              contract standards, virtual machines, and transaction validation
              models. The challenge was to unify these processes while keeping
              the platform intuitive for users.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-8">
            <h3 className="mb-4 font-manrope text-sm font-medium uppercase leading-5 tracking-[2px] text-white-70">
              result
            </h3>
            <p className="text-xl font-[450] leading-[30px] text-white">
              RetroBridge now bridges assets across 42+ networks with smart
              contracts and decentralized protocols. A proprietary API and SDK
              for custom blockchain development streamlines integration. The
              platform combines scalability with a user-friendly experience,
              making cross-chain transfers more
              <br className="hidden custom1430:block" /> accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetroBridgeWhatWeDid;
