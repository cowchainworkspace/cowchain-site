import { cn } from "@/lib/utils";
import React from "react";

const TeamBehind = ({ team, classes }) => {
  return (
    <section>
      <div className={cn("mx-auto max-w-[1440px] px-[98px]", classes)}>
        <div className="grid grid-cols-2">
          <h2 className="font-roc text-[60px] font-medium uppercase leading-90">
            team behind
            <br /> the project
          </h2>
          <div className="flex flex-col gap-8">
            {team.map(({ id, department, people }) => (
              <div
                key={id}
                className="border-b-[0.5px] border-white-50 pb-8 last:border-0 last:pb-0"
              >
                <h4 className="mb-4 font-manrope text-xs uppercase leading-5 tracking-[2px] text-secondary">
                  {department}
                </h4>
                <p className="font-manrope text-xl font-medium leading-[30px] text-white">
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
