import Tag from "@/components/ui/tag";
import React from "react";

export default function Achievements() {
  return (
    <section className="relative  w-full overflow-hidden border-b border-b-th-fade border-t border-t-th-fade pt-20 md:max-w-full ">
      <div className="justify-left relative flex cursor-default flex-col items-start px-5 pb-8 md:px-8 md:pb-[127px] lg:px-16 xl:px-24">
        <Tag
          title={"dApp Development Services"}
          className={"z-[20] mb-4 md:mb-8"}
        />

        <h3 className="text-left text-[42px] uppercase text-white md:block  lg:mt-6">
          Cowchain is among the{" "}
          <span className="violet-gradient-text">
            leading decentralized
            <br />
            exchange development companies
          </span>{" "}
          providing <br />
          end-to-end services to empower one to build <br />
          <span className="violet-gradient-text">
            scalable DEX platforms
          </span>. As the trusted <br />
          <span className="violet-gradient-text">
            decentralized exchange software <br />
            development company
          </span>
          , we believe <br />
          in{" "}
          <span className="violet-gradient-text">
            secure and customized solutions
          </span>{" "}
          that help <br />
          organizations address the demands of the market <br />
          and security in trading alongside the users
        </h3>
      </div>
    </section>
  );
}
