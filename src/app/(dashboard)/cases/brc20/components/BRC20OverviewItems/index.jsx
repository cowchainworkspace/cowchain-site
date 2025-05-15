"use client";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import TopArrowSvg from "../../../../../../../public/svgIcons/TopArrowSvg";

const BRC20OverviewItems = ({ items }) => {
  const [isMoreThan1280] = useMediaQuery("(min-width: 1280px)");
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
                  <ul className="flex flex-col gap-[14px] xl:gap-[14px] ">
                    {itemValue.map(({ itemValue }) => (
                      <li key={itemValue}>
                        <p className="font-manrope text-sm font-normal leading-6 !text-white xl:text-xl  xl:leading-[30px]">
                          {itemValue}
                        </p>
                      </li>
                    ))}
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

export default BRC20OverviewItems;
