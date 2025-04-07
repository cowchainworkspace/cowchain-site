"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} from "@chakra-ui/react";
import React from "react";

import { cn } from "@/lib/utils";
import TopArrowSvg from "../../../../../../../public/svgIcons/TopArrowSvg";

const AgntOverviewItems = ({ items }) => {
  return (
    <div className=" w-full">
      <Accordion
        allowMultiple={true}
        defaultIndex={Array.from({ length: items.length }, (_, i) => i)}
      >
        {items.map(({ itemName, id, itemValue }) => (
          <AccordionItem
            className="border-b-[0.5px] border-white-50 py-[18px] first:pt-0"
            key={id}
          >
            {({ isExpanded }) => (
              <div>
                <AccordionButton
                  className={cn(
                    "flex items-center justify-between",
                    isExpanded && "mb-5"
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
                  <ul className="flex flex-col gap-[14px]">
                    {itemValue.map((item) => {
                      if (typeof item === "string") {
                        return (
                          <p
                            key={item}
                            className="font-manrope text-[18.41px] font-medium leading-[27.62px] !text-white"
                          >
                            {item}
                          </p>
                        );
                      }
                      return (
                        <li key={item}>
                          <h4 className="mb-[6px] font-manrope text-xl normal-case leading-[30px] text-white">
                            {item.itemTitle}
                          </h4>
                          <p className="font-manrope text-sm font-medium leading-6 !text-white-70">
                            {item.itemValueDescription}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionPanel>
              </div>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AgntOverviewItems;
