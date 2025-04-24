import bg from "@/assets/bg/clients_feedback.png";
import star from "@/assets/clients/reate-star.svg";
import clutch from "@/assets/homepage/clutch.svg";
import topRated from "@/assets/homepage/topRatedIcon.svg";
import upwork from "@/assets/homepage/upwork.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const feedbackData = [
  {
    text: '"Cowchain completed the platform on time and within budget. They completed a detailed technical research phase, created a state-of-the-art web3 infrastructure, and helped develop and deploy the platform efficiently. Moreover, their clear communication and innovative solutions impressed the client."',
    author: "Davyd Koriahin, Co-CEO, Retro Bridge"
  },
  {
    text: '"The app is currently in beta testing, and the client has seen good traction. Cowchain leads proactive project management; they deliver on time and communicate regularly through Telegram. Moreover, the team&#39;s invaluable experience has ensured deliverables with exceptional quality."',
    author: "Antoine Marsan, CEO & Founder, CoinClub Inc."
  },
  {
    text: '"Cowchain delivered all tasks on time and produced quality work. All requirements were reviewed and fulfilled according to expectations. The team’s communication was smooth and transparent. Their resources had in-depth knowledge of blockchain technology, allowing them to deliver great solutions."',
    author: "Jean Firmin, Company Head, The Firm Syntex"
  },
  {
    text: '"Cowchain delivered a quality application and met the client’s expectations. The team provided timely reports, regular updates, and responsive communication. Moreover, they offered valuable insights on improving UX and business operations."',
    author: "Manager, LEAFIO, Iryna Kravchenko"
  },
  {
    text: '"Cowchain delivered a quality application and impressed the client with their regular updates and speedy task completion. The team provided timely reporting, seamless communication, and responsive customer service. They also offered valuable insights on user experience and the business side"',
    author: "Anna Korobkyna, Business Development Manager, Protectimus Limited"
  },
  {
    text: '"Cowchain successfully delivered a Telegram app with smooth DEX Screener and Claimr API integrations, boosting user engagement and acquisition. The team was open to discussions and communicated excellently via virtual meetings. They were also able to integrate complex systems quickly."',
    author: "Tanya Chumachenko, COO, Primex Finance"
  },
  {
    text: '"Thanks to Cowchain’s work, the client was able to complete their ecosystem and full flow cycle. The team was meticulous and efficient in their project management; they delivered on time and beyond expectations. Overall, they stood out for their high level of expertise and professionalism."',
    author: "Artem Poliakoff, CEO, Biometric technologies"
  }
];

const Quote = ({ text, author, index }) => {
  return (
    <article className="px-default relative  flex w-full min-w-[320px] flex-col border-r border-t border-r-th-fade border-t-th-fade py-10 md:overflow-visible md:border-r-0 md:border-t-0 md:py-16 lg:py-20">
      {index !== feedbackData.length - 1 && (
        <div className="absolute bottom-0 left-0 hidden h-[1px] w-[calc(100vw)] md:block md:border-b md:border-b-th-fade " />
      )}

      <p className="header max-w-2xl !font-normal !leading-none !no-underline">
        {text}
      </p>
      <div className="mt-8">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            {[0, 1, 2, 3, 4].map((n, index) => (
              <Image key={index} className="w-4" src={star} alt=""></Image>
            ))}
          </div>
          <p className="markup mt-1 !font-normal text-white">5.0</p>
        </div>
        <p className="caption mt-4">{author}</p>
      </div>
    </article>
  );
};

export const Feedback = ({
  nobg = false,
  data = feedbackData,
  title = (
    <>
      {" "}
      What our
      <br />
      Clients say
    </>
  ),
  desc = (
    <>
      {" "}
      Clients have praised our work, citing our deep expertise in NFT
      development and blockchain technology. We focus on delivering innovative
      solutions that meet the unique needs of each project
    </>
  ),
  imageClasses = ""
}) => {
  return (
    <section
      id="clients-feedback"
      className={
        "relative w-full justify-center border-b border-t border-b-th-fade border-t-th-fade md:flex md:w-full"
      }
    >
      <div className="grid w-full grid-cols-1 md:flex md:justify-center">
        <div className="md:flex md:[width:calc(100%-271px)]">
          <div className="md-border-r box-border flex md:col-span-2 md:ml-auto md:max-w-[576px] ">
            {!nobg && (
              <Image
                className={cn(
                  "pointer-events-none absolute -top-[40%] left-0 md:-left-[10vw] md:-top-[25vw] md:h-1/2 md:h-auto md:w-[50vw]",
                  imageClasses
                )}
                src={bg}
                aria-hidden="true"
                role="presentation"
                alt=""
              />
            )}

            <div className="h-[1px]" />
            <div className="mx-default my-heading sticky bottom-[12vh] w-full self-end lg:ml-[88px] lg:mt-[121px] xl:mx-[88px]">
              <h3 className="uppercase text-white lg:text-[42px] custom1430:text-[60px]">
                {title}
              </h3>
              <p className=" mt-[30px] max-w-[592px] text-base leading-6 text-[#BBBBBB]">
                {desc}
              </p>
              <div className="mt-10 flex flex-col gap-y-4 md:mt-16 lg:mt-24 xl:mt-36">
                <div className="flex items-center gap-x-[28px]">
                  <a
                    href="https://clutch.co/profile/cowchain"
                    rel="nofollow noreferrer"
                    target="_blank"
                  >
                    <Image className="w-12 md:w-16" src={clutch} alt="" />
                  </a>
                  <div>
                    <div className="flex items-center gap-x-4">
                      <p className="markup mt-1 text-white">5.0</p>
                      <div className="flex items-center gap-x-1">
                        {[0, 1, 2, 3, 4].map((n, index) => (
                          <Image
                            key={index}
                            className="w-4"
                            src={star}
                            alt=""
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-6">
                  <a
                    href="https://www.upwork.com/ag/cowchain/"
                    rel="nofollow noreferrer"
                    target="_blank"
                  >
                    <Image className="w-12 md:w-16" src={upwork} alt="" />
                  </a>
                  <div className="flex items-center gap-[8px]">
                    <Image className="w-[35px]" src={topRated} alt="" />
                    <p className="markup mt-1 text-[16px] text-white">
                      Top Rated Plus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:overflow-hidden md:[width:calc(100%+329px)]">
          <div className="md:col-span-3  md:mr-auto">
            <div className="quote_wrapper flex items-stretch overflow-x-scroll border-b border-b-th-fade  md:max-w-[864px] md:flex-col md:overflow-x-visible md:overflow-y-visible">
              {data &&
                data.map((feedback, index) => (
                  <Quote key={index} {...feedback} index={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
