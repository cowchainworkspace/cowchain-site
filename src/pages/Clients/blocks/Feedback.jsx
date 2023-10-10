import React from "react";
import clutch from "../../../assets/homepage/clutch.svg";
import upwork from "../../../assets/homepage/upwork.svg";
import star from "../../../assets/clients/reate-star.svg";
import upwork_star from "../../../assets/clients/upwork_rate.svg";

const Feedback = () => {
  return (
    <section id="clients-feedback">
      <div className="relative grid grid-cols-1">
        <div className="border-b border-b-th-fade py-heading px-default md-border-r">
          <h3 className="text-white !leading-none">
            YOU CAN<br></br>TRUST US
          </h3>
          <div className="flex flex-col gap-y-4 mt-10">
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
                      <img key={index} className="w-4" src={star} alt=""></img>
                    ))}
                  </div>
                </div>
                <p className="text-white mt-[2px]">Based on 20 Clutch reviews</p>
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
    </section>
  );
};

export default Feedback;
