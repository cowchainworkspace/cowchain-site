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
      <div className={cn("mx-auto max-w-[1440px] px-[98px]", classes)}>
        <div className={cn("grid grid-cols-2", containerClasses)}>
          <h2
            className={cn(
              "font-roc text-[60px] font-medium uppercase leading-90",
              titleClasses
            )}
          >
            team behind
            <br /> the project
          </h2>
          <div className={cn("flex flex-col gap-8", listClasses)}>
            {team.map(({ id, department, people }) => (
              <div
                key={id}
                className={cn(
                  "border-b-[0.5px] border-white-50 pb-8 last:border-0 last:pb-0",
                  blockClasses
                )}
              >
                <h4
                  className={cn(
                    "mb-4 font-manrope text-xs uppercase leading-5 tracking-[2px] text-secondary",
                    headerClasses
                  )}
                >
                  {department}
                </h4>
                <p
                  className={cn(
                    "font-manrope text-xl font-medium leading-[30px] text-white",
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
