import React from "react";
import phones from "assets/products/phones-desktop.png";

const products = [
  {
    name: "Full-fledged blockchain ecosystems",
    photo: phones
  },
  {
    name: "All kinds of dApps (decentralized applications)",
    photo: phones
  },
  {
    name: "Crypto exchanges, including DEXes with staking, lending/borrowing, farming features",
    photo: phones
  },
  {
    name: "Crypto wallets with fiat payment processing",
    photo: phones
  },
  {
    name: "Cross-chain and multichain bridges",
    photo: phones
  },
  {
    name: "NFT marketplaces",
    photo: phones
  },
  {
    name: "Play-to-earn, move-to-earn, and similar GameFi systems",
    photo: phones
  },
  {
    name: "AI products",
    photo: phones
  },
  {
    name: ""
  }
];

const ProductCard = ({ name, photo }) => {
  return (
    <div className="team_card_wrapper relative flex flex-col items-start justify-start border-b border-r border-b-th-fade border-r-th-fade ">
      <span className=" justify-start px-3 py-8 text-left text-base uppercase text-white lg:px-16 lg:pb-48 lg:pt-20 lg:font-roc lg:text-xl">
        {name}
      </span>
      <div className="team_card_overlay absolute left-0 top-0 flex h-full w-full">
        <div
          className="flex h-full w-full bg-cover bg-center bg-no-repeat p-8"
          style={{ backgroundImage: `url(${photo})` }}
        />
      </div>
    </div>
  );
};

export const Products = () => {
  return (
    <section id="products" className="relative border-t border-t-th-fade">
      <div className="glid-cols-1 relative grid  md:grid-cols-3">
        {products.map((member, index) => (
          <ProductCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};
