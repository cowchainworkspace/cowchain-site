import dynamic from "next/dynamic";
import { Suspense } from "react";

const Video = dynamic(() => import("./Video"));
const HeaderContent = dynamic(() => import("./HeaderContent"));

const Header = () => {
  return (
    <section
      className="fullheight -mt-40 overflow-hidden border-b border-b-th-fade md:-mt-0 md:h-[861px]"
      id="header"
    >
      <div className="video-wrapper min-h-full bg-transparent  md:h-[861px]">
        <Video />
        <div className="relative flex min-h-full w-full flex-col px-[20px] pb-[51px] md:h-[861px] md:px-[44px]">
          <HeaderContent />
        </div>
      </div>
    </section>
  );
};

export default Header;
