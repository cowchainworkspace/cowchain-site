"use client";
import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} from "@chakra-ui/react";
import TopArrowSvg from "../../../../../../../public/svgIcons/TopArrowSvg";

import { cn } from "@/lib/utils";
const RetroBridgeOverviewItems = ({ items }) => {
  return (
    <div className=" w-full">
      <Accordion allowMultiple={true}>
        {items.map(({ itemName, id, itemValue, itemDesc }, index) => (
          <AccordionItem
            className="border-b-[0.5px] border-white-50 py-8 first:pt-0"
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
                      "font-manrope text-xs uppercase leading-5 tracking-[2px] text-secondary",
                      index === 0 && "text-white"
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
                    <p className="mb-4 font-manrope text-xl font-medium leading-[30px] !text-white">
                      {itemDesc}
                    </p>
                  )}
                  {typeof itemValue === "string" ? (
                    <p className="font-manrope text-xl font-medium leading-[30px] !text-white">
                      {itemValue}
                    </p>
                  ) : (
                    <ul className="flex list-disc flex-col gap-[10px] pl-8">
                      {itemValue.map(({ desc }) => (
                        <li key={desc}>
                          <p className="list-item  pl-2 font-manrope text-xl font-medium leading-[30px] !text-white">
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
