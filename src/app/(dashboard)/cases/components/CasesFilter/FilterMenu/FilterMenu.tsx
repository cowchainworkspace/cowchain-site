// FilterMenu.tsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { EmptyMark } from "../../../../../../assets/svgComponents/caseFilter/EmptyMark";
import { CheckedMark } from "../../../../../../assets/svgComponents/caseFilter/CheckedMark";
import { OpenedCircle } from "../../../../../../assets/svgComponents/caseFilter/OpenedCircle";

const filtersData = [
  {
    category: "Web Development",
    subcategories: [
      "GameFi",
      "Trading",
      "Crypto Wallet",
      "DEX",
      "DeFi",
      "Bridge",
      "NFT",
      "Staking"
    ]
  },
  {
    category: "Mobile App",
    subcategories: ["GameFi", "Trading", "Crypto Wallet"]
  },
  {
    category: "AI Development",
    subcategories: ["AI Development"]
  },
  {
    category: "Telegram Mini-Apps",
    subcategories: ["Telegram Mini-Apps"]
  },
  {
    category: "Blockchain Development",
    subcategories: ["Blockchain Development"]
  }
];

export const FilterMenu = ({ setIsFilterOpen, setTag }) => {
  const isDark = true;

  // State to track selected subcategories
  const [selectedSubcategories, setSelectedSubcategories] = useState({});

  const toggleAllInCategory = (category, subcategories) => {
    setSelectedSubcategories((prev) => {
      const allSelected = prev[category]?.length === subcategories.length;

      return {
        ...prev,
        [category]: allSelected ? [] : [...subcategories]
      };
    });
  };

  const toggleSubcategory = (category, sub) => {
      setSelectedSubcategories((prev) => {
        const current = prev[category] || [];
        const isSelected = current.includes(sub);
        const updated = isSelected
          ? current.filter((item) => item !== sub)
          : [...current, sub];
          setTag(sub)
        return {
          ...prev,
          [category]: updated
        };
      });
  };

  return (
    <Box
      bg={isDark ? "black" : "white"}
      color={isDark ? "white" : "black"}
      borderRadius="md"
      className="sm:min-h-auto fixed inset-0 z-[30] min-h-full w-full overflow-y-scroll border border-white !px-[20px] !py-[40px] sm:absolute sm:inset-auto sm:right-0 sm:top-[60px] sm:w-auto "
    >
      <div className="flex w-full items-center justify-between">
        {" "}
        <Text
          className="pl-[30px] pr-[22px] text-[20px] font-[500] uppercase leading-[90%]"
          fontSize="xl"
          fontWeight="bold"
          mb={4}
        >
          All Filters
        </Text>
        <div className="cursor-pointer" onClick={() => setIsFilterOpen(false)}>
          <OpenedCircle />
        </div>
      </div>

      <Accordion
        className="mb-[33px] mt-[45px]  pl-[30px] pr-[22px]"
        allowMultiple
        index={filtersData.map((_, i) => i)}
      >
        {filtersData.map((filter, index) => (
          <AccordionItem key={filter.category} border="none">
            <AccordionButton
            //   onClick={(e) => e.stopPropagation()}
              className="mb-[26px] flex min-w-[284px] items-center gap-[24px] text-[16px] font-[500] uppercase leading-[90%]"
              px={0}
              py={2}
            >
              {filter.subcategories.every((sub) =>
                selectedSubcategories[filter.category]?.includes(sub)
              ) ? (
                <EmptyMark
                  onClick={(e) => {
                    e.stopPropagation();
                    if (index > 1) {
                      toggleSubcategory(filter.category, filter.category);
                      return;
                    }
                    toggleAllInCategory(filter.category, filter.subcategories);
                  }}
                />
              ) : (
                <CheckedMark
                  onClick={(e) => {
                    e.stopPropagation();
                    if (index > 1) {
                      toggleSubcategory(filter.category, filter.category);
                      return;
                    }
                    toggleAllInCategory(filter.category, filter.subcategories);
                  }}
                />
              )}

              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight="bold"
                color="white"
              >
                {filter.category}
              </Box>
            </AccordionButton>

            <AccordionPanel pb={4} px={0}>
              {index < 2 &&
                filter.subcategories.map((sub) => (
                  <Box
                    key={sub}
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    mb={2}
                    px={2}
                    py={1}
                    className="!mb-[26px] ml-[40px] flex items-center gap-[24px] text-[16px] font-[400] uppercase leading-[90%]"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubcategory(filter.category, sub);
                    }}
                  >
                    {selectedSubcategories[filter.category]?.includes(sub) ? (
                      <EmptyMark />
                    ) : (
                      <CheckedMark />
                    )}
                    <Text className="!text-white">{sub}</Text>
                  </Box>
                ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex w-full flex-col items-center">
        {" "}
        <Button
          mt={6}
          w="full"
          colorScheme="whiteAlpha"
          className="h-[50px]  w-full"
          bg="white"
          color="black"
          fontWeight="bold"
          _hover={{ opacity: 0.85 }}
          onClick={() => console.log("Selected:", selectedSubcategories)}
        >
          APPLY FILTERS
        </Button>
        <Button
          mt={6}
          w="full"
          colorScheme="whiteAlpha"
          className="!mt-[24px] w-full cursor-pointer text-[14px] leading-[90%]"
          color="white"
          fontWeight="bold"
          _hover={{ opacity: 0.85 }}
          onClick={() => console.log("Selected:", selectedSubcategories)}
        >
          RESET {`(${2})`}
        </Button>
      </div>
    </Box>
  );
};
