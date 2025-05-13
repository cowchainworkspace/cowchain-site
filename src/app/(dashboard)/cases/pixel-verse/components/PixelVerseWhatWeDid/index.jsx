import Image from "next/image";
import React from "react";
import {
  weDidFirst,
  weDidSecond
} from "../../../../../../../public/cases/PixelVerse";

const PixelVerseWhatWeDid = () => {
  return (
    <section className="py-[50px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 xl:px-[98px]">
        <h2 className="mb-6 font-roc text-[36px] font-medium leading-90 xl:mb-15 xl:text-[60px]">
          What we did
        </h2>
        <div className="grid gap-5 md:mb-6 md:grid-cols-2 md:gap-10 xl:mb-30">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs uppercase leading-5 tracking-[2px] !text-white xl:mb-4 xl:font-medium">
              Business Challenges
            </h3>
            <p className="text-xs font-medium leading-5 text-white-70 xl:text-sm xl:leading-6">
              Bringing Web3 gaming to a global audience required seamless
              onboarding and a frictionless user experience. Traditional
              blockchain games often struggle with complex setups and high entry
              barriers, making mass adoption difficult. Additionally, ensuring
              player engagement and long-term retention was crucial, as many
              Play-to-Earn models suffer from short lifecycles.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 gap-6 md:hidden">
            <div className="relative h-[132px] w-full overflow-hidden bg-cosmic-plum-fade md:h-[250px] lg:h-[350px] ">
              <Image
                className="absolute bottom-0 left-1/2 w-[107px] -translate-x-1/2 md:w-[150px]  lg:w-[250px] xl:w-[384px]"
                src={weDidFirst}
                width={403}
                height={821}
                alt="screenshot of the game"
              />
            </div>
            <div className="relative h-[132px] w-full overflow-hidden bg-vintage-blush-gradient md:h-[250px] lg:h-[350px] ">
              <Image
                className="absolute bottom-0 left-1/2 w-[107px] -translate-x-1/2 md:w-[150px] lg:w-[250px] xl:w-[384px]"
                src={weDidSecond}
                width={403}
                height={821}
                alt="screenshot of the game"
              />
            </div>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs uppercase leading-5 tracking-[2px] text-white xl:mb-4 xl:font-medium">
              results
            </h3>
            <p className="text-xs font-medium leading-5  text-white-70 xl:text-sm xl:leading-6">
              PixelTap leveraged Telegram integration to simplify onboarding,
              making Web3 gaming instantly accessible. Its interactive
              Tap-to-Earn mechanics boosted user retention and session duration,
              creating a more engaging experience. Strategic backing from Delphi
              Ventures, Merit Circle, Mechanism Capital, and Junmo “James” Kwon
              enabled rapid scaling and continuous innovation.
            </p>
          </div>
        </div>
        <div className=" hidden grid-cols-2 gap-10  md:grid">
          <div className="relative w-full overflow-hidden bg-cosmic-plum-fade md:h-[250px] lg:h-[350px] xl:h-[500px]">
            <Image
              className="absolute bottom-0  left-1/2 -translate-x-1/2 md:w-[150px]  lg:w-[250px] xl:w-[403px]"
              src={weDidFirst}
              width={403}
              height={821}
              alt="screenshot of the game"
            />
          </div>
          <div className="relative w-full overflow-hidden bg-vintage-blush-gradient md:h-[250px] lg:h-[350px] xl:h-[500px]">
            <Image
              className="absolute bottom-0 left-1/2 -translate-x-1/2 md:w-[150px]  lg:w-[250px] xl:w-[403px]"
              src={weDidSecond}
              width={403}
              height={821}
              alt="screenshot of the game"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelVerseWhatWeDid;
