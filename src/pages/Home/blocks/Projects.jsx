import React, { useRef, useEffect, useLayoutEffect } from "react";
import pic1 from "../../../assets/homepage/projects/1.jpg";
import pic2 from "../../../assets/homepage/projects/2.jpg";
import pic3 from "../../../assets/homepage/projects/3.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectsData = [
  {
    title: "Marsan Exchange",
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
    tags: ["React.js", "Solidity", "Subgraph"]
  },
  {
    title: "Triend",
    description:
      "Decentralized plugin development for travelers’ review verification. Proof-of-attendance protocol and reward system integration",
    photo: pic3,
    tags: ["React.js", "Solidity", "Subgraph"]
  }
];

const Project = ({ title, description, photo, tags, id }) => {
  return (
    <article
      id={"project-" + id}
      className="project-card relative flex min-h-[320px] w-full cursor-pointer border-b border-b-th-fade bg-cover bg-center bg-no-repeat px-4 py-8 will-change-transform md:h-96 md:min-w-[25vw] md:px-8 lg:h-[480px] lg:px-16 xl:h-[624px]"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="project-overlay absolute left-0 top-0 flex h-full w-full flex-col gap-y-4 px-12 py-8 xl:py-12">
        <Link to="/" className="btn-contact ml-auto">
          VIEW PROJECT
        </Link>
        <div className="mt-auto flex flex-col gap-y-4">
          <div className="flex items-center gap-x-1 md:gap-x-2">
            {tags.map((tag, index) => (
              <div key={index} className="rounded-full bg-white px-3 py-2">
                <p className="text-xs font-medium text-black lg:text-sm">
                  {tag}
                </p>
              </div>
            ))}
          </div>
          <h2 className="mt-2">{title}</h2>
          <p className="body max-w-sm !text-[#bbb]">{description}</p>
        </div>
      </div>
      <div className="relative mt-auto flex flex-col gap-y-4 lg:hidden">
        <h2>{title}</h2>
        <p className="max-w-xs text-sm font-normal leading-normal text-[#bbb]">
          {description}
        </p>
      </div>
    </article>
  );
};

const Projects = () => {
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

export default Projects;
