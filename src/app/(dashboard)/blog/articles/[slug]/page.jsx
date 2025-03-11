import { getArticleBySlug } from "@/lib/api/articles";
import ArticleInfo from "../components/ArticleInfo/ArticleInfo";

export async function generateMetadata({ params }) {
  const blogPost = await getArticleBySlug(params.slug);
  const metaTags = blogPost.attributes?.SEO?.MetaTag?.map((tag) => [
    tag.Name,
    tag.Content
  ]);

  return {
    title: blogPost.attributes.SEO.MetaTitle,
    description: blogPost.attributes.SEO.MetaDescription,
    other: metaTags ? Object.fromEntries(metaTags) : null
  };
}

export default async function Article() {
  return (
    <section>
      <ArticleInfo />
    </section>
  );
}
