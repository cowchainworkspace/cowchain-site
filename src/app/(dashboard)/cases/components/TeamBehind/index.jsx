import { cn } from "@/lib/utils";
import React from "react";

const TeamBehind = ({
  team,
  classes,
  descClasses,
  blockClasses,
  headerClasses,
  titleClasses,
  listClasses,
  containerClasses
}) => {
  return (
    <section>
      <div
        className={cn("mx-auto max-w-[1440px] md:px-8 xl:px-[98px]", classes)}
      >
        <div className={cn("grid md:grid-cols-2", containerClasses)}>
          <h2
            className={cn(
              "mb-6 px-4 font-roc text-[32px] font-medium uppercase leading-90 md:mb-0 md:px-0 xl:text-[60px]",
              titleClasses
            )}
          >
            team behind
            <br /> the project
          </h2>
          <div className={cn("flex flex-col gap-6 xl:gap-8", listClasses)}>
            {team.map(({ id, department, people }) => (
              <div
                key={id}
                className={cn(
                  "border-b-[0.5px] border-white-50 px-4 pb-6 first:border-t-[0.5px] first:pt-6 md:border-t-0 md:px-0 md:pb-[30px] md:first:border-t-0 md:first:pt-0 md:last:border-b-0 md:last:pb-0",
                  blockClasses
                )}
              >
                <h4
                  className={cn(
                    "mb-2 font-manrope text-xs uppercase leading-5 tracking-[2px] text-secondary xl:mb-4",
                    headerClasses
                  )}
                >
                  {department}
                </h4>
                <p
                  className={cn(
                    "font-manrope text-sm font-medium leading-6 text-white xl:text-xl xl:leading-[30px]",
                    descClasses
                  )}
                >
                  {people}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBehind;
