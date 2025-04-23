import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CaseItem = ({ caseItem }) => {
  const {
    tags,
    caseName,
    caseDescription,
    link,
    caseImage,
    imageHeight,
    containerWidth,
    tagsWidth
  } = caseItem;
  return (
    <Link href={link}>
      <motion.article
        className="group relative flex w-full overflow-hidden pb-[50px] pl-[70px]"
        style={{ height: `${imageHeight}px` }}
        whileHover="hover"
        initial="initial"
        animate="initial"
      >
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${caseImage.src}")` }}
        />

        <motion.div
          className="bg-case-gradient pointer-events-none absolute inset-0 z-10"
          variants={{
            initial: { opacity: 0, scale: 1 },
            hover: { opacity: 1, scale: 1.03 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        <motion.div
          className="z-20 mt-auto"
          style={{ maxWidth: `${containerWidth}px` }}
          variants={{
            initial: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ul
            className="mb-[25px] flex flex-wrap gap-2"
            style={{ maxWidth: `${tagsWidth}px` }}
          >
            {tags.map(({ tagName, isMain }) => (
              <li key={tagName}>
                <p
                  className={cn(
                    "flex h-8 items-center rounded-[18.41px] bg-white px-[15px] py-2 font-medium leading-[16.57px] text-[12.89] text-black",
                    isMain && "text-sm font-bold"
                  )}
                >
                  {tagName}
                </p>
              </li>
            ))}
          </ul>

          <h2 className="mb-6 font-montserrat text-[60px] font-semibold leading-[60px] text-white">
            {caseName}
          </h2>

          <p className="font-manrope text-sm font-[450] leading-6 text-white-70">
            {caseDescription}
          </p>
        </motion.div>
      </motion.article>
    </Link>
  );
};

export default CaseItem;
