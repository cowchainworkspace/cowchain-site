import React from "react";
import CaseHeroScreen from "../components/HeroScreen";
import { pixelVerseTags } from "./utils/constants";

const PixelVerse = () => {
  return (
    <section className="">
      <CaseHeroScreen
        tags={pixelVerseTags}
        pageTitle={"PixelVerse | Cowchain"}
        heroDescription={
          "PixelVerse bridges Web2 and Web3 gaming with Telegram Mini Apps like PixelTap, achieving 45 million monthly active users (MAU). Through strategic use of Telegram’s user base, it became a leader in GameFi innovation and engagement."
        }
      />
    </section>
  );
};

export default PixelVerse;
