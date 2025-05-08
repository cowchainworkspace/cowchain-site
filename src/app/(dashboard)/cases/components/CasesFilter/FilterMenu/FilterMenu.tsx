// FilterMenu.tsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  VStack,
  Text,
  Button,
  useColorModeValue
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
    subcategories: ["GameFi", "Trading", "Crypto Wallet"]
  },
  {
    category: "Telegram Mini-Apps",
    subcategories: ["GameFi", "Trading", "Crypto Wallet"]
  },
  {
    category: "Blockchain Development",
    subcategories: ["GameFi", "Trading", "Crypto Wallet"]
  }
];

export const FilterMenu = () => {
  const isDark = true;
  const [openIndexes, setOpenIndexes] = useState([0]);

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
      className="fixed sm:absolute min-h-full w-full sm:min-h-auto sm:w-auto overflow-y-scroll inset-0 sm:inset-auto sm:top-[60px] z-[30] sm:right-0 border border-white !px-[20px] !py-[40px] "
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
        <OpenedCircle />
      </div>

      <Accordion
        className="mb-[33px] mt-[45px]  pl-[30px] pr-[22px]"
        allowMultiple
        defaultIndex={[0]}
      >
        {filtersData.map((filter, index) => (
          <AccordionItem key={filter.category} border="none">
            <AccordionButton
              className="mb-[26px] min-w-[284px] flex items-center gap-[24px] text-[16px] font-[500] uppercase leading-[90%]"
              px={0}
              py={2}
            >
              {filter.subcategories.every((sub) =>
                selectedSubcategories[filter.category]?.includes(sub)
              ) ? (
                <EmptyMark
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAllInCategory(filter.category, filter.subcategories);
                  }}
                />
              ) : (
                <CheckedMark
                  onClick={(e) => {
                    e.stopPropagation();
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
              {filter.subcategories.map((sub) => (
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

      <div className="flex items-center w-full flex-col">
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
          className="!mt-[24px] text-[14px] cursor-pointer leading-[90%] w-full"
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
