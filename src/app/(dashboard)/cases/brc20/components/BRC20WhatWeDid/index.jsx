import React from "react";

const BRC20WhatWeDid = () => {
  return (
    <section className="py-[50px] xl:py-30">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10 xl:px-[98px]">
        <h2 className="mb-6 font-roc text-[36px] font-medium leading-90 xl:mb-15 xl:text-[54px]">
          What we did
        </h2>
        <div className="grid gap-5 md:mb-6 md:grid-cols-2 md:gap-10 xl:mb-30">
          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs uppercase leading-5 tracking-[2px] !text-white xl:mb-4 xl:font-medium">
              Business Challenges
            </h3>
            <p className="text-xs font-medium leading-5 text-white-70 xl:text-sm xl:leading-6">
              The launch of BRC20 project introduced new complexities in token
              distribution, staking, and real-time market tracking. Ensuring
              seamless transactions on the Ordinals infrastructure required an
              efficient launchpad that could handle high demand while
              maintaining transparency and accessibility. Additionally,
              integrating analytics and blockchain solutions into a single
              platform was crucial for user adoption and engagement.
            </p>
          </div>

          <div className="border-t-[0.5px] border-white-50 pt-2 xl:pt-8">
            <h3 className="mb-2 font-manrope text-xs uppercase leading-5 tracking-[2px] text-white xl:mb-4 xl:font-medium">
              results
            </h3>
            <p className="text-xs font-medium leading-5  text-white-70 xl:text-sm xl:leading-6">
              BRC20 successfully launched the token launchpad, raising $80M in
              48 hours and establishing a strong community of 45,000+ users on
              X. The integration of a real-time dashboard and BTC staking
              features provided users with actionable insights and new
              opportunities within the Bitcoin ecosystem. This blockchain
              project case demonstrates how BRC20 reshaped the Ordinals
              landscape by creating a structured and transparent launch
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BRC20WhatWeDid;
