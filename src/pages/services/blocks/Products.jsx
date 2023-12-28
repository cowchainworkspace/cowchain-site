import React from "react";
import marsan from "assets/cases/marsan.png";
import eva from "assets/cases/eva.png";
import retrobridge from "assets/cases/retrobridge.png";
import step from "assets/cases/step.png";
import finance from "assets/cases/finance.png";
import { Link } from "react-router-dom";
const products = [
  {
    name: "Crypto exchanges",
    photo: finance,
    link: "/cases/finance"
  },
  {
    name: "NFT marketplace",
    photo: step,
    link: "/cases/step"
  },
  {
    name: "Crypto wallets with fiat payment processing",
    photo: marsan,
    link: "/cases/payment"
  },
  {
    name: "Play-to-earn, Move-to-earn",
    photo: step,
    link: "/cases/step"
  },
  {
    name: "Cross chain and multichain briges",
    photo: retrobridge,
    link: "/cases/retrobridge"
  },
  {
    name: "AI products",
    photo: eva,
    link: "/cases/wallet"
  }
];

const ProductCard = ({ name, photo, link }) => {
  return (
    <Link
      to={link}
      className="team_card_wrapper relative flex  h-[112px] flex-col items-start justify-center border-b border-b-th-fade border-r-th-fade md:h-full md:border-r "
    >
      <span className="justify-center px-3 py-8 text-left text-base uppercase text-white lg:px-16 lg:pb-48 lg:pt-20 lg:font-roc lg:text-xl">
        {name}
      </span>
      <div className="team_card_overlay absolute left-0 top-0 flex h-full w-full">
        <div
          className="flex h-full w-full bg-cover bg-top bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo})` }}
        />
      </div>
    </Link>
  );
};

export const Products = () => {
  return (
    <section
      id="products"
      className="relative border-t border-b-th-fade border-t-th-fade"
    >
      <div className="glid-cols-1 relative grid  md:grid-cols-3">
        {products.map((member, index) => (
          <ProductCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};
