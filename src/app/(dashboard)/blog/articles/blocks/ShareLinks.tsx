import facebook from "@/assets/article/facebookIcon.svg";
import linkedin from "@/assets/article/linkedin-icon.svg";
import medium from "@/assets/article/medium-article.svg";
import telegram from "@/assets/article/telegram-icon.svg";

import Image from "next/image";
import React from "react";

export const ShareLinks = () => {
  return (
    <div className="mx-auto flex w-[216px] items-center justify-between gap-x-2 md:mx-0 md:justify-between">
      <a
        href="https://www.linkedin.com/company/cowchain/"
        rel="nofollow noreferrer"
        target="_blank"
        className="flex h-[48px] w-[48px] items-center justify-center rounded-[50%]"
        style={{ border: "1px solid rgba(255, 255, 255, 0.4)" }}
      >
        <Image alt="linkedin" className="w-[14px] lg:w-[14px]" src={linkedin} />
      </a>
      <a
        href="https://t.me/cowchain_team"
        rel="nofollow noreferrer"
        target="_blank"
        className="flex h-[48px] w-[48px] items-center justify-center rounded-[50%]"
        style={{ border: "1px solid rgba(255, 255, 255, 0.4)" }}
      >
        <Image alt="telegram" className="w-[14px] lg:w-[14px]" src={telegram} />
      </a>
      <a
        href="https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw"
        rel="nofollow noreferrer"
        target="_blank"
        className="flex h-[48px] w-[48px] items-center justify-center rounded-[50%]"
        style={{ border: "1px solid rgba(255, 255, 255, 0.4)" }}
      >
        <Image
          alt="telegram icon"
          className="w-[14px] lg:w-[14px]"
          src={facebook}
        />
      </a>
      <a
        href="https://cowchain.medium.com/"
        rel="nofollow noreferrer"
        target="_blank"
        className="flex h-[48px] w-[48px] items-center justify-center rounded-[50%]"
        style={{ border: "1px solid rgba(255, 255, 255, 0.4)" }}
      >
        <Image alt="medium" className="w-[14px] lg:w-[18px]" src={medium} />
      </a>
    </div>
  );
};
