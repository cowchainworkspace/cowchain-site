import Tag from "@/components/ui/tag";
import React from "react";

export default function Achievements() {
  return (
    <section className="relative  w-full overflow-hidden border-b border-t border-b-th-fade border-t-th-fade pt-20 md:max-w-full ">
      <div className="justify-left relative flex cursor-default flex-col items-start px-5 pb-8 md:px-8 md:pb-12  lg:px-16 xl:px-24">
        <Tag
          title={"dApp Development Services"}
          className={"z-[20] mb-4 md:mb-8"}
        />

        <h3 className="mb-[196px] text-left text-[42px] uppercase text-white md:mb-[150px] md:block  lg:mt-6">
          At Cowchain, we specialize in delivering{" "}
          <span className="violet-gradient-text">
            complete
            <br />
            full stack development services
          </span>{" "}
          , covering all <br />
          aspects of digital product creation. As a{" "}
          <span className="violet-gradient-text">
            full stack <br />
            software development company
          </span>
          , we create scalable <br />
          solutions, ensuring seamless operation across all <br />
          system components. By leveraging
          <span className="violet-gradient-text"> {" "}
            cutting-edge <br /> technologies
          </span>
          , our engineers deliver systems that <br />
          work{" "}
          <span className="violet-gradient-text">
            flawlessly across platforms
          </span>
          , adapting to the <br />
          unique needs of your business
        </h3>
      </div>
    </section>
  );
}
