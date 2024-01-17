import { cn } from "lib/utils";

export const TeamCard = ({ name, role, photo, social, index }) => {
  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[200px] flex-col  justify-start gap-y-2 border-b  border-b-th-fade border-r-th-fade     text-left last:border-b-0 md:border-r md:last:border-b  ",
        {
          "border-r": index % 2 === 0
        }
      )}
    >
      <div
        className="flex min-h-[187px] w-full  self-center bg-cover bg-top bg-no-repeat p-8 md:min-h-[398px]"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div>
        <div className="flex flex-col justify-between gap-[14px] px-5 py-4">
          <h2 className="z-10 font-roc text-lg">{name}</h2>
          <p className="caption z-10 uppercase">{role}</p>
        </div>
      </div>

      <div className="absolute bottom-2/3 right-5 z-10 hidden  w-full justify-end group-hover:flex">
        <div className="relative">
          <a href={social?.url} rel="nofollow noreferrer" target="_blank">
            <img alt={""} className="w-8 xl:w-14" src={social?.icon}></img>
          </a>
        </div>
      </div>
    </div>
  );
};
