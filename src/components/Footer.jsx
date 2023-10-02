import React from "react";
import FooterForm from "./utils/FooterForm";
import linkedin from "../assets/footer/linkedin.svg";
import telegram from "../assets/footer/telegram.svg";
import twitter from "../assets/footer/twitter.svg";
import medium from "../assets/footer/medium.svg";
import mail from "../assets/footer/mail.svg";
import Faq from "react-faq-component";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logofont from "../assets/footer/logofont.svg";

const faqRows = {
  title: "",
  rows: [
    {
      title: <h2>WHAT WE DO</h2>,
      content: (
        <div className="flex flex-col gap-y-4 mt-4 mb-8">
          <AnchorLink href="#expertise">
            <p className="text-[#bbb]">Services & Techonologies</p>
          </AnchorLink>
          <AnchorLink href="#projects">
            <p className="text-[#bbb]">Cases</p>
          </AnchorLink>
          <AnchorLink href="#clients">
            <p className="text-[#bbb]">Clients</p>
          </AnchorLink>
        </div>
      ),
    },
    {
      title: <h2>AGENCY</h2>,
      content: (
        <div className="flex flex-col gap-y-4 mt-4 mb-8">
          <AnchorLink href="#expertise">
            <p className="text-[#bbb]">Services & Techonologies</p>
          </AnchorLink>
          <AnchorLink href="#projects">
            <p className="text-[#bbb]">Cases</p>
          </AnchorLink>
          <AnchorLink href="#clients">
            <p className="text-[#bbb]">Clients</p>
          </AnchorLink>
        </div>
      ),
    },
    {
      title: <h2>HELP</h2>,
      content: (
        <div className="flex flex-col gap-y-4 mt-4 mb-8">
          <AnchorLink href="#expertise">
            <p className="text-[#bbb]">Services & Techonologies</p>
          </AnchorLink>
          <AnchorLink href="#projects">
            <p className="text-[#bbb]">Cases</p>
          </AnchorLink>
          <AnchorLink href="#clients">
            <p className="text-[#bbb]">Clients</p>
          </AnchorLink>
        </div>
      ),
    },
  ],
};

const faqConfig = {
  animate: true,
  openOnload: 0,
  expandIcon: (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L0.803848 -4.86779e-08L11.1962 -1.3313e-06L6 6Z"
        fill="white"
      />
    </svg>
  ),
  collapseIcon: (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L0.803848 -4.86779e-08L11.1962 -1.3313e-06L6 6Z"
        fill="white"
      />
    </svg>
  ),
};

const faqStyles = {
  bgColor: "#000000",
  titleTextColor: "white",
  titleTextSize: "16px",
  rowTitleColor: "white",
  rowContentTextSize: "16px",
  rowContentPaddingTop: "0px",
  rowContentPaddingBottom: "0px",
  rowContentPaddingLeft: "0px",
  rowContentPaddingRight: "0px",
  arrowColor: "none",
  transitionDuration: "0.3s",
  timingFunc: "ease",
};

const Footer = () => {
  return (
    <section id="footer" className="relative">
      <div className="grid grid-cols-1">
        <div className="border-b border-b-th-fade py-16 text-center px-4 flex flex-col gap-y-8">
          <h2 className="text-center">What’s on your mind?</h2>
          <div>
            <p className="text-[#bbb] text-center">
              Submit your email address and our team will get in touch with you
              within 48 hours. Or drop us a line at{" "}
            </p>
            <a href="mailto:sales@cowchain.io">
              <p className="text-white underline">sales@cowchain.io</p>
            </a>
          </div>

          <FooterForm />
          <div className="flex items-center justify-center gap-x-2 mx-auto">
            <a
              href="https://www.linkedin.com/company/cowchain/"
              rel="nofollow"
              target="_blank"
            >
              <img className="w-12" src={linkedin}></img>
            </a>
            <a href="https://t.me/cowchain_team" rel="nofollow" target="_blank">
              <img className="w-12" src={telegram}></img>
            </a>
            <a
              href="https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw"
              rel="nofollow"
              target="_blank"
            >
              <img className="w-12" src={twitter}></img>
            </a>
            <a href="#" rel="nofollow" target="_blank">
              <img className="w-12" src={medium}></img>
            </a>
            <a href="mailto:sales@cowchain.io" rel="nofollow" target="_blank">
              <img className="w-12" src={mail}></img>
            </a>
          </div>
        </div>
        <div className="border-b border-b-th-fade py-16 px-4">
          <Faq data={faqRows} styles={faqStyles} config={faqConfig} />
        </div>
        <div className="px-2 py-3">
          <a href="/">
            <img className="w-full" src={logofont} alt=""></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
