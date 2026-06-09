import dynamic from "next/dynamic";

const Header = dynamic(() => import("./blocks/Header"));
const HomeContent = dynamic(() => import("./blocks/home-content"));
import { jsonLdFaq, jsonLdVideo, metadata } from "./homeData/data";

export { metadata };

export default function Page() {
  return (
    <div>
      {/* Organization + WebSite schema is injected site-wide in the root layout. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />
      <Header />
      <HomeContent />
    </div>
  );
}
