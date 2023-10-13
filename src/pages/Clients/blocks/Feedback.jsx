import React from "react";
import clutch from "../../../assets/homepage/clutch.svg";
import upwork from "../../../assets/homepage/upwork.svg";
import star from "../../../assets/clients/reate-star.svg";
import upwork_star from "../../../assets/clients/upwork_rate.svg";
import bg from "../../../assets/bg/clients_feedback.png";

const feedbackData = [
  {
    text: '"We were impressed with their extensive experience in blockchain development."',
    author: "CEO, Mobile Gaming Company",
  },
  {
    text: '"They exhibit a proactive approach and showcase remarkable talent as developers."',
    author: "Antoine Marsan, CEO & Founder, Marsan Exchange Inc.",
  },
  {
    text: '"The project manager was always in touch and answered all questions."',
    author: "Vlafymyr Dovzhuk \n PO, Web3 Development Company",
  },
  {
    text: '"We were impressed with their extensive experience in blockchain development."',
    author: "CEO, Mobile Gaming Company",
  },
  {
    text: '"We were impressed with their extensive experience in blockchain development."',
    author: "CEO, Mobile Gaming Company",
  },
  {
    text: '"We were impressed with their extensive experience in blockchain development."',
    author: "CEO, Mobile Gaming Company",
  },
];

const Quote = ({ text, author, index }) => {
  return (
    <article
      className={
        index === feedbackData.length - 1
          ? "relative flex flex-col px-default py-10 md:py-16 lg:py-20 border-r md:border-r-0 border-r-th-fade w-full min-w-[320px]"
          : "relative flex flex-col px-default py-10 md:py-16 lg:py-20 border-r md:border-r-0 md:border-b border-r-th-fade md:border-b-th-fade w-full min-w-[320px]"
      }
    >
      <p className="header !no-underline !leading-none !font-normal max-w-2xl">
        {text}
      </p>
      <div className="mt-8">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            {[0, 1, 2, 3, 4].map((n, index) => (
              <img key={index} className="w-4" src={star} alt=""></img>
            ))}
          </div>
          <p className="markup !font-normal text-white mt-1">5.0</p>
        </div>
        <p className="mt-4 caption">{author}</p>
      </div>
    </article>
  );
};

const Feedback = () => {
  return (
    <section id="clients-feedback">
      <div className="relative grid grid-cols-1 md:grid-cols-5 border-t border-t-th-fade">
        <div className="relative border-b border-b-th-fade flex md-border-r md:col-span-2 box-border">
          <img
            className="absolute left-0 w-full -top-[40%] md:-top-[15vw] md:-left-[20%] md:h-1/2"
            src={bg}
            alt=""
          ></img>
          <div className="h-[1px]"></div>
          <div className="sticky bottom-[30vh] self-end mx-default my-heading w-full ">
            <h3 className="text-white !leading-none">
              YOU CAN<br></br>TRUST US
            </h3>
            <div className="flex flex-col gap-y-4 mt-10 md:mt-16 lg:mt-24 xl:mt-36">
              <div className="flex items-center gap-x-[28px]">
                <a
                  href="https://clutch.co/profile/cowchain"
                  rel="nofollow"
                  target="_blank"
                >
                  <img className="w-12 md:w-16" src={clutch} alt=""></img>
                </a>
                <div>
                  <div className="flex items-center gap-x-4">
                    <p className="markup text-white mt-1">5.0</p>
                    <div className="flex items-center gap-x-1">
                      {[0, 1, 2, 3, 4].map((n, index) => (
                        <img
                          key={index}
                          className="w-4"
                          src={star}
                          alt=""
                        ></img>
                      ))}
                    </div>
                  </div>
                  <p className="text-white mt-[2px]">
                    Based on 20 Clutch reviews
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <a
                  href="https://www.upwork.com/ag/cowchain/"
                  rel="nofollow"
                  target="_blank"
                >
                  <img className="w-12 md:w-16" src={upwork} alt=""></img>
                </a>
                <div className="flex gap-x-2 items-center">
                  <img className="w-8" src={upwork_star} alt=""></img>
                  <p className="text-white">Top Rated Plus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quote_wrapper flex md:flex-col items-stretch overflow-x-scroll md:overflow-x-hidden md:overflow-y-visible border-b border-b-th-fade md:col-span-3">
          {feedbackData &&
            feedbackData.map((feedback, index) => (
              <Quote key={index} {...feedback} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
