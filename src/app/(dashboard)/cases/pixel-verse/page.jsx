import React from "react";
import Banner from "../components/Banner";
import CaseHeroScreen from "../components/HeroScreen";
import MoreProjects from "../components/MoreProjects";
import ProjectOverview from "../components/ProjectOverview";
import TeamBehind from "../components/TeamBehind";
import PixelVerseAvatarAI from "./components/PixelVerseAvatarAI";
import PixelVerseWhatWeDid from "./components/PixelVerseWhatWeDid";
import { metadata } from "./utils/pixelVerseMetadata";
import {
  overviewItems,
  pixelVerseProjects,
  pixelVerseTags,
  pixelVerseTeam,
  pixelVerseSlides
} from "./utils/constants";
import CasesSlider from "../components/CasesSlider";
import Image from "next/image";

export { metadata };

const PixelVerse = () => {
  return (
    <section className="relative w-full">
      <CaseHeroScreen
        tags={pixelVerseTags}
        pageTitle={"PixelVerse | Cowchain"}
        heroDescription={
          "PixelVerse bridges Web2 and Web3 gaming with Telegram Mini Apps like PixelTap, achieving 45 million monthly active users (MAU). Through strategic use of Telegram’s user base, it became a leader in GameFi innovation and engagement."
        }
      />
      <Banner
        img={"/cases/PixelVerse/pixel-verse-banner.webp"}
        imgDesc={"Screenshots from PixelVerse application"}
        classes={"w-full h-[437px]"}
      />
      <ProjectOverview
        projectDescription={
          <>
            PixelVerse began as a GameFi platform with steady yet modest
            progress,
            <br className="hidden custom1430:block" /> aiming to optimize its
            ecosystem usability through blockchain innovation.
            <br className="hidden custom1430:block" /> The ecosystem faced
            challenges in breaking into larger audiences despite
            <br className="hidden custom1430:block" /> its innovative gameplay
            mechanics and the potential for applying innovative
            <br className="hidden custom1430:block" /> project solutions to
            expand its reach. The launch of PixelTap redefined this
            <br className="hidden custom1430:block" /> trajectory, allowing
            PixelVerse to tap into Telegram’s 950 million active users,
            <br className="hidden custom1430:block" />
            making its games accessible to both Web2 and Web3 players. This
            strategic
            <br className="hidden custom1430:block" /> move significantly
            boosted visibility, secured partnerships with major
            <br className="hidden custom1430:block" /> exchanges, and attracted
            investments from industry leaders.
          </>
        }
        overviewItems={overviewItems}
        projectTitle={"Project overview"}
        webSiteLink={"https://t.me/pixelverse_xyz"}
      />
      <CasesSlider
        images={pixelVerseSlides}
        decorationElement={
          <Image
            width={"933"}
            height={"251"}
            alt="decoration ellipse"
            className="absolute  h-full w-full scale-y-150"
            src={"/cases/PixelVerse/pixel-verse-ellipse.webp"}
          />
        }
        isPixelVerse={true}
      />
      <PixelVerseWhatWeDid />
      <TeamBehind team={pixelVerseTeam} />
      <MoreProjects projects={pixelVerseProjects} />
      <PixelVerseAvatarAI />
    </section>
  );
};

export default PixelVerse;
