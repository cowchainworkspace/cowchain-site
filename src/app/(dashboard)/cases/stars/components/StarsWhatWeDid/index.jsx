import React from "react";

const StarsWhatWeDid = () => {
  return (
    <section className="py-[50px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 xl:px-[97px]">
        <h2 className="mb-6 font-roc text-[36px] font-medium leading-90 xl:mb-15 xl:text-[55.24px]">
          What we did
        </h2>
        <div className="grid gap-5 md:mb-6 md:grid-cols-2 md:gap-[37px]">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs uppercase leading-5 tracking-[2px] !text-white xl:mb-4 xl:font-medium">
              Business Challenges
            </h3>
            <p className="text-xs font-medium leading-5 text-white-70 xl:text-sm xl:leading-6">
              Launching Stars meant more than building a Telegram bot – it
              required designing a system that could scale to millions without
              sacrificing experience. The key challenge was crafting a product
              that felt fun from the first tap but had the backend resilience
              and logic to support viral growth, referral campaigns, and
              long-term retention – all inside a messaging window.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs uppercase leading-5 tracking-[2px] text-white xl:mb-4 xl:font-medium">
              results
            </h3>
            <p className="text-xs font-medium leading-5 text-white-70 xl:text-sm xl:leading-6">
              The Stars mini app launch proved that community growth and
              gamification could live together inside Telegram. With a simple
              task engine, native UI, and sticky point system, the project went
              from idea to 1.2M+ MAU in record time. The in-app referral system
              helped scale reach organically, while seamless UX kept users
              engaged far beyond the first reward. What started as a bot became
              a community hub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarsWhatWeDid;
