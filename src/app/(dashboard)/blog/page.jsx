import { blogOptions } from "@/hooks/use-strapi";
import { getQueryClient } from "@/lib/api/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { metadata, blogBreadCrumbList } from "./blogData/metaData";
import BlogInfo from "./components/BlogInfo/BlogInfo";
export { metadata };

export default async function Blog({ searchParams }) {
  const tag = searchParams?.tag || "";
  const queryClient = getQueryClient();

  // Server-render the first page of the article list so the blog index is
  // visible to search and LLM crawlers (BlogList reads the same query key).
  await queryClient.prefetchInfiniteQuery(blogOptions(tag));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadCrumbList) }}
      />
      <section>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <BlogInfo />
        </HydrationBoundary>
      </section>
    </>
  );
}
