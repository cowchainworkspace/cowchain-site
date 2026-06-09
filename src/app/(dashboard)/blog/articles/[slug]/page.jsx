import { metadata } from "@/app/rootMetadata";
import { articleOptions } from "@/hooks/use-strapi";
import { getArticleBySlug } from "@/lib/api/articles";
import { getQueryClient } from "@/lib/api/get-query-client";
import { getArticleSchema } from "@/lib/utils";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { cache } from "react";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";

// Dedupe the Strapi fetch between generateMetadata() and the page render.
const getArticle = cache((slug) => getArticleBySlug(slug));

export async function generateMetadata({ params }) {
  const blogPost = await getArticle(params.slug);

  const metaTags = blogPost?.SEO?.MetaTag?.map((tag) => [
    tag.Name,
    tag.Content
  ]);

  const title = blogPost?.SEO?.MetaTitle || blogPost?.article_title || metadata.title;
  const description =
    blogPost?.SEO?.MetaDescription || metadata.description;
  const url = `https://cowchain.io/blog/articles/${params.slug}`;
  const image = blogPost?.banner_img?.url;

  return {
    title,
    description,
    metadataBase: new URL("https://cowchain.io/"),
    alternates: { canonical: `/blog/articles/${params.slug}` },
    other: metaTags ? Object.fromEntries(metaTags) : null,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Cowchain",
      images: image ? [{ url: image }] : undefined,
      publishedTime: blogPost?.publishedAt,
      modifiedTime: blogPost?.updatedAt,
      authors: blogPost?.author_name ? [blogPost.author_name] : undefined
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined
    }
  };
}

export default async function Article({ params }) {
  const queryClient = getQueryClient();

  // Prefetch with the SAME query key the client reads (articleOptions(slug)),
  // so useSuspenseQuery hydrates from cache and the article body is rendered
  // in the server HTML — required for search/LLM crawlers to see the content.
  await queryClient.prefetchQuery(articleOptions(params.slug));

  const blogPost = await getArticle(params.slug);
  const articleSchema = getArticleSchema(blogPost, params.slug);

  return (
    <section>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ArticleInfo />
      </HydrationBoundary>
    </section>
  );
}
