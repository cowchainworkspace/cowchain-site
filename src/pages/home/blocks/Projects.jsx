import React, { useRef, useLayoutEffect } from "react";
import pic1 from "../../../assets/homepage/projects/1.jpg";
import pic2 from "../../../assets/homepage/projects/2.jpg";
import pic3 from "../../../assets/homepage/projects/3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "../../home/components/project";

const projectsData = [
  {
    title: "Marsan Exchange",
    link: "/cases/case_study",
    description:
      "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
    photo: pic1,
    tags: ["React.js", "Solidity", "Subgraph"]
  },
  {
    title: "Eva Crypto Wallet",
    description:
      "Multichain mobile wallet development with AI integration for an optimized portfolio management",
    photo: pic2,
    link: "",
    tags: ["React.js", "Solidity", "Subgraph"]
  },
  {
    title: "Triend",
    description:
      "Decentralized plugin development for travelers’ review verification. Proof-of-attendance protocol and reward system integration",
    photo: pic3,
    link: "",
    tags: ["React.js", "Solidity", "Subgraph"]
  }
];

export const Projects = () => {
  const projectRef = useRef();
  const scrollTriggerRef = useRef();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = scrollTriggerRef.current;
    const items = projectRef.current.children;

    gsap.to(items, {
      scrollTrigger: {
        trigger: container,
        start: "center 83%",
        pinned: true,
        pinnedContainer: true,
        end: () => `+=${container.clientWidth}`,
        scrub: 2,
        onUpdate: (scrollTrigger) => {
          // Update the flex property of the items during scroll
          [...items].forEach((item, index) => {
            const progress = scrollTrigger.progress;
            if (progress > index / 10 && progress < (index + 1) / 10) {
              item.classList.add("expanded");
            } else {
              item.classList.remove("expanded");
            }
          });
        }
      }
    });
  }, []);

  return (
    <section
      ref={scrollTriggerRef}
      className=" overflow-hidden overscroll-none"
    >
      <div
        ref={projectRef}
        className="relative flex flex-col flex-nowrap lg:flex-row"
      >
        {projectsData.map((project, index) => (
          <Project {...project} key={project.title} />
        ))}
      </div>
    </section>
  );
};
