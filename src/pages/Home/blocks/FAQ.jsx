import React from "react";
import Faq from "react-faq-component";
import faq_exp from "../../../assets/homepage/faq_exp.svg";
import faq_col from "../../../assets/homepage/faq_col.svg";

const faqData = [
  {
    title:
      "What is Web3 development, and how is it different from traditional web development?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards.",
  },
  {
    title:
      "What measures are taken to ensure the security of Web3 applications?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards.",
  },
  {
    title: "How can I monetize my Web3 application?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards.",
  },
  {
    title: "What are the benefits of using Web3 applications for my business?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards.",
  },
  {
    title:
      "How can a Web3 development agency help my business implement blockchain technology effectively?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards.",
  },
];

const getTitle = (index) => {
  return (
    <div className="px-4 py-4">
      <h2 className="">{faqData[index]?.title}</h2>
    </div>
  );
};

const getContent = (index) => {
  return (
    <div className="px-4 py-6">
      <p className="body text-th-grey">{faqData[index]?.content}</p>
    </div>
  );
};

const faqRows = {
  title: "",
  rows: [
    {
      title: getTitle(0),
      content: getContent(0),
    },
    {
      title: getTitle(1),
      content: getContent(1),
    },
    {
      title: getTitle(2),
      content: getContent(2),
    },
    {
      title: getTitle(3),
      content: getContent(3),
    },
    {
      title: getTitle(4),
      content: getContent(4),
    },
  ],
};

const faqConfig = {
  animate: true,
  openOnload: 0,
  expandIcon: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="15.75"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="0.5"
      />
      <path
        d="M16 12.2666V19.7333"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2656 16H19.7323"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  collapseIcon: (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="white" />
      <path
        d="M12.2656 16H19.7323"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const faqStyles = {
  bgColor: "#000000",
  titleTextColor: "white",
  titleTextSize: "16px",
  rowTitleColor: "blue",
  rowContentTextSize: "16px",
  rowContentPaddingTop: "0px",
  rowContentPaddingBottom: "0px",
  rowContentPaddingLeft: "0px",
  rowContentPaddingRight: "0px",
  arrowColor: "none",
  transitionDuration: "0.3s",
  timingFunc: "ease",
};

const FAQ = () => {
  return (
    <section id="faq" className="relative">
      <div className="relative grid grid-cols-1">
        <div className="border-b border-b-th-fade py-16 text-center px-4">
          <h3 className="text-center">
            FREQUENTLY<br></br>ASKED<br></br>QUESTIONS
          </h3>
        </div>
        <div>
          <Faq data={faqRows} styles={faqStyles} config={faqConfig} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
