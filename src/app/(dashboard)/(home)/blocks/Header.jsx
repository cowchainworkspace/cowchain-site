import dynamic from "next/dynamic";

const HeaderContent = dynamic(() => import("./HeaderContent"));

const Header = () => {
  return (
    <section
      className=" -mt-[230px] overflow-hidden border-b border-b-th-fade md:-mt-0 md:h-[861px]"
      id="header"
    >
      <div className="video-wrapper min-h-full bg-transparent  md:h-[861px]">

        <div className="relative flex min-h-full w-full flex-col md:h-[861px]">
          <HeaderContent />
        </div>
      </div>
    </section>
  );
};

export default Header;
