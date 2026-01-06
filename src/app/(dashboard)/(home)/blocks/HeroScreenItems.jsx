import { heroScreenData } from "../utils/homeData";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";



export default function HeroScreenItems() {
  const [expandedCard, setExpandedCard] = useState(0);
  const [isMoreThan1023] = useMediaQuery("(min-width: 1024px)");
  const [isMoreThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <div className="w-full flex mt-auto max-md:flex-col md:grid md:grid-cols-2 lg:flex">
      <div className="border-t-[0.5px] border-[#FFFFFF80]  hidden custom1400:block  h-[189px] mt-auto w-[79px] shrink-0" />

      {heroScreenData.map(({ icon: Icon, title, content }, index) => {
        const isExpanded = expandedCard === index;

        return (
          <div key={title} className={cn("flex flex-1 h-fit", isMoreThan1023 && "h-[262px]")}>
            <motion.article
              initial="collapsed"
              animate={isExpanded ? "expanded" : "collapsed"}
              whileHover={isMoreThan1023 ? "expanded" : undefined}
              onClick={() => {
                if (!isMoreThan1280) {
                  if (expandedCard === index) {
                    setExpandedCard(null);
                    return;
                  }
                  setExpandedCard(index);
                }
              }}
              variants={{
                collapsed: { height: isMoreThan1023 ? 189 : 134 },
                expanded: { height: isMoreThan1023 ? 262 : 234 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={cn(
                "flex mt-auto flex-1 group flex-col gap-8 p-6 border-[0.5px] border-b-[0px] border-[#FFFFFF80] overflow-hidden relative",
                !isMoreThan1023 && "cursor-pointer",
              )}
            >
              <div
                className={cn("absolute inset-0 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none", expandedCard === index && "opacity-100")}
                style={{
                  background: "linear-gradient(3.61deg, rgba(77, 44, 145, 0) 2.97%, #4D2C91 93.57%)"
                }}
              />
              <span className="size-7 flex items-center justify-center relative"><Icon /></span>

              <div className="flex flex-col gap-4 relative">
                <h3 className="text-[16px] font-roc uppercase font-[500] xl:text-[24px] xl:leading-[0.9] max-w-[225px]">{title}</h3>
                <motion.p
                  variants={{
                    collapsed: { opacity: 0, height: 0, marginTop: 0 },
                    expanded: { opacity: 1, height: "auto", marginTop: 0 }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-[16px] font-manrope text-[#BBBBBB] font-normal leading-[22px] max-w-[276px]"
                >
                  {content}
                </motion.p>
              </div>
            </motion.article>
          </div>
        );
      })}

      <div className="border-t-[0.5px] border-[#FFFFFF80] hidden custom1400:block h-[189px] w-[79px] shrink-0 mt-auto" />
    </div>);
}