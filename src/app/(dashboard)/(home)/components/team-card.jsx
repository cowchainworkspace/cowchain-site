import { cn } from "@/lib/utils";
import Image from "next/image";

export const TeamCard = ({ name, role, photo, social, index }) => {
  return (
    <div
      className={cn(
        "group relative flex min-h-full flex-col  justify-start",
      )}
    >
      <div
        className="h-[100vh] max-h-[380px] w-[100vw] max-w-[335px] md:max-h-[478px] md:max-w-[404px] self-center bg-cover bg-top bg-no-repeat md:p-8"
        style={{ backgroundImage: `url(${photo.src})` }}
      ></div>
      <div>
        <div className="flex flex-col mb-[20px] justify-between items-start gap-[2px] md:gap-2 md:px-3 pt-[32px] md:pt-[38px]">
          <span className="z-10 font-roc text-lg uppercase text-white">
            {name}
          </span>
          <p className="z-10 text-xs uppercase text-[#BBB] md:text-sm">
            {role}
          </p>
        </div>
      </div>

      <div className="absolute bottom-2/3 right-5 z-10 hidden  w-full justify-end group-hover:flex">
        <div className="relative">
          <a href={social?.url} rel="nofollow noreferrer" target="_blank">
            <Image alt={""} className="w-8 xl:w-14" src={social?.icon}></Image>
          </a>
        </div>
      </div>
    </div>
  );
};
