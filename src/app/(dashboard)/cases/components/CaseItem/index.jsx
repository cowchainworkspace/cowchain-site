import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
        className="group relative flex w-[calc(100vw-6px)] overflow-hidden "
        whileHover="hover"
        initial="initial"
        animate="initial"
      >
        <Image
          src={caseImage.src}
          alt="case"
          className="hidden h-auto w-[100vw] sm:block"
          width={1440}
          height={560}
        />

        <Image
          src={caseMobileImage.src}
          alt="case"
          className="block h-auto w-[100vw]  sm:hidden"
          width={1500}
          height={2008}
        />

        <motion.div
          className="pointer-events-none absolute inset-0 z-10 hidden bg-case-gradient sm:block"
          variants={{
            initial: { opacity: 0, scale: 1 },
            hover: { opacity: 1, scale: 1.03 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        <motion.div
          className={`absolute bottom-[20px] left-[50px] z-20 hidden w-full sm:block lg:bottom-[50px] lg:left-[70px]`}
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
