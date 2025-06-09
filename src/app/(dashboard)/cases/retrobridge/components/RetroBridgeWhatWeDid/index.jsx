import Image from "next/image";
import React from "react";
import {
  pictureOne,
  pictureTwo
} from "../../../../../../../public/cases/RetroBridge/weDid";

const RetroBridgeWhatWeDid = () => {
  return (
    <section className="pb-[50px] xl:pb-[134px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 xl:pl-[97px] xl:pr-[99px]">
        <div className="mb-6 grid grid-cols-2 gap-3 gap-6 xl:mb-20 xl:gap-10">
          <div className="relative h-[140px] w-full overflow-hidden bg-vintage-velvet md:h-[250px] lg:h-[350px] xl:h-[500px]">
            <Image
              className="absolute bottom-0 left-1/2 w-[105px] -translate-x-1/2 md:w-[150px]  lg:w-[250px] xl:w-[384px]"
              src={pictureTwo}
              width={384}
              height={500}
              alt="screenshot of the game"
              loading="lazy"
              priority={false}
            />
          </div>
          <div className="relative h-[140px] w-full overflow-hidden bg-muted-horizon md:h-[250px] lg:h-[350px] xl:h-[500px]">
            <Image
              className="absolute bottom-0 left-1/2 w-[105px] -translate-x-1/2 md:w-[150px] lg:w-[250px] xl:w-[384px]"
              src={pictureOne}
              width={384}
              height={500}
              alt="screenshot of the game"
              loading="lazy"
              priority={false}
            />
          </div>
        </div>
        <h2 className="mb-6 font-roc text-[32px] font-medium leading-90 xl:mb-15 xl:text-[55.24px]">
          What we did
        </h2>
        <div className="grid gap-6 md:grid-cols-2 xl:gap-10">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-medium uppercase leading-5 tracking-[2px] text-white xl:mb-4 xl:text-sm">
              business challenges
            </h3>
            <p className="text-xs font-[450] leading-5 text-white-70 xl:text-sm xl:leading-6 ">
              Cross-chain transactions introduce security risks, inconsistent
              execution rules, and integration barriers across networks.
              Supporting multiple networks meant adapting to different smart
              contract standards, virtual machines, and transaction validation
              models. The challenge was to unify these processes while keeping
              the platform intuitive for users.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-medium uppercase leading-5 tracking-[2px] text-white xl:mb-4 ">
              result
            </h3>
            <p className="text-xs font-[450] leading-5 text-white-70  xl:leading-6">
              RetroBridge now bridges assets across 51+ networks with smart
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
