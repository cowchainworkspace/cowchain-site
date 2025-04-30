import Image from "next/image";
import React from "react";

const StepAppWhatWeDid = () => {
  return (
    <section className="pt-[50px] xl:pb-[70px] xl:pt-30">
      <div className="mx-auto max-w-[1440px]  md:px-8 lg:px-10 xl:px-[97px]">
        <h2 className="pl-4 font-roc text-[32px] font-medium leading-90 md:pl-0 xl:mb-[54px] xl:text-[55.24px]">
          What we did
        </h2>
        <div className="relative mb-[50px] grid gap-6 px-4 md:grid-cols-2 md:px-0 xl:mb-[70px] xl:gap-[37px]">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-medium uppercase leading-5 tracking-[2px]  text-white xl:mb-4">
              CHALLENGE
            </h3>
            <p className="text-xs font-[450] leading-5 text-white-70 xl:text-sm xl:leading-6">
              StepApp needed to integrate fitness tracking with blockchain,
              ensuring real-time data sync for a user-friendly experience. The
              platform also required a secure staking system, a real-time
              marketplace, and Web3 adoption that wouldn’t compromise
              accessibility.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs font-medium uppercase leading-5 tracking-[2px] text-white xl:mb-4">
              results
            </h3>
            <p className="text-xs font-[450] leading-5 text-white-70 xl:text-sm xl:leading-6">
              The platform now features a DEX, Launchpad, Web Wallet, and
              Staking dApp, along with the StepHero Telegram Mini-App to enhance
              engagement. These innovations have driven Web3 gamification and
              mass adoption, attracting 9M+ unique wallets across 100+
              countries.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Image
            src={"/cases/step-app/we-did-image.webp"}
            width={1152}
            height={695}
            alt="Step app flash cards"
            className="hidden xl:block"
          />
          <Image
            src={"/cases/step-app/we-did-img-mobile.webp"}
            width={375}
            height={227}
            alt="Step app flash cards"
            className="block xl:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default StepAppWhatWeDid;
