import stone from "@/assets/blog/posts/stone.png";
import sphere from "@/assets/blog/posts/sphere.png";
import robot from "@/assets/blog/posts/robot.png";
import dics from "@/assets/blog/posts/dics.png";
import human from "@/assets/blog/posts/human.png";

export const blogPosts = {
    main: [
      {
        tag: "NFT",
        title: "NFTs and Web3: Transforming Digital Ownership",
        content:
          "Discover the synergy between Non-Fungible Tokens (NFTs) and Web3 technology. Learn how NFTs are reshaping the way we perceive and trade digital assets, and explore the innovative ways...",
        imgSrc: stone,
        className: "xl:border-r border-b botder-t border-th-fade"
      },
      {
        tag: "Development",
        title:
          "Building Trust in the Metaverse: Security and Privacy in Web3 Development",
        content:
          "Dive into the world of Web3 development and understand how it revolutionizes the internet as we know it. Explore the key concepts, technologies, and potential applications that make Web3...",
        imgSrc: sphere,
        className: "xl:border-r border-b botder-t border-th-fade"
      }
    ],
    secondary: [
      {
        tag: "Development",
        title: "Unleashing the Power of Web3: A Comprehensive Introduction",
        content:
          "Delve into the crucial aspects of security and privacy in the Web3 landscape. Explore the challenges and solutions for safeguarding user data, preventing vulnerabilities, and establishing...",
        imgSrc: robot,
        className: "border-b xl:border-none botder-t border-th-fade"
      },
      {
        tag: "Economy",
        title: "Smart Contracts Unveiled: Empowering Transactions in Web3",
        content:
          "Unravel the world of smart contracts, the building blocks of decentralized applications (DApps) in Web3. Learn how these self-executing contracts automate processes...",
        imgSrc: dics,
        className: " border-b xl:border-x xl:border-y-[0px] botder-t  border-th-fade"
      },
      {
        tag: "Gaming",
        title: "Web3 Gaming: The Future of Immersive and Rewarding Experiences",
        content:
          "Immerse yourself in the future of gaming with Web3 technology. Explore how decentralized networks, blockchain integration, and tokenization are ushering in a new era of interactive...",
        imgSrc: human,
        className: "border-b xl:border-none botder-t border-th-fade"
      },
    ]
  };