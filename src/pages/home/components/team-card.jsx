import { cn } from "lib/utils";

export const TeamCard = ({ name, role, photo, social, index }) => {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col gap-y-2 border-b  border-b-th-fade border-r-th-fade px-4 py-[8vh] text-left last:border-b-0 md:border-r md:last:border-b xl:py-[12vh]",
        {
          "border-r": index % 2 === 0
        }
      )}
    >
      <div className="team_card_overlay  absolute left-0 top-0 hidden h-full w-full md:flex">
        <div
          className="flex h-full w-full bg-cover bg-top bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full md:hidden">
        <div
          className="flex h-full w-full bg-cover bg-center bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
      </div>
      <div className="min-h-[50px] min-w-[90%]"></div>
      <div className="absolute bottom-5 z-10 flex w-full max-w-[90%] justify-between">
        <div className="flex flex-col  justify-between">
          <h2 className="z-10">{name}</h2>
          <p className="caption z-10 uppercase">{role}</p>
        </div>

        <div className="relative">
          <a href={social?.url} rel="nofollow noreferrer" target="_blank">
            <img alt={""} className="w-8 xl:w-12" src={social?.icon}></img>
          </a>
        </div>
      </div>
    </div>
  );
};
