// FilterMenu.tsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
  Button
} from "@chakra-ui/react";
import { EmptyMark } from "../../../../../../assets/svgComponents/caseFilter/EmptyMark";
import { CheckedMark } from "../../../../../../assets/svgComponents/caseFilter/CheckedMark";
import { OpenedCircle } from "../../../../../../assets/svgComponents/caseFilter/OpenedCircle";

const filtersData = [
  {
    id: 1,
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
    id: 2,
    category: "Mobile App",
    subcategories: ["Mobile GameFi", "Mobile Trading", "Mobile Crypto Wallet"]
  },
  {
    id: 3,
    category: "AI Development",
    subcategories: ["AI Development", "Mobile AI Development"]
  },
  {
    id: 4,
    category: "Telegram Mini-Apps",
    subcategories: ["Telegram Mini-Apps", "Mobile Telegram Mini-Apps"]
  },
  {
    id: 5,
    category: "Blockchain Development",
    subcategories: ["Blockchain Development", "Mobile Blockchain Development"]
  }
];

export const FilterMenu = ({
  setIsFilterOpen,
  setTags,
  selectedTags,
  setselectedTags
}) => {
  const toggleAllInCategory = (category, subcategories, i) => {
    setselectedTags((prev) => {
      const subcategories = filtersData[i].subcategories;
      const allIncluded = subcategories.every((sub) => prev.includes(sub));

      if (allIncluded) {
        return prev.filter((tag) => !subcategories.includes(tag));
      } else {
        const newTags = [...prev];
        subcategories.forEach((sub) => {
          if (!newTags.includes(sub)) {
            newTags.push(sub);
          }
        });
        return newTags;
      }
    });
  };

  const toggleSubcategory = (category, sub) => {
    setselectedTags((prev) => {
      if (prev.includes(sub)) {
        return prev.filter((tag) => tag !== sub);
      } else {
        return [...prev, sub];
      }
    });
  };

  const handleAllSubClick = (e, category, subcategories, index) => {
    e.preventDefault();
    e.stopPropagation();
    toggleAllInCategory(category, subcategories, index);
  };

  const handleSubClick = (e, category, sub) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSubcategory(category, sub);
  };

  const handleApplyFilters = () => {
    setTags(selectedTags);
  };

  return (
    <Box
      bg={"black"}
      color={"white"}
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
          <AccordionItem key={filter.id} border="none">
            <AccordionButton
              onClick={(e) =>
                handleAllSubClick(
                  e,
                  filter.category,
                  filter.subcategories,
                  index
                )
              }
              className="mb-[26px] flex min-w-[284px] items-center gap-[24px] text-[16px] font-[500] uppercase leading-[90%]"
              px={0}
              py={2}
            >
              {filter.subcategories.every((sub) =>
                selectedTags?.includes(sub)
              ) ? (
                <EmptyMark />
              ) : (
                <CheckedMark />
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
                filter.subcategories.map((sub, i) => (
                  <Box
                    key={i}
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                    mb={2}
                    px={2}
                    py={1}
                    className="!mb-[26px] ml-[40px] flex items-center gap-[24px] text-[16px] font-[400] uppercase leading-[90%]"
                    onClick={(e) => {
                      handleSubClick(e, filter.category, sub);
                    }}
                  >
                    {selectedTags?.includes(sub) ? (
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
          onClick={handleApplyFilters}
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
          onClick={() => {
            setTags([]);
            setselectedTags([]);
          }}
        >
          RESET {`(${selectedTags.length})`}
        </Button>
      </div>
    </Box>
  );
};
