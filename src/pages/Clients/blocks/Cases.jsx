import React from "react";
import pic1 from "../../../assets/clients/cases/1.jpg";
import pic2 from "../../../assets/clients/cases/2.jpg";
import pic3 from "../../../assets/clients/cases/3.jpg";
import pic4 from "../../../assets/clients/cases/4.jpg";

const casesData = [
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic1,
  },
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic2,
  },
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic3,
  },
  {
    title: "Decentralized Exchange (DEX)",
    pic: pic4,
  },
];

const Cases = () => {
  return (
    <section id="clients-cases" className="relative z-10">
      <div className="cases_wrapper flex overflow-x-scroll p-2 lg:py-8 gap-x-2 md:gap-x-4 border-b border-b-th-fade">
        {casesData &&
          casesData.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${project.pic})`,
              }}
              className="flex h-64 w-full max-w-[256px] lg:h-[30vw] lg:min-w-[30vw] relative p-6 md:p-8 lg:p-10 bg-cover bg-center bg-no-repeat"
            >
              <h2 className="text-white mt-auto max-w-xs">{project.title}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Cases;
