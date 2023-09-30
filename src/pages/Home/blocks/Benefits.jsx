import React, { useState } from "react";


const benefitsData = [
  {
    title: "Transforming raw concepts into results-driven code",
    text: "If you have an idea or an existing product that you want to upgrade with Web3, we’ll suggest and develop a custom solution for your business that will bring you tangible results ",
  },
  {
    title: "Expanding business opportunities for fintech products",
    text: "If you want to integrate crypto and blockchain into your fintech product, we’ll do it in a way that’ll bring your business to its full potential",
  },
  {
    title: "Building impactful and functional Web3 products",
    text: "If you need to develop a Web3 product of any complexity, as a team who lives and breathes Web3, we’ll streamline the entire process and provide clean, secure, and scalable code ",
  },
  {
    title: "Creating a custom-tailored strategy for every product",
    text: "Our team moves in sync with the market, adapting and reacting to the changes on the go. We’re proactive to the bone and provide milestone updates regularly & promptly",
  },
  {
    title: "Taking full responsibility for the product development",
    text: "You can save yourself a headache by delegating the development process to us. Focus on other things that matter for your business while we deliver the product shaped by your vision",
  },
];

const Benefit = ({ title, text }) => {
  const [isHide, setHide] = useState(true);

  return (
    <article className="border-b border-b-th-fade px-4 py-12">
      <h2 onClick={() => setHide(!isHide)}>{title}</h2>
      {!isHide && <p className="text-th-grey mt-8">{text}</p>}
    </article>
  );
};

const Benefits = () => {
  return (
    <section id="benefits">
      <div className="grid grid-cols-1">
        <div className="flex flex-col py-16 px-4 justify-center items-center border-b border-b-th-fade">
          <p className="body3 text-center text-white uppercase">
            Being fully immersed in Web3, we’re not just devs —{" "}
            <span className="text-th-violet">we’re product visionaries</span>{" "}
            working as an in-house team{" "}
            <span className="text-th-grey">
              with you to grow your business with Web3
            </span>
          </p>
        </div>
        <div>
          {benefitsData.map((benefit, index) => (
            <Benefit title={benefit.title} text={benefit.text} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
