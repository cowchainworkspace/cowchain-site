import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import ArrowDownSelect from "@/assets/icons/ArrowDownSelect";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const SelectValue = ({
  items,
  labelName,
  control,
  name,
  arialLabelledby,
  selectValue
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative z-50 flex w-full flex-col">
      <Controller
        control={control}
        name={name}
        rules={{
          required: "Please select an option",
          validate: (val) => {
            if (!val) return "Please select an option";
            if (!items.includes(val)) return "Invalid option selected";
            return true;
          }
        }}
        render={({ field }) => (
          <Select.Root
            value={field.value}
            onValueChange={field.onChange}
            aria-labelledby={arialLabelledby}
            onOpenChange={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Select.Trigger
              className={cn(
                "relative z-[100] flex flex h-[46px] items-center items-center justify-between bg-[#FFFFFF1A] pl-[34px] pr-4 font-roc text-[#9CA3AF] max-md:pl-2 max-md:pr-2",
                Boolean(selectValue) && "pl-[10px] !text-white"
              )}
            >
              <Select.Value
                placeholder={labelName}
                className="h-full w-full bg-[#FFFFFF1A] font-roc font-medium text-[#9CA3AF]"
              />
              <ArrowDownSelect
                className={cn(
                  "-mt-1 h-[10px] w-[16px] shrink-0 rotate-180 text-[#9CA3AF] transition-transform duration-300 max-md:h-[8px] max-md:w-[14px]",
                  Boolean(selectValue) && "!text-white",
                  isOpen && "rotate-0"
                )}
              />
            </Select.Trigger>

            <div className="relative z-[500] w-full">
              <Select.Content
                className="relative z-[500] mt-1 flex w-[310px] flex-col bg-[#FFFFFF1A] font-roc backdrop-blur-[60px]  max-lg:w-[282px]"
                position="popper"
              >
                <Select.Viewport className="flex max-h-40 w-full flex-col overflow-scroll">
                  <ScrollArea.Root
                    scrollHideDelay={800}
                    type="auto"
                    className="relative h-40  max-h-40 w-full"
                  >
                    <ScrollArea.Viewport className="h-full w-full">
                      {items.map((item) => (
                        <Select.Item
                          key={item}
                          value={item}
                          className={cn(
                            "w-full cursor-pointer px-4 py-2 pl-[10px] text-white outline-none transition-colors duration-150 hover:!bg-[#FFFFFF4D] active:!bg-[#FFFFFF4D]",
                            selectValue === item && "!bg-[#FFFFFF4D]"
                          )}
                        >
                          <Select.ItemText className="font-roc leading-[1] !text-white max-lg:text-sm">
                            {item}
                          </Select.ItemText>
                        </Select.Item>
                      ))}
                    </ScrollArea.Viewport>

                    <ScrollArea.Scrollbar
                      orientation="vertical"
                      className="tablet:w-1 max-md:1 flex  h-full w-1 touch-none select-none transition-colors duration-300"
                    >
                      <ScrollArea.Thumb className="relative flex-1 rounded-full bg-white/10 hover:bg-white/10" />
                    </ScrollArea.Scrollbar>
                  </ScrollArea.Root>
                </Select.Viewport>
              </Select.Content>
            </div>
          </Select.Root>
        )}
      />
    </div>
  );
};

export default SelectValue;
