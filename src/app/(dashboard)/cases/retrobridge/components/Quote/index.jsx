import Image from "next/image";
import React from "react";

const Quote = () => {
  return (
    <section className="hidden pt-[203px] xl:block">
      <div className="relative mx-auto flex max-w-[839px] flex-col items-center gap-10">
        <blockquote className="text-center font-roc text-4xl uppercase leading-[42px] text-white">
          “As the founder of RetroBridge, I am immensely proud of the incredible
          work Cowchain development team has put into bringing this vision to
          life. Their dedication, passion, and expertise have truly made
          RetroBridge a game-changer in the world of crypto bridges”
        </blockquote>
        <p className="font-manrope text-base leading-6 text-white">
          Mykhailo Adzhoiev, Co-founder of RetroBridge
        </p>
        <Image
          width={120}
          height={166}
          src={"/cases/RetroBridge/retrobridge-icon.png"}
          className="absolute -right-[120px] -top-[83px] h-[166px] w-30"
          loading="lazy"
          priority={false}
        />
      </div>
    </section>
  );
};

export default Quote;
