"use client";
import bannerIg from "@/assets/blog/articles/splash.png";
import FooterForm from "@/components/utils/FooterForm";
import { articleOptions, useMutatePost } from "@/hooks/use-strapi";
import { getSplitText } from "@/lib/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import OldBreadCrumbs from "../../../components/BreadCrumb/OldBreadCrumbs";
import { Blog } from "../../blocks/Blog";
import { HeroSection } from "../../blocks/HeroSection";
import { ShareLinks } from "../../blocks/ShareLinks";
import { ArticleParagraphs } from "../ArticleParagraphs/ArticleParagraphs";
import { ReviewsSection } from "../ReviewsSection/ReviewsSection";
import { SideMenu } from "../SideMenu/SideMenu";
import { ThanksReview } from "../ThanksReview/ThanksReview";

const ArticleInfo = () => {
  const params = useParams();
  const { slug } = params;
  const { data, isLoading } = useSuspenseQuery(articleOptions(slug));
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
      <OldBreadCrumbs title={data.attributes.article_title} />
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

        <div className="sticky top-0 hidden  flex-col items-start overflow-hidden  xl:flex">
          <h3 id="first-article" className="mb-2 text-lg font-medium uppercase">
            Subscribe to our newsletter
          </h3>
          <p className="mb-8 text-sm text-secondary">
            Receive weekly updates on new posts and features
          </p>
          <FooterForm />

          <div className="mt-[42px] w-full">
            <h3 className="mb-3 text-lg uppercase">Share the article</h3>
            <ShareLinks />
          </div>
        </div>
      </div>
      <Blog slug={slug} />
    </div>
  );
};

export default ArticleInfo;
