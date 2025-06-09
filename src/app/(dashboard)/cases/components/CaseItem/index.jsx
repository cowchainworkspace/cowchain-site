import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CaseDescription } from "./blocks/CaseDescription";
import { useMediaQuery } from "@chakra-ui/react";

const CaseItem = ({ caseItem }) => {
  const {
    id,
    tags,
    caseName,
    caseDescription,
    link,
    caseImage,
    containerWidth,
    tagsWidth,
    caseMobileImage
  } = caseItem;
  const [isMoreThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Link href={link}>
      <motion.article
        className="group relative flex w-[calc(100vw-6px)] overflow-hidden "
        whileHover="hover"
        initial="initial"
        animate="initial"
      >
        <Image
          src={isMoreThan768 ? caseImage : caseMobileImage}
          alt="case"
          className="block h-auto w-[100vw] "
          width={isMoreThan768 ? 1440 : 375}
          height={isMoreThan768 ? 560 : 502}
          priority={id === 1}
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
