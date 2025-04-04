"use client";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel
} from "@chakra-ui/react";
import React from "react";
import TopArrowSvg from "../../../../../../public/svgIcons/TopArrowSvg";

const OverviewItems = ({ overviewItems }) => {
  return (
    <div className=" w-full">
      <Accordion
        allowMultiple={true}
        defaultIndex={Array.from({ length: overviewItems.length }, (_, i) => i)}
      >
        {overviewItems.map(({ itemName, id, itemValue }) => (
          <AccordionItem
            className="border-b-[0.5px] border-white-50 py-5 first:pt-0"
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
                  <span className="font-manrope text-xs uppercase leading-5 tracking-[2px] text-secondary">
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
                    <p className="font-manrope text-xl font-normal leading-[30px] !text-white">
                      {itemValue}
                    </p>
                  ) : (
                    <div className="flex flex-col gap-[14px]">
                      {itemValue.map(
                        ({ itemValueTitle, itemValueDescription }) => (
                          <div key={itemValueTitle}>
                            <h4 className="mb-[6px] font-manrope text-xl normal-case leading-[30px] text-white">
                              {itemValueTitle}
                            </h4>
                            <p className="font-manrope text-sm font-medium leading-6 !text-white-70">
                              {itemValueDescription}
                            </p>
                          </div>
                        )
                      )}
                    </div>
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

export default OverviewItems;
