export const TeamCard = ({ name, role, photo, social }) => {
  return (
    <div className="team_card_wrapper relative flex   flex-col gap-y-2 border-b border-r border-b-th-fade border-r-th-fade px-4 py-[8vh] xl:py-[12vh] ">
      <div className="team_card_overlay absolute left-0 top-0 flex h-full w-full">
        <div
          className="flex h-full w-full bg-cover bg-center bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="relative ml-auto mt-auto">
            <a href={social?.url} rel="nofollow noreferrer" target="_blank">
              <img alt={""} className="w-12" src={social?.icon}></img>
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-center">{name}</h2>
      <p className="caption text-center uppercase">{role}</p>
    </div>
  );
};
