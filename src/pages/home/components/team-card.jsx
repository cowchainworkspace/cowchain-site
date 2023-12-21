import { cn } from "lib/utils";

export const TeamCard = ({ name, role, photo, social, index }) => {
  return (
    <div
      className={cn(
        "  relative flex   flex-col gap-y-2 border-b border-b-th-fade border-r-th-fade px-4 py-[8vh] md:border-r xl:py-[12vh]",
        {
          "border-r": index % 2 === 0
        }
      )}
    >
      <div className="team_card_overlay  absolute left-0 top-0 hidden h-full w-full md:flex">
        <div
          className="flex h-full w-full bg-cover bg-center bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="relative ml-auto mt-auto">
            <a href={social?.url} rel="nofollow noreferrer" target="_blank">
              <img alt={""} className="w-8 xl:w-12" src={social?.icon}></img>
            </a>
          </div>
        </div>
      </div>
      <div className=" absolute left-0 top-0 flex h-full w-full md:hidden">
        <div
          className="flex h-full w-full bg-cover bg-center bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="relative ml-auto mt-auto">
            <a href={social?.url} rel="nofollow noreferrer" target="_blank">
              <img alt={""} className="w-8 md:w-10" src={social?.icon}></img>
            </a>
          </div>
        </div>
      </div>
      <h2 className="z-10 text-center ">{name}</h2>
      <p className="caption z-10   text-center uppercase">{role}</p>
    </div>
  );
};
