import Tag from "@/components/ui/tag";
import React from "react";

export default function Achievements() {
  return (
    <section className="relative  w-full overflow-hidden  border-t border-t-th-fade  border-b border-b-th-fade pt-20 md:max-w-full ">
      <div className="relative flex cursor-default flex-col items-start justify-left px-5 pb-8 md:px-8 md:pb-[127px] lg:px-16 xl:px-24">
        <Tag
          title={"dApp Development Services"}
          className={"z-[20] mb-4 md:mb-8"}
        />
        <h3 className=" text-left text-[42px] uppercase text-white md:block  lg:mt-6">
          As a trusted dapp development company, Cowchain <br />
          offers full-cycle dApp development services against <br />
          the growing demands of modern industries. <br />
          Be it a startup or a big player, with our{" "}
          <span className="violet-gradient-text">
            dapp Be it a startup or a big player, with our dapp development
            services
          </span>{" "}
          by implementing the full <br />
          potential of blockchain technology, a business can <br />
          build{" "}
          <span className="violet-gradient-text">
            highly secure and decentralized applications
          </span>
        </h3>
      </div>
    </section>
  );
}
