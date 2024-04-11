"use client";

import "./case-studies.css";
import { HeroSection } from "./blocks/HeroSection";
import Contact from "@/components/Contact";
import Projects from "../components/Projects";
import Link from "next/link";
import Chevron from "@/components/icons/chevron";
import { ProjectDetail } from "../components/project-detail";
import { CaseMask } from "./blocks/CaseMask";
import { CaseGallery } from "./blocks/CaseGallery";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";
import { useSearchParams } from "next/navigation";
import { useGetItem } from "@/hooks/use-strapi";
import dot from "@/assets/icons/dot.png";

export const Page = ({ props }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  const { data: project } = useGetItem("cases", search);

  return (
    <section id="clients-wrapper">
      <ParallaxProvider>
        <div className="relative bg-black">
          <HeroSection
            tags={project?.data?.attributes?.tags}
            title={project?.data?.attributes?.title}
            linkTitle={project?.data?.attributes?.linkTitle}
          />
          <CaseMask
            mainImg={
              project?.data?.attributes?.main_case_img.data[0].attributes
            }
            bgImg={project?.data?.attributes?.main_case_img_bg.data?.attributes}
          />
          <div>
            <div className="container flex w-full flex-col items-center justify-center px-0 md:px-16 xl:max-w-[1300px]">
              <div className="my-16 flex flex-col justify-center  gap-20 lg:my-36 lg:min-w-[440px] lg:gap-36 xl:flex-row">
                <div className="flex flex-col items-center justify-center lg:justify-start xl:min-w-[512px] xl:items-start">
                  <h1 className="mb-6 whitespace-nowrap text-3xl uppercase lg:mb-12  lg:text-6xl">
                    project details
                  </h1>
                  <Link href={""} className="flex items-center gap-2">
                    <span className="text-sm uppercase text-white underline lg:text-2xl">
                      visit website
                    </span>
                    <Chevron className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
                <div className="border-b-[1px] border-white/50 lg:min-w-[490px]">
                  {project?.data?.attributes?.project_details.map(
                    (detail, index) => (
                      <ProjectDetail
                        countryImg={
                          project?.data?.attributes?.country_img?.data[0]
                            ?.attributes || { url: dot, width: 10, height: 10 }
                        }
                        key={detail.title + index}
                        {...detail}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            <CaseGallery
              photos={project?.data?.attributes?.case_carousel?.data}
            />

            <div className="container flex w-full flex-col items-center justify-center px-0 md:px-16 xl:max-w-[1300px]">
              <div className="my-16 flex flex-col items-center justify-center gap-16 lg:my-36 lg:gap-16">
                <div className="w-full">
                  <h3 className=" flex justify-center uppercase lg:items-start lg:justify-start">
                    What we did
                  </h3>
                </div>
                <div className="flex flex-col items-start justify-start gap-16  lg:flex-row ">
                  <div className="w-full border-t-2  border-white/50 px-5 pt-4 lg:max-w-[600px] lg:px-0">
                    <h3 className="mb-4 text-xs uppercase tracking-[2px] text-secondary">
                      challenge
                    </h3>
                    <span className="mb-10 text-white lg:min-w-[570px]">
                      {project?.data?.attributes?.challenge}
                    </span>
                    <Image
                      width={
                        project?.data?.attributes?.challenge_img?.data
                          ?.attributes.width
                      }
                      height={
                        project?.data?.attributes?.challenge_img?.data
                          ?.attributes.height
                      }
                      src={
                        project?.data?.attributes?.challenge_img?.data
                          .attributes.url
                      }
                      className="mt-8 min-h-[270px] w-full object-cover lg:mt-14 lg:min-h-[500px]"
                      alt=""
                    />
                  </div>
                  <div className="w-full border-t-2 border-white/50 px-5 pt-4 lg:max-w-[600px] lg:px-0">
                    <h3 className="mb-4  text-xs uppercase tracking-[2px] text-secondary">
                      Result
                    </h3>
                    <span className="text-white">
                      {project?.data?.attributes?.result}
                    </span>
                    <Image
                      width={
                        project?.data?.attributes?.result_img?.data?.attributes
                          .width
                      }
                      height={
                        project?.data?.attributes?.result_img?.data?.attributes
                          .height
                      }
                      src={
                        project?.data?.attributes?.result_img?.data.attributes
                          .url
                      }
                      className="mt-8 min-h-[270px] w-full object-cover lg:min-h-[500px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="my-5 flex  flex-col justify-center   lg:my-36  lg:flex-row lg:gap-36">
                <div className="flex flex-col items-center justify-center lg:min-w-[512px] lg:items-start lg:justify-start">
                  <h1 className=" mb-8  max-w-[210px]  text-left text-3xl  uppercase    lg:max-w-[392px]   lg:text-6xl">
                    team behind the project
                  </h1>
                </div>
                <div className="border-b-[1px] border-white/50 xl:min-w-[490px]">
                  {project?.data?.attributes?.team_details?.map(
                    (detail, index) => (
                      <ProjectDetail key={detail.title + index} {...detail} />
                    )
                  )}
                </div>
              </div>

              <div className="mb-10 mt-16 flex w-full flex-col items-start justify-between px-5 lg:flex-row  lg:items-center">
                <h1 className="mb-6 text-left text-3xl uppercase  lg:text-6xl">
                  see more projects
                </h1>
                <Link href={"/cases"} className="flex items-center gap-2">
                  <span className="text-sm uppercase text-white underline lg:text-2xl">
                    view all
                  </span>
                  <Chevron className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          <Projects />
          <Contact />
        </div>
      </ParallaxProvider>
    </section>
  );
};

export default Page;
