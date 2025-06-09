import { metadata, blogBreadCrumbList } from "./blogData/metaData";
import BlogInfo from "./components/BlogInfo/BlogInfo";
export { metadata };
export default async function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadCrumbList) }}
      />
      <section>
        <BlogInfo />
      </section>
    </>
  );
}
