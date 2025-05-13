"use client";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
const AnchorLink = dynamic(() => import("react-anchor-link-smooth-scroll"), {
  ssr: false
});

const items = [
  {
    id: 1,
    title: "WHAT WE DO",
    links: [
      {
        label: "Services & Technologies"
      },
      { label: "Cases", href: "/cases" }
    ]
  },
  {
    id: 2,
    title: "AGENCY",
    links: [{ label: "Team", href: "/team", isAnchor: false }]
  },
  {
    id: 3,
    title: "HELP",
    links: [
      { label: "Contact Us", href: "#contact", isAnchor: true },
      { label: "Privacy Policy", href: "/policy", isAnchor: false },
      { label: "FAQs", href: "#faq", isAnchor: true }
    ]
  }
];

export const FaqAccordion = ({ openServicePage }) => {
  const path = usePathname();
  const isCasesPage = path.includes("/cases");

  return (
    <Accordion allowToggle>
      {items.map((item) => (
        <AccordionItem border="none" key={item.id} className=" pb-10 last:pb-0">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  className={cn("flex items-center justify-between")}
                >
                  <Box className="footer-links text text-left text-base leading-4 text-white">
                    {item.title}
                  </Box>
                  <div
                    className={cn(
                      "z-10 flex rotate-0 items-center justify-center transition-transform duration-300",
                      isExpanded && "-rotate-180"
                    )}
                  >
                    <svg
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Collapse icon</title>
                      <path
                        d="M6 6L0.803848 -4.86779e-08L11.1962 -1.3313e-06L6 6Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </AccordionButton>
              </h2>
              <AccordionPanel className="mt-6">
                <Box
                  className="footer-links"
                  display="flex"
                  flexDirection="column"
                  gap="14px"
                >
                  {item.links.map((link, i) => {
                    if (link.label === "FAQs" && isCasesPage) {
                      return null;
                    }
                    if (!link.href) {
                      return (
                        <button
                          onClick={openServicePage}
                          type="button"
                          className="text-left align-middle text-base "
                        >
                          <span className="!text-secondary"> {link.label}</span>
                        </button>
                      );
                    }
                    if (link.isAnchor) {
                      <AnchorLink key={i} href={link.href}>
                        <p className="text-left align-middle text-base !text-secondary">
                          {link.label}
                        </p>
                      </AnchorLink>;
                    }
                    return (
                      <Link key={i} href={link.href} passHref>
                        <p className="text-left align-middle text-base !text-secondary">
                          {link.label}
                        </p>
                      </Link>
                    );
                  })}
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
