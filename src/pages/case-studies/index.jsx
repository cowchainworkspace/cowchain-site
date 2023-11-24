import React from "react";
import { Navbar } from "components/Navbar";
import "./case-studies.css";
import { HeroSection } from "./blocks/HeroSection";
import { Footer } from "components/Footer";
import { Contact } from "components/Contact";
import Projects from "./blocks/Projects";
import marsan_mobile from "assets/case-study/marsan-mobile.png";
import marsan_mobile_black from "assets/case-study/marsan-black-mobile.png";
import { Link } from "react-router-dom";
import Chevron from "components/icons/chevron";
import { ProjectDetail } from "./components/project-detail";
import { CaseMask } from "./blocks/CaseMask";

const project_details = [
  {
    title: "Tech Stack",
    content:
      "React Native, Node.js, Solidity, ethers.js, web3.js, bitcoin.js, Persona KYC, Interac E-transfer, Chat support, email templating"
  },
  {
    title: "project duration",
    content: "5 months"
  },
  {
    title: "geography",
    content: <div>Canada</div>
  }
];

const team_details = [
  {
    title: "development",
    content: "Oleh Shutiak, Bogdan Solomakha, Nikita Chernega"
  },
  {
    title: "project management",
    content: "Viacheslav Ivchenko"
  },
  {
    title: "marketing & Seo",
    content: "Ruslan Siniaiev"
  },
  {
    title: "ui/ux design",
    content: "Nadiia Nikiforova"
  }
];

export const CaseStudies = ({ setBurgerOpen }) => {
  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Navbar isGradient={false} setBurgerOpen={setBurgerOpen} />
        <HeroSection />
        <CaseMask />
        <div className="container flex w-full flex-col items-center justify-center xl:max-w-[1300px]">
          <div className="my-20 flex flex-col justify-center gap-20 lg:my-36 lg:min-w-[440px] lg:flex-row lg:gap-36">
            <div className="flex flex-col items-center justify-center lg:min-w-[512px] lg:items-start lg:justify-start">
              <h1 className="mb-6 whitespace-nowrap text-3xl uppercase lg:mb-12  lg:text-6xl">
                project details
              </h1>
              <Link className="flex items-center gap-2">
                <span className="text-sm uppercase text-white underline lg:text-2xl">
                  visit website
                </span>
                <Chevron className="h-4 w-4 rotate-180" />
              </Link>
            </div>
            <div className="border-b-[1px] border-white/50 lg:min-w-[490px]">
              {project_details.map((detail, index) => (
                <ProjectDetail key={detail.title + index} {...detail} />
              ))}
            </div>
          </div>
          {/* <CaseStudyCarousel /> */}
          <div className="gap-18 my-10 flex flex-col items-center justify-center lg:my-16 lg:gap-36">
            <div className="w-full">
              <h3 className="mb-4 flex justify-center uppercase lg:items-start lg:justify-start">
                What we did
              </h3>
            </div>
            <div className="flex flex-col items-start justify-start gap-5  lg:flex-row ">
              <div className="w-full border-t-2  border-white/20 px-5 pt-4 lg:max-w-[600px]">
                <h3 className="text-sm uppercase text-white/20">challenge</h3>
                <span className="mb-10 text-white lg:min-w-[600px]">
                  Design & develop a fiat-to-crypto exchange mobile app with
                  seamless user experience. We had to avoid Canadian regulatory
                  complications to deploy this non-custodial app, while still
                  creating a robust solution for exchanging $CAD for BTC and ETH
                </span>
                <img
                  src={marsan_mobile}
                  className="mt-8 max-h-[260px] w-full object-cover lg:mt-14"
                  alt=""
                />
              </div>
              <div className="w-full border-t-2 border-white/20 px-5 pt-4 lg:max-w-[600px]">
                <h3 className="text-sm uppercase text-white/20">challenge</h3>
                <span className="text-white ">
                  A full-fledged app for Android and iOS for exchanging $CAD to
                  BTC & ETH with integrated Persona KYC for regulatory
                  compliance and Canadian funds transfer service Interac
                  E-transfer for seamless fiat transactions. We also created
                  convenient chat support for real-time assistance and branded
                  email templates for targeted marketing
                </span>
                <img
                  src={marsan_mobile_black}
                  className="mt-8 max-h-[260px] w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="my-20 flex  flex-col justify-center gap-20 lg:my-36  lg:flex-row lg:gap-36">
            <div className="flex flex-col items-center justify-center lg:min-w-[512px] lg:items-start lg:justify-start">
              <h1 className="mb-6 text-left text-3xl uppercase lg:mb-12 lg:text-6xl">
                team details
              </h1>
            </div>
            <div className="border-y-2 border-white/50 lg:min-w-[490px]">
              {team_details.map((detail, index) => (
                <ProjectDetail key={detail.title + index} {...detail} />
              ))}
            </div>
          </div>
        </div>

        <Projects />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};
