import Image from "next/image";

export const ExpertiseBlock = ({ title, text }) => {
  return (
    <article className="expertise_wrapper md-border-r relative cursor-default  border-b border-b-th-fade px-4 py-12 lg:min-h-[300px] lg:px-10 xl:px-16 xl:py-20">
      <div className="expertise_wrapper_bg absolute left-0 top-0 h-full w-full"></div>
      <div className="relative">
        <div className="flex items-center gap-2 md:items-start md:justify-start">
          <Image
            alt=""
            width={24}
            height={24}
            src={"/assets/services/networks/eth.png"}
          />
          <p className="font-roc text-xl uppercase text-white">{title}</p>
        </div>
        <p className="mt-8 text-[#bbb]">{text}</p>
      </div>
    </article>
  );
};
