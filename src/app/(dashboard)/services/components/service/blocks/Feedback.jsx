import bg from "@/assets/bg/clients_feedback.png";
import star from "@/assets/clients/reate-star.svg";
import clutch from "@/assets/homepage/clutch.svg";
import topRated from "@/assets/homepage/topRatedIcon.svg";
import upwork from "@/assets/homepage/upwork.svg";
import Image from "next/image";
import React from "react";

const feedbackData = [
  {
    text: '"The company most impressive trait was their innovative integration of web3 technology, which set them apart."',
    author: "Davyd Koriahin, Co-CEO, Retro Bridge"
  },
  {
    text: '"Their adeptness in navigating blockchain issues and clear communication made our collaboration productive and seamless."',
    author: "Artem Poliakoff, CEO,  Biometric technologies"
  },
  {
    text: '"They exhibit a proactive approach and showcase remarkable talent as developers."',
    author: "Antoine Marsan, CEO & Founder, Marsan Exchange Inc."
  },
  {
    text: '"The project manager was always in touch and answered all questions."',
    author: "Vlafymyr Dovzhuk PO, Web3 Development Company"
  },
  {
    text: '"They delivered a ready-to-go ecosystem and app that worked perfectly with all our requests."',
    author: "COO, Crypto App Provider"
  },
  {
    text: '"We were impressed with their extensive experience in blockchain development."',
    author: "CEO, Mobile Gaming Company"
  },
  {
    text: '"Cowchain is a great team. They have extensive experience in developing blockchain projects. Good communication and responsibility. I am very excited to work with them on future projects. I definitely recommend them for cooperation."',
    author: "CEO, Crypto project development"
  }
];

const Quote = ({ text, author, index }) => {
  return (
    <article className="px-default relative   flex w-full min-w-[320px] flex-col border-r border-t border-r-th-fade border-t-th-fade py-10 md:overflow-visible md:border-r-0 md:border-t-0 md:py-16 lg:py-20">
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

export const Feedback = ({ nobg = false }) => {
  return (
    <section
      id="clients-feedback"
      className={
        "relative w-full justify-center border-b border-t border-b-th-fade border-t-th-fade md:flex md:w-full"
      }
    >
      <div className="grid w-full grid-cols-1 md:flex md:justify-center">
        <div className="md:calc-full-minus-271 md:flex">
          <div className="md-border-r box-border flex md:col-span-2 md:ml-auto md:max-w-[576px] ">
            <Image
              className={
                "pointer-events-none absolute -top-[40%] left-0 hidden md:-left-[10vw] md:-top-[25vw] md:block md:h-1/2 md:h-auto md:w-[50vw]"
              }
              src={bg}
              aria-hidden="true"
              role="presentation"
              alt=""
            />
            <div className="h-[1px]" />
            <div className="mx-default my-heading sticky bottom-[30vh] w-full self-end lg:ml-[88px] lg:mt-[121px]">
              <h3 className="uppercase !leading-none text-white">
                What our
                <br />
                Clients say
              </h3>
              <p className=" mt-[30px] max-w-[592px] text-base leading-6 text-[#BBBBBB]">
                Clients have praised our work, citing our deep expertise in NFT
                development and blockchain technology. We focus on delivering
                innovative solutions that meet the unique needs of each project
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
        <div className="md:calc-full-plus-329 md:overflow-hidden ">
          <div className="md:col-span-3  md:mr-auto">
            <div className="quote_wrapper flex items-stretch overflow-x-scroll border-b border-b-th-fade  md:max-w-[864px] md:flex-col md:overflow-x-visible md:overflow-y-visible">
              {feedbackData &&
                feedbackData.map((feedback, index) => (
                  <Quote key={index} {...feedback} index={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
