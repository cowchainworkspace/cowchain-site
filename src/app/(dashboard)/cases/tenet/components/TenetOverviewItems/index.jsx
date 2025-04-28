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
const TenetOverviewItems = ({ items }) => {
  return (
    <div className=" w-full">
      <Accordion
        allowMultiple={true}
        defaultIndex={Array.from({ length: items.length }, (_, i) => i)}
      >
        {items.map(({ itemName, id, itemValue, itemDesc }) => (
          <AccordionItem
            className="border-b-[0.5px] border-white-50 px-4 py-[22px] first:pt-0 md:px-0 xl:py-[22px]"
            key={id}
          >
            {({ isExpanded }) => (
              <div>
                <AccordionButton
                  className={cn(
                    "flex items-center justify-between",
                    isExpanded && "mb-4 xl:mb-5"
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
                  {typeof itemValue === "string" ? (
                    <p className="font-manrope text-sm  font-normal leading-6 !text-white xl:text-xl xl:leading-[30px]">
                      {itemValue}
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-[14px]  xl:gap-[10px] ">
                      {itemValue.map((value) => (
                        <p
                          key={value}
                          className="font-manrope text-sm font-normal leading-6 !text-white  xl:text-[20px] xl:leading-[30px]"
                        >
                          {value}
                        </p>
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

export default TenetOverviewItems;
