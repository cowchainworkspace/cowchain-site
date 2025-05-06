import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CaseDescription } from "./blocks/CaseDescription";

const CaseItem = ({ caseItem }) => {
  const {
    tags,
    caseName,
    caseDescription,
    link,
    caseImage,
    imageHeight,
    containerWidth,
    tagsWidth,
    caseMobileImage
  } = caseItem;
  return (
    <Link href={link}>
      <motion.article
        className="group relative flex w-[100vw] overflow-hidden "
        whileHover="hover"
        initial="initial"
        animate="initial"
      >

        <Image
          src={caseImage.src}
          alt="case"
          className="h-auto hidden sm:block w-[100vw]"
          width={1440}
          height={560}
        />

        <Image
          src={caseMobileImage.src}
          alt="case"
          className="h-auto block sm:hidden  w-[100vw]"
          width={1500 }
          height={2008}
        />

        <motion.div
          className="pointer-events-none hidden sm:block absolute inset-0 z-10 bg-case-gradient"
          variants={{
            initial: { opacity: 0, scale: 1 },
            hover: { opacity: 1, scale: 1.03 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        <motion.div
          className={`absolute bottom-[20px] left-[50px] z-20 hidden w-full lg:bottom-[50px] lg:left-[70px] sm:block`}
          style={{ maxWidth: `${containerWidth}px` }}
          variants={{
            initial: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <CaseDescription
            tagsWidth={tagsWidth}
            tags={tags}
            caseName={caseName}
            caseDescription={caseDescription}
          />
        </motion.div>

        <div
          className={`absolute bottom-[22px] left-[20px] z-20 block w-full  sm:hidden`}
          style={{ maxWidth: `83%` }}
        >
          <CaseDescription
            tagsWidth={310}
            tags={tags}
            caseName={caseName}
            caseDescription={caseDescription}
          />
        </div>
      </motion.article>
    </Link>
  );
};

export default CaseItem;
