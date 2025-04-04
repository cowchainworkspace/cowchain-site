import Image from "next/image";
import React from "react";
import {
  weDidFirst,
  weDidSecond
} from "../../../../../../../public/cases/PixelVerse";
import { businessChallenges } from "../../utils/constants";

const PixelVerseWhatWeDid = () => {
  return (
    <section className="py-30">
      <div className="mx-auto max-w-[1440px] px-[98px]">
        <h2 className="mb-15 font-roc text-[60px] font-medium leading-90">
          What we did
        </h2>
        <div className="mb-30 grid grid-cols-2 gap-10">
          <div className="border-t-[0.5px] border-white-50 pt-8">
            <h3 className="mb-4 font-manrope text-xs uppercase leading-5 tracking-[2px] !text-secondary">
              Business Challenges
            </h3>
            <div className="flex flex-col gap-[14px]">
              {businessChallenges.map(({ id, title, desc }) => (
                <div key={id}>
                  <h4 className="mb-[6px] font-manrope text-xl font-normal normal-case leading-[30px] text-white">
                    {title}
                  </h4>
                  <p className="text-sm font-medium leading-6 text-white-70">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t-[0.5px] border-white-50 pt-8">
            <h3 className="mb-4 font-manrope text-xs uppercase leading-5 tracking-[2px] text-white">
              Custom Telegram Mini App Development
            </h3>
            <p className="text-sm font-medium leading-6 text-white-70">
              PixelVerse’s advancement was powered by the launch of PixelTap, a
              custom Telegram Mini App that served as a transformative digital
              solution, enhancing accessibility and user involvement while
              showcasing blockchain innovation. PixelTap ensured the app handled
              high traffic volumes smoothly, laying the foundation for
              PixelVerse’s achievement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="relative h-[500px] w-full overflow-hidden bg-cosmic-plum-fade">
            <Image
              className="absolute bottom-0  left-1/2 -translate-x-1/2"
              src={weDidFirst}
              width={403}
              height={821}
              alt="screenshot of the game"
            />
          </div>
          <div className="relative h-[500px] w-full overflow-hidden bg-vintage-blush-gradient">
            <Image
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              src={weDidSecond}
              width={403}
              height={821}
              alt="screenshot of the game"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelVerseWhatWeDid;
