import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";
import CasesSlider from "../components/CasesSlider";
import MoreProjects from "../components/MoreProjects";
import TeamBehind from "../components/TeamBehind";
import { relatedPixelverseProjects } from "../data";
import PixelVerseWhatWeDid from "./components/PixelVerseWhatWeDid";
import PixelverseOverview from "./components/PixelverseOverview";
import PixelVerseHeaderContainer from "./components/PixelVerseHeaderContainer";
import { getCaseSchema, setBreadcrumbSchema } from "@/lib/utils";
import {
  overviewItems,
  pixelVerseSlides,
  pixelVerseTeam
} from "./utils/constants";
import { metadata } from "./utils/pixelVerseMetadata";
import ellipseMobile from "@/assets/cases/PixelVerse/pixel-verse-ellipse-mobile.webp";
import ellipse from "@/assets/cases/PixelVerse/pixel-verse-ellipse.webp";

export { metadata };

const PixelVerse = () => {
  const breadcrumbList = setBreadcrumbSchema(
    "Cases",
    "cases",
    "Pixelverse",
    "pixel-verse"
  );
  const caseSchema = getCaseSchema("Pixelverse", "pixel-verse", metadata?.description);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      {caseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
        />
      )}
      <section className="relative w-full">
        <PixelVerseHeaderContainer />
        <PixelverseOverview
          projectDescription={
            <>
              Pixelverse began as a GameFi platform with steady yet modest
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
              Pixelverse to tap into Telegram’s 950 million active users,
              <br className="hidden custom1430:block" />
              making its games accessible to both Web2 and Web3 players. This
              strategic
              <br className="hidden custom1430:block" /> move significantly
              boosted visibility, secured partnerships with major
              <br className="hidden custom1430:block" /> exchanges, and
              attracted investments from industry leaders.
            </>
          }
          overviewItems={overviewItems}
          projectTitle={"Project overview"}
          webSiteLink={"https://www.pixelverse.xyz/"}
        />
        <CasesSlider
          images={pixelVerseSlides}
          decorationElement={
            <>
              <Image
                width={"933"}
                height={"251"}
                alt="decoration ellipse"
                className="absolute hidden h-full  w-full scale-y-150 lg:block"
                src={ellipse}
                loading="lazy"
                priority={false}
              />
              <Image
                width={"933"}
                height={"251"}
                alt="decoration ellipse"
                className="absolute h-full  w-full scale-y-150 lg:hidden"
                src={ellipseMobile}
                loading="lazy"
                priority={false}
              />
            </>
          }
          sectionClasses={" h-[186px] md:!h-[514px]"}
          isPixelVerse={true}
        />
        <PixelVerseWhatWeDid />
        <TeamBehind team={pixelVerseTeam} />
        <MoreProjects projects={relatedPixelverseProjects} />
        <Contact
          descriptionClasses={"hidden md:block"}
          titleClasses={"mb-8 md:mb-0"}
          className={"px-5 py-[50px] md:px-0 xl:pb-[163px] xl:pt-[122px]"}
        />
      </section>
    </>
  );
};

export default PixelVerse;
