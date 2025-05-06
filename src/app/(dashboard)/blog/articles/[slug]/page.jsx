import { metadata } from "@/app/rootMetadata";
import { articleOptions } from "@/hooks/use-strapi";
import { getArticleBySlug } from "@/lib/api/articles";
import { getQueryClient } from "@/lib/api/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";

export async function generateMetadata({ params }) {
  const blogPost = await getArticleBySlug(params.slug);

  const metaTags = blogPost?.SEO?.MetaTag?.map((tag) => [
    tag.Name,
    tag.Content
  ]);

  return {
    title: blogPost.SEO.MetaTitle || metadata.title,
    description: blogPost.SEO.MetaDescription || metadata.description,
    other: metaTags ? Object.fromEntries(metaTags) : null
  };
}

export default async function Article() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(articleOptions);
  return (
    <section>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArticleInfo />
      </HydrationBoundary>
    </section>
  );
}
