import { HeroSection } from "./blocks/HeroSection";
import TeamContact from "./blocks/TeamContact";
import TeamGallery from "./blocks/TeamGallery";
import { Values } from "./blocks/Values";
import { ValuesMobile } from "./blocks/ValuesMobile";
import Tag from "@/components/ui/tag";
import linkedin from "@/assets/footer/linkedin.svg";
import telegram from "@/assets/footer/telegram.svg";
import mail from "@/assets/footer/mail.svg";
import team1 from "@/assets/team/team-carousel-2/team1.png";
import team2 from "@/assets/team/team-carousel-2/team2.png";
import team3 from "@/assets/team/team-carousel-2/team3.png";
import Image from "next/image";
import michaelMicImg from "@/assets/team/executives/michaelMicImg.png";
import quote from "@/assets/team/executives/quote.svg";
import quoteBg from "@/assets/team/executives/quoteBg.svg";

const photos = [team1, team2, team3];

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/team"
  }
};

const Team = ({ setBurgerOpen }) => {
  return (
    <section className=" ">
      <div className="scrollbar-none bg-black">
        <HeroSection />
        <Values />
        <ValuesMobile />

        <div className="overflow-hidden">

        <div className="mx-5 mb-[60px] mt-14 flex flex-col gap-4  overflow-visible xl:mx-24 xl:mt-28">
          <Tag
            className={"mb-[16px] max-w-[166px] text-center sm:max-w-[200px]"}
            title={"founded and run by"}
          />
          <div className="flex flex-col justify-between xl:flex-row">
            <div className="flex max-w-[370px] flex-col items-start justify-start gap-4 pb-7 xl:pb-28 ">
              <h3 className="text-4xl uppercase xl:text-7xl">
                Mykhailo Adzhoiev
              </h3>
            </div>
            <div className="max-w-[781px] text-secondary">
              <p className="mb-5 text-secondary">
                Mykhailo Adzhoiev is a blockchain entrepreneur and crypto
                enthusiast with 9+ years of IT industry experience as a senior
                developer, team leader, and CTO. After years of working in
                traditional Web2 development, Mykhailo realized that he’s “been
                there, seen that, done that.” So once he got involved in a Web3
                project, he saw the potential for innovation in this industry
                that was missing in Web2 and suddenly knew he wanted to become a
                part of it.
              </p>
              <p className="text-secondary">
                After 3 unsuccessful attempts to create a team of passionate
                Web3 devotees, Mykhailo’s 4th time was a charm. That’s how
                Cowchain was created.
              </p>
              <div className=" mt-[16px] flex items-center  justify-start  gap-x-4 xl:mt-4 ">
                <a
                  href="https://www.linkedin.com/company/cowchain/"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="linkedin"
                    className="w-12 lg:w-16"
                    src={linkedin}
                  ></Image>
                </a>
                <a
                  href="https://t.me/cowchain_team"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image
                    alt="telegram"
                    className="w-12 lg:w-16"
                    src={telegram}
                  ></Image>
                </a>
                <a
                  href="mailto:sales@cowchain.io"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image alt="mail" className="w-12 lg:w-16" src={mail}></Image>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="relative mb-16 mt-[55px] h-[286px] overflow-visible md:mt-[94px] lg:h-[492px]">
            <div className="absolute left-0 right-[-20px] overflow-hidden md:right-0">
              <div className="flex max-w-[100%] items-start justify-start gap-2 overflow-x-scroll md:items-center md:justify-center md:overflow-auto md:overflow-hidden lg:max-w-full">
                {photos.map((imgSrc, index) => (
                  <Image
                    src={imgSrc}
                    className="h-auto w-[90%] max-w-[590px] md:w-[100%] lg:w-[100%]"
                    alt=""
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div> */}

          {/* <div className="mb-16 mt-9 flex max-w-[110%] items-start  justify-start gap-2 overflow-x-scroll md:mt-0 md:items-center md:overflow-auto   lg:max-w-full 3xl:justify-center">
            {photos.map((imgSrc, index) => (
              <Image
                src={imgSrc}
                className="h-[286px] w-[300px] lg:h-[492px] lg:w-[516px]"
                alt=""
                key={index}
              />
            ))}
          </div> */}
        </div>

       
          <div className="relative flex flex-col items-center justify-center border-b border-t border-b-th-fade border-t-th-fade pt-[39px] text-center md:justify-between md:pb-0 lg:flex-row lg:pl-24 lg:text-left  xl:mt-24">
            <Image
              src={quote}
              className="absolute left-[80px] top-[120px] block hidden h-[104px] w-auto lg:block xl:left-[80px] xl:top-[50px] xl:h-[154px] xl:w-[194px]"
              alt=""
            />

            <div className="mb-[27px] mt-[20px]">
              <h3 className="relative z-[1] mb-10 max-w-[819px] px-[20px] text-[24px] font-light uppercase leading-[28px] lg:px-0 xl:text-[32px] xl:leading-[42px]">
                “I think Web3 is amazing because, in this industry, everything
                doesn’t revolve merely around the product and its idea. In Web3,
                most solutions are community-centric. If you have a brilliant
                idea and manage to find like-minded people who also believe in
                it, then you’re almost destined for success.”
              </h3>
              <span className="mb-[60px] text-center text-white md:mb-0">
                Mykhailo Adzhoiev, CEO of Cowchain
              </span>
            </div>

            <Image
              src={michaelMicImg}
              className="relative z-[1] h-[323px] w-[305px] self-end lg:h-[499px] lg:w-[442px]"
              alt=""
            />

            <Image
              src={quoteBg}
              className="xl:min-h-auto pointer-events-none xl:min-w-auto absolute bottom-[-450px] right-[-300px] lg:bottom-[-550px] lg:right-[-600px] z-[0] min-h-[1500px] min-w-[1000px]"
              alt=""
            />
          </div>
          <TeamGallery />
          <TeamContact />
        </div>
      </div>
    </section>
  );
};

export default Team;
