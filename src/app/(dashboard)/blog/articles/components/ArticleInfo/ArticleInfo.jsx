"use client";
import { articleOptions, useMutatePost } from "@/hooks/use-strapi";
import bannerIg from "@/assets/blog/articles/splash.png";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import { BlogBreadCrumb } from "../../../components/BreadCrumb/BlogBreadCrumb";
import { HeroSection } from "../../blocks/HeroSection";
import Image from "next/image";
import { SideMenu } from "../SideMenu/SideMenu";
import { ArticleParagraphs } from "../ArticleParagraphs/ArticleParagraphs";
import { ReviewsSection } from "../ReviewsSection/ReviewsSection";
import { ThanksReview } from "../ThanksReview/ThanksReview";
import FooterForm from "@/components/utils/FooterForm";
import { ShareLinks } from "../../blocks/ShareLinks";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getSplitText } from "@/lib/utils";
import { Blog } from "../../blocks/Blog";

const ArticleInfo = () => {
  const params = useParams();
  const { slug } = params;
  const { data } = useSuspenseQuery(articleOptions(slug));
  const [reviewItem, setReviewItem] = useState(null);
  const { mutateAsync: cretePost, isPending } = useMutatePost();
  const articleTitles = [];

  const onHandleAddReview = async (review) => {
    try {
      const { article, article_rating, icon, text } = review;

      await cretePost({
        article: review.article,
        article_rating: review.article_rating
      });
      localStorage.setItem(`review-${data.id}`, slug);
      setReviewItem({ icon, text });
      setTimeout(() => {
        setReviewItem(null);
      }, 4000);
    } catch (error) {
      console.log(error);
      throw new Error(`Can\'nt create new review: ${error}`);
    }
  };

  const hasVoted = localStorage.getItem(`review-${data.id}`);

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
    <div className="relative  min-h-screen bg-black">
      <BlogBreadCrumb slug={slug} />
      <HeroSection
        tag={data.attributes.tag}
        title={data.attributes.article_title}
        author={data.attributes.author_name.split(",")[0]}
        readingMinutes={data.attributes.reading_minutes}
        articleId={data.id}
        pageViews={data.attributes.article_views}
      />
      <Image
        height={560}
        width={600}
        src={data.attributes.banner_img.data?.attributes?.url || bannerIg}
        className="block h-[234px] w-full object-cover md:max-h-[560px] md:min-h-[430px]"
        alt=""
      />
      <div className="mt-[60px] flex items-start justify-center  gap-[71px] md:mb-[103px] md:mt-20">
        <SideMenu articleTitles={articleTitles} />
        <div>
          <ArticleParagraphs
            paragraphs={paragraphs}
            authorIcon={data.attributes.author_avatar.data?.attributes?.url}
            authorName={data.attributes.author_name}
            authorInfo={data.attributes.author_info}
          />
          {hasVoted !== slug && !reviewItem && (
            <ReviewsSection
              onHandleAddReview={onHandleAddReview}
              articleId={data.id}
              isPending={isPending}
            />
          )}
          {reviewItem && <ThanksReview review={reviewItem} />}
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
  );
};

export default ArticleInfo;
