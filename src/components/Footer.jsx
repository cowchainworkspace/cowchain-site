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
import { Link } from "react-router-dom";

const faqRows = {
  title: "",
  rows: [
    {
      title: <h2>WHAT WE DO</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <AnchorLink href="#expertise">
            <p>Services & Techonologies</p>
          </AnchorLink>
          <AnchorLink href="#projects">
            <p>Cases</p>
          </AnchorLink>
          <AnchorLink href="#clients">
            <p>Clients</p>
          </AnchorLink>
        </div>
      )
    },
    {
      title: <h2>AGENCY</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <Link to="/">
            <p>Team</p>
          </Link>
          <Link to="/">
            <p>Blog</p>
          </Link>
        </div>
      )
    },
    {
      title: <h2>HELP</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <AnchorLink href="#contact">
            <p>Contact Us</p>
          </AnchorLink>
          <a href="#" target="_blank" rel="nofollow">
            <p>Privacy Policy</p>
          </a>
          <AnchorLink href="#faq">
            <p>FAQs</p>
          </AnchorLink>
        </div>
      )
    }
  ]
};

const faqConfig = {
  animate: true,
  openOnload: false,
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
  )
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
  timingFunc: "ease"
};

const Footer = () => {
  return (
    <section id="footer" className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md-border-r py-heading px-default flex flex-col gap-y-8 border-b border-b-th-fade text-center">
          <h2 className="text-center md:text-left">What’s on your mind?</h2>
          <div className="max-w-xl">
            <p className="text-center text-[#bbb] md:text-left">
              Submit your email address and our team will get in touch with you
              within 48 hours. Or drop us a line at{" "}
            </p>
            <a href="mailto:sales@cowchain.io">
              <p className="text-white underline md:text-left">
                sales@cowchain.io
              </p>
            </a>
          </div>
          <FooterForm />
          <div className="mx-auto flex items-center justify-center gap-x-2 md:mx-0 md:justify-start">
            <a
              href="https://www.linkedin.com/company/cowchain/"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <img alt="linkedin" className="w-12 lg:w-16" src={linkedin}></img>
            </a>
            <a
              href="https://t.me/cowchain_team"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <img alt="telegram" className="w-12 lg:w-16" src={telegram}></img>
            </a>
            <a
              href="https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <img alt="twitter" className="w-12 lg:w-16" src={twitter}></img>
            </a>
            <a
              href="https://cowchain.medium.com/"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <img alt="medium" className="w-12 lg:w-16" src={medium}></img>
            </a>
            <a
              href="mailto:sales@cowchain.io"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <img alt="mail" className="w-12 lg:w-16" src={mail}></img>
            </a>
          </div>
        </div>
        <div className="py-heading px-default border-b border-b-th-fade lg:hidden">
          <Faq data={faqRows} styles={faqStyles} config={faqConfig} />
        </div>
        <div className="py-heading px-default hidden border-b border-b-th-fade lg:block">
          <div className="grid grid-cols-3 gap-x-8">
            <div className="footer-links">
              <p className="font-roc text-base font-medium !text-white">
                WHAT WE DO
              </p>
              <div className="my-8 flex flex-col gap-y-4">
                <Link to="/services">
                  <p className="text-[#bbb]">
                    Services &<br></br> Techonologies
                  </p>
                </Link>
                <Link to="/cases">
                  <p className="text-[#bbb]">Cases</p>
                </Link>
                <Link to="/clients">
                  {" "}
                  <p className="text-[#bbb]">Clients</p>
                </Link>
              </div>
            </div>
            <div className="footer-links">
              <p className="font-roc text-base font-medium !text-white">
                AGENCY
              </p>
              <div className="my-8 flex flex-col gap-y-4">
                <Link to="/team">
                  <p className="text-[#bbb]">Team</p>
                </Link>
                <Link to="/blog">
                  <p className="text-[#bbb]">Blog</p>
                </Link>
              </div>
            </div>
            <div className="footer-links">
              <p className="font-roc text-base font-medium !text-white">HELP</p>
              <div className="my-8 flex flex-col gap-y-4">
                <AnchorLink href="#contact">
                  <p className="text-[#bbb]">Contact Us</p>
                </AnchorLink>
                <a href="#" target="_blank" rel="nofollow">
                  <p className="text-[#bbb]">Privacy Policy</p>
                </a>
                <AnchorLink href="#faq">
                  <p className="text-[#bbb]">FAQs</p>
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 py-3 md:col-span-2 md:py-8">
          <a href="/">
            <img className="w-full" src={logofont} alt=""></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
