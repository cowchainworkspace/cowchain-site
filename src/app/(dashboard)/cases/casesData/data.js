import marsan from "@/assets/cases/marsan.png";
import eva from "@/assets/cases/eva.png";
import triend from "@/assets/cases/triend.png";
import triend_mobile from "@/assets/cases/triend-mobile.png";
import retrobridge from "@/assets/cases/retrobridge.png";
import retrobridge_mobile from "@/assets/cases/retrobridge-mobile.png";
import step from "@/assets/cases/step.png";
import finance from "@/assets/cases/finance.png";
import finance_mobile from "@/assets/cases/finance-mobile.png";
import photo1 from "@/assets/case-study/wallet-app/carousel/empty.png";
import photo2 from "@/assets/case-study/wallet-app/carousel/log-in.png";
import photo3 from "@/assets/case-study/wallet-app/carousel/nft-page.png";
import photo4 from "@/assets/case-study/wallet-app/carousel/search.png";
import photo5 from "@/assets/case-study/wallet-app/carousel/stories.png";
import photo6 from "@/assets/case-study/wallet-app/carousel/token-page.png";

export const metadata = {
  title: "Cryptoplatform - Our Case Study | Cowchain",
  description: "Explore our victory stories. In-depth case thinks about exhibiting how Cowchain's blockchain arrangements have changed businesses over different sectors.",
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/cases"
  }
};


export const photos = [photo1, photo2, photo3, photo4, photo5, photo6];


export const old_cases = [
  {
    title: "Exchange wallet app",
    link: "/cases/payment",
    img_desktop: marsan,
    img_mobile: marsan,
    tags: ["Mobile App", "Non-custodial exchange"]
  },
  {
    title: "Integration blockchain into hotel business",
    link: "/cases/hotel",
    img_desktop: triend,
    img_mobile: triend_mobile,
    tags: ["NFT", "Proof Of Attendance (POAP)"]
  },
  {
    title: "Cross-chain transfer bridge",
    link: "/cases/bridge",
    img_desktop: retrobridge,
    img_mobile: retrobridge_mobile,
    tags: ["DEFI", "Crosschain", "Multichain", "Bridge"]
  },
  {
    title: "m2e platform",
    link: "/cases/move",
    img_desktop: step,
    img_mobile: step,
    tags: ["DEX", "Non-custodial exchange", "Staking", "Move-to-Earn"]
  },
  {
    title: "decentralized crypto exchange",
    link: "/cases/finance",
    img_desktop: finance,
    img_mobile: finance_mobile,
    tags: ["DEX", "DEFI"]
  },
  {
    title: "Crypto wallet app",
    link: "/cases/wallet",
    img_desktop: eva,
    img_mobile: eva,
    tags: ["Mobile App", "Non-custodial wallet"]
  }
];