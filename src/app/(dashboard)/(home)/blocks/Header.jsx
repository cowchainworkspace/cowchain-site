import dynamic from "next/dynamic";

const HeaderContent = dynamic(() => import("./HeaderContent"));

const Header = () => {
  return (
    <section
      className=" -mt-[230px] overflow-hidden border-b border-b-th-fade md:-mt-0 lg:h-[861px] xl:h-[calc(100vh-4rem)] xl:min-h-[861px]"
      id="header"
    >
      <div className="video-wrapper min-h-full bg-transparent  ">

        <div className="relative flex min-h-full w-full flex-col ">
          <HeaderContent />
        </div>
      </div>
    </section>
  );
};

export default Header;
