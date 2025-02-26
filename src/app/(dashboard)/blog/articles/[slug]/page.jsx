"use client";
import bannerIg from "@/assets/blog/articles/splash.png";
import { Loading } from "@/components/loader/Loading";
import FooterForm from "@/components/utils/FooterForm";
import { useGetArticleBySlug } from "@/hooks/use-strapi";
import { getSplitText } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { BlogBreadCrumb } from "../../components/BreadCrumb/BlogBreadCrumb";
import { Blog } from "../blocks/Blog";
import { HeroSection } from "../blocks/HeroSection";
import { ShareLinks } from "../blocks/ShareLinks";
import { ArticleParagraphs } from "../components/ArticleParagraphs/ArticleParagraphs";
import { ReviewsSection } from "../components/ReviewsSection/ReviewsSection";
import { SideMenu } from "../components/SideMenu/SideMenu";

function Article() {
  const params = useParams();
  const { slug } = params;
  const { data, isLoading, isError } = useGetArticleBySlug(slug);

  const articleTitles = [];

  if (isLoading) {
    return (
      <div className="flex min-h-[100dvh]">
        <Loading />
      </div>
    );
  }

  const paragraphs = data.attributes.article_paragraphs.map((paragraph) => {
    if (!paragraph.__component.includes("image")) {
      const titleId = crypto.randomUUID();
      const { title, description } = getSplitText(paragraph.text);
      articleTitles.push({
        id: titleId,
        title
      });

      return {
        titleId,
        id: paragraph.id,
        title,
        description,
        component: paragraph.__component
      };
    }

    return {
      id: paragraph.id,
      component: paragraph.__component,
      imageUrl: paragraph.paragraph_image.data.attributes.url
    };
  });

  return (
    <section>
      <div className="relative  min-h-screen bg-black">
        <BlogBreadCrumb slug={slug} />
        <HeroSection
          tag={data?.attributes.tag}
          title={data?.attributes.article_title}
          author={data?.attributes.author_name.split(",")[0]}
          readingMinutes={data?.attributes.reading_minutes}
        />
        <Image
          height={560}
          width={600}
          src={data?.attributes.banner_img.data?.attributes?.url || bannerIg}
          className="block h-[234px] w-full object-cover md:max-h-[560px] md:min-h-[430px]"
          alt=""
        />
        <div className="mt-[60px] flex items-start justify-center  gap-[71px] md:mb-[103px] md:mt-20">
          <SideMenu articleTitles={articleTitles} />
          <div>
            <ArticleParagraphs
              paragraphs={paragraphs}
              authorIcon={data?.attributes.author_avatar.data?.attributes?.url}
              authorName={data?.attributes.author_name}
              authorInfo={data?.attributes.author_info}
            />
            <ReviewsSection />
          </div>

          <div className="sticky top-0 ml-[10px] hidden  flex-col items-center overflow-hidden  2xl:flex">
            <h3 id="first-article" className="mb-2 text-2xl uppercase">
              Subscribe to our newsletter
            </h3>
            <span className="mb-10 text-secondary">
              Receive weekly updates on new posts and features
            </span>
            <FooterForm />

            <div className="mt-[40px] w-full">
              <h3 className="mb-[12px] text-[18px] uppercase">
                Share the article
              </h3>
              <ShareLinks />
            </div>
          </div>
        </div>
        <Blog slug={slug} />
      </div>
    </section>
  );
}

export default Article;
