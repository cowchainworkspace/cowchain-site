import linkedin from "@/assets/footer/linkedin.svg";
import mail from "@/assets/footer/mail.svg";
import medium from "@/assets/footer/medium.svg";
import telegram from "@/assets/footer/telegram.svg";
import twitter from "@/assets/footer/x-icon.svg";
import clutch from "@/assets/homepage/clutch.svg";
import upwork from "@/assets/homepage/upwork.svg";
import Image from "next/image";
import FooterForm from "./utils/FooterForm";

export function SocialLinks({ footerForm, isMenu }) {
  const date = new Date();
  return (
    <div
      className={` flex flex-col gap-y-8 ${
        !isMenu &&
        "md-border-r border-b border-b-th-fade px-[20px] py-[40px] text-center md:py-[65px] md:pl-[88px] md:pr-[79px]"
      } `}
    >
      <div className="max-w-[320px]">
        <p className={`text-left ${isMenu && "text-[12px]"} text-[#bbb]`}>
          © {date.getFullYear()} Сowchain сo. All rights reserved.{" "}
          {!isMenu && <br />}
          For business inquiries{" "}
          <a
            className="ml-1 inline text-left md:text-white md:underline"
            href="mailto:sales@cowchain.io"
          >
            sales@cowchain.io
          </a>
        </p>
      </div>
      {footerForm && <FooterForm />}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 md:mx-0 md:justify-start">
        <a
          href="https://www.linkedin.com/company/cowchaindev/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Image
            alt="linkedin"
            className="w-[42px] min-w-[42px] custom1200:w-[54px]"
            src={linkedin}
          />
        </a>
        <a
          href="https://t.me/Dorian_Cowchain"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Image
            alt="telegram"
            className="w-[42px] min-w-[42px] custom1200:w-[54px]"
            src={telegram}
          />
        </a>
        <a
          href="https://x.com/cow_chain"
          rel="nofollow noreferrer"
          target="_blank"
          className="flex size-[42px] items-center justify-center rounded-full border border-[0.5px] border-white/50 custom1200:size-[54px]"
        >
          <Image alt="twitter" className="size-[18px]" src={twitter} />
        </a>
        <a
          href="https://cowchain.medium.com/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Image
            alt="medium"
            className="w-[42px] min-w-[42px] custom1200:w-[54px]"
            src={medium}
          />
        </a>
        <a
          href="mailto:sales@cowchain.io"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Image
            alt="mail"
            className="w-[42px] min-w-[42px] custom1200:w-[54px]"
            src={mail}
          />
        </a>
        <a
          href="https://www.upwork.com/ag/cowchain/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Image
            className="w-[42px] min-w-[42px] custom1200:w-[54px]"
            src={upwork}
            alt="UpWork service Icon"
          />
        </a>
        <a
          href="https://clutch.co/profile/cowchain"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Image
            className="w-[42px] min-w-[42px] custom1200:w-[54px]"
            src={clutch}
            alt="Clutch service Icon"
          />
        </a>
      </div>
    </div>
  );
}
