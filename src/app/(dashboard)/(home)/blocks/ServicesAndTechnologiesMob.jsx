import React from "react";
import { ArrowForward } from "../../../../assets/svgComponents/ArrowForward";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box
} from "@chakra-ui/react";
import { servicesBlocksData, servicesBlocksOtherData } from "../homeData/data";

export const ServicesAndTechnologiesMob = ({
  toggleMobServices,
  closeBurger
}) => {
  return (
    <div className="top-[64px] z-[300] mb-[50px] flex h-full w-full  border-b border-b-th-fade bg-black text-white lg:hidden">
      <div
        onClick={toggleMobServices}
        className="flex min-h-[374px] w-[72px] cursor-pointer items-center justify-center border-r border-r-th-fade py-[26px] text-white"
      >
        <span className="violet-gradient-text mx-[26px] -rotate-90 transform whitespace-nowrap text-[24px] font-bold uppercase tracking-wide">
          SERVICES & TECHNOLOGIES
        </span>
      </div>
      <Accordion defaultIndex={[0]} className="w-full" allowToggle>
        {servicesBlocksData.map((block, index) => (
          <AccordionItem
            key={index}
            className={`pl-[26px] ${index !== 0 && "border-t border-th-fade "}`}
          >
            <h2>
              <AccordionButton className="flex items-center justify-between py-[30px]">
                <Box as="span" className="text-sm font-bold">
                  {block.title}
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={16}>
              <ul className="space-y-[6px]">
                {block.items.map((item, itemIndex) => (
                  <li
                    onClick={closeBurger}
                    key={itemIndex}
                    className="flex items-center py-[9px] text-sm opacity-70 hover:text-purple-400"
                  >
                    <ArrowForward className="mr-2" />
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </AccordionPanel>
          </AccordionItem>
        ))}
        <AccordionItem className="border-t border-th-fade">
          <h2>
            <AccordionButton className="flex items-center justify-between py-[30px] pl-[26px]">
              <Box as="span" className="text-sm font-bold">
                OTHER
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={16}>
            <ul className="space-y-2">
              {servicesBlocksOtherData.map((item, itemIndex) => (
                <li
                  onClick={closeBurger}
                  key={itemIndex}
                  className="flex items-center  py-[9px] pl-[26px] text-sm opacity-70  hover:text-purple-400"
                >
                  <ArrowForward className="mr-2" />
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
