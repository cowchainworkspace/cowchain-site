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
const GBCOverviewItems = ({ items }) => {
  return (
    <div className=" w-full">
      <Accordion
        allowMultiple={true}
        defaultIndex={Array.from({ length: items.length }, (_, i) => i)}
      >
        {items.map(({ itemName, id, itemValue, itemDesc }) => (
          <AccordionItem
            className="border-b-[0.5px] border-white-50 py-[18px] first:pt-0"
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
                      "font-manrope text-[11.05px] uppercase leading-[18.41px] tracking-[1.84px] text-secondary"
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
                    <p className="mb-[5px] font-manrope text-[12.89px] font-medium leading-[22.1px] !text-white-70">
                      {itemDesc}
                    </p>
                  )}
                  {typeof itemValue === "string" ? (
                    <p className="font-manrope text-[18.41px] font-medium leading-[27.62px] !text-white">
                      {itemValue}
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-[14px]">
                      {itemValue.map(({ itemValueDescription }) => (
                        <li key={itemValueDescription}>
                          <p className="font-manrope text-[18.41px] font-normal leading-[27.62px] !text-white">
                            {itemValueDescription}
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

export default GBCOverviewItems;
