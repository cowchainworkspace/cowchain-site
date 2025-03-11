import { blogOptions } from "@/hooks/use-strapi";
import { getQueryClient } from "@/lib/api/get-query-client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import BlogInfo from "./components/BlogInfo/BlogInfo";

export default async function Blog() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(blogOptions);

  return (
    <section>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogInfo />
      </HydrationBoundary>
    </section>
  );
}
