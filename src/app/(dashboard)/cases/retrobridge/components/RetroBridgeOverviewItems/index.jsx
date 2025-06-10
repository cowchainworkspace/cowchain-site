"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} from "@chakra-ui/react";
import React from "react";
import TopArrowSvg from "../../../../../../../public/svgIcons/TopArrowSvg";

import { cn } from "@/lib/utils";
const RetroBridgeOverviewItems = ({ items }) => {
  return (
    <div className=" w-full">
      <Accordion
        allowMultiple={true}
        defaultIndex={Array.from({ length: items.length }, (_, i) => i)}
      >
        {items.map(({ itemName, id, itemValue, itemDesc }, index) => (
          <AccordionItem
            className="border-b-[0.5px] border-white-50 px-4 py-[22px] first:pt-0 md:px-0 "
            key={id}
          >
            {({ isExpanded }) => (
              <div>
                <AccordionButton
                  className={cn(
                    "flex items-center justify-between",
                    isExpanded && "mb-[14px]"
                  )}
                >
                  <span
                    className={cn(
                      "font-manrope text-xs uppercase leading-5 tracking-[2px] text-secondary"
                    )}
                  >
                    {itemName}
                  </span>
                  <div
                    className={cn(
                      "flex -rotate-180 items-center justify-center transition-transform duration-300",
                      isExpanded && "rotate-0"
                    )}
                  >
                    <TopArrowSvg />
                  </div>
                </AccordionButton>
                <AccordionPanel>
                  {itemDesc && (
                    <p className="mb-4 hidden font-manrope text-xl font-medium leading-[30px] !text-white xl:block">
                      {itemDesc}
                    </p>
                  )}
                  {typeof itemValue === "string" ? (
                    <p className="font-manrope text-sm font-normal leading-6 !text-white xl:text-xl xl:font-medium xl:leading-[30px]">
                      {itemValue}
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-[14px]">
                      {itemValue.map(({ desc }) => (
                        <li key={desc}>
                          <p className="font-manrope  text-sm font-normal leading-6 !text-white xl:text-xl xl:font-medium xl:leading-[30px]">
                            {desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionPanel>
              </div>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default RetroBridgeOverviewItems;
