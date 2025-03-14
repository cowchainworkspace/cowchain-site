import { metadata } from "./blogData/metaData";
import BlogInfo from "./components/BlogInfo/BlogInfo";
export { metadata };
export default async function Blog() {
  return (
    <section>
      <BlogInfo />
    </section>
  );
}
