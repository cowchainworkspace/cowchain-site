import { articleOptions } from "@/hooks/use-strapi";

import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/api/get-query-client";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";
import { Suspense } from "react";
import { Loading } from "@/components/loader/Loading";

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
