import React from "react";
import olehMobImg from "@/assets/homepage/team/newTeam/olehMobImg.png";
import { cn } from "@/lib/utils";
import { teamGalleryData } from "../serviceTeamData/data";

const TeamCard = ({ name, role, photo, social, check }) => {
  return (
    <div
      className={cn(
        "relative flex max-w-[200px] flex-col justify-start gap-y-9 xl:max-w-[400px]",
        {
          "md:hidden": check === "new"
        }
      )}
    >
      {check === "oleh" ? (
        <>
          <div
            className="flex h-full hidden max-h-[187px] min-h-[187px]  bg-cover bg-center bg-no-repeat md:flex xl:max-h-[459px] xl:min-h-[459px] xl:w-[400px]"
            style={{ backgroundImage: `url(${photo.src})` }}
          />

          <div
            className="flex h-full max-h-[187px] min-h-[187px] md:hidden  bg-cover bg-center bg-no-repeat xl:max-h-[459px] xl:min-h-[459px] xl:w-[400px]"
            style={{ backgroundImage: `url(${olehMobImg.src})` }}
          />
        </>
      ) : (
        <div
          className="flex h-full max-h-[187px] min-h-[187px]  bg-cover bg-center bg-no-repeat xl:max-h-[459px] xl:min-h-[459px] xl:w-[400px]"
          style={{ backgroundImage: `url(${photo.src})` }}
        />
      )}
      <div>
        <span
          className="font-roc text-sm font-medium uppercase text-white"
          style={{
            opacity: check === "new" ? 0.1 : 1,
            textAlign: check === "new" ? "center" : "left",
            display: "block",
            width: "100%"
          }}
        >
          {name}
        </span>
        <p
          className="caption  uppercase"
          style={{
            opacity: check === "new" && 0
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
};

const TeamGallery = () => {
  return (
    <section
      id="team"
      className="relative flex flex-col items-center justify-center px-6 pt-[60px] pb-28 md:pt-[115px]"
    >
      <h3 className="mb-[36px] md:mb-20 uppercase">Meet the team</h3>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:grid-cols-3 lg:col-span-3 xl:gap-x-5 xl:gap-y-20">
        {teamGalleryData.map((member, index) => (
          <TeamCard key={index} {...member} check={member.check} />
        ))}
      </div>
    </section>
  );
};

export default TeamGallery;
