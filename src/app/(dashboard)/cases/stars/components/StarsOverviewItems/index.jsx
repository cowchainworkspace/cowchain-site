"use client";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  useMediaQuery
} from "@chakra-ui/react";
import React from "react";
import TopArrowSvg from "../../../../../../../public/svgIcons/TopArrowSvg";

import { cn } from "@/lib/utils";
const StarsOverviewItems = ({ items }) => {
  const [isMoreThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <div className=" w-full">
      <Accordion
        allowMultiple={true}
        defaultIndex={Array.from({ length: items.length }, (_, i) => i)}
      >
        {items.map(({ itemName, id, itemValue, itemDesc }) => (
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
                  {typeof itemValue === "string" ? (
                    <p className="font-manrope text-sm font-normal leading-6 !text-white xl:text-xl xl:font-medium xl:leading-[30px]">
                      {itemValue}
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-[14px] xl:gap-[10px] ">
                      {itemValue.map(
                        ({
                          itemValueDescription,
                          itemValueTitle,
                          itemValue
                        }) =>
                          itemValue ? (
                            <li>
                              <p className="font-manrope text-sm font-normal leading-6 !text-white xl:text-xl  xl:leading-[30px]">
                                {itemValue}
                              </p>
                            </li>
                          ) : (
                            <li key={itemValueDescription}>
                              <h3 className="mb-[6px]  font-manrope text-xl leading-[30px] xl:block">
                                {itemValueTitle}
                              </h3>
                              <p className="font-manrope text-xs font-normal leading-[20px] !text-white-70 xl:text-sm xl:leading-6">
                                {itemValueDescription}
                              </p>
                            </li>
                          )
                      )}
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

export default StarsOverviewItems;
