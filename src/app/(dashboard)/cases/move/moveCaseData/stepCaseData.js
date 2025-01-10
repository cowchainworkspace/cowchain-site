import Dubai from "@/assets/icons/dubai";

export const projectDetails = [
  {
    title: "Tech Stack",
    content:
      "React Native, Node.js, Solidity, ethers.js, web3.js, bitcoin.js, Persona KYC, Interac E-transfer, Chat support, email templating"
  },
  {
    title: "project duration",
    content: "6 months"
  },
  {
    title: "geography",
    content: (
      <div className="flex flex-row items-center gap-2">
        {" "}
        <Dubai className={"h-3 w-4 "} /> Dubai
      </div>
    )
  }
];

export const teamDetails = [
  {
    title: "development",
    content: "Vakhtang Chikhladze, Daniil Stoian, Nikita Chernega"
  },
  {
    title: "project management",
    content: "Viacheslav Ivchenko"
  },
  {
    title: "marketing & Seo",
    content: "Alexandr Yaremenko"
  },
  {
    title: "ui/ux design",
    content: "Nadiia Nikiforova"
  }
];
