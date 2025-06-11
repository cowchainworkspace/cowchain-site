import linkedin from "@/assets/homepage/linkedin.svg";
import newEmploye from "@/assets/homepage/team/newTeam/addEmployesImg.png";
import Alex from "@/assets/homepage/team/newTeam/alexImg.png";
import Alexandra from "@/assets/homepage/team/newTeam/alexandraImg.png";
import Hanna from "@/assets/homepage/team/newTeam/hannaImg.png";
import Michael from "@/assets/homepage/team/newTeam/michaelImg.png";
import Oleh from "@/assets/homepage/team/newTeam/olehImg.png";
import Olexandr from "@/assets/homepage/team/newTeam/olexandrIng.png";
import Ruslan from "@/assets/homepage/team/newTeam/ruslanImg.png";
import Viacheslav from "@/assets/homepage/team/newTeam/viacheslavImg.png";
import Vlad from "@/assets/homepage/team/newTeam/vladImg.png";

export const teamGalleryData = [
    {
      name: "Michael",
      role: "Founder & CEO",
      photo: Michael,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: "https://www.linkedin.com/in/onchainmichael"
      },
      check: false
    },
    {
      name: "Viacheslav",
      role: "COO",
      photo: Viacheslav,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: "https://www.linkedin.com/in/slava-ivchenko/"
      },
      check: ""
    },
    {
      name: "Oleh",
      role: "CTO",
      photo: Oleh,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: "https://www.linkedin.com/in/oleh-shutiak-%F0%9F%87%BA%F0%9F%87%A6-92786b229"
      },
      check: "oleh"
    },
  
    {
      name: "Vlad",
      role: "Head of Sales",
      photo: Vlad,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: ""
      },
      check: ""
    },
  
    {
      name: "Alexandra",
      role: "Head of Marketing",
      photo: Alexandra,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: "https://www.linkedin.com/in/bohdan-solomakha-750a14240/"
      },
      check: ""
    },
  
    {
      name: "Alex",
      role: "Head of Lead Generation",
      photo: Alex,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: "'"
      },
      check: ""
    },
    {
      name: "Hanna",
      role: "Business Development Lead",
      photo: Hanna,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: ""
      },
      check: ""
    },
  
    {
      name: "Ruslan",
      role: "Business Development Representative",
      photo: Ruslan,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: "https://www.linkedin.com/in/ruslan-siniaiev-600340240/"
      },
      check: ""
    },
    {
      name: "Olexandr",
      role: "Business Development Representative",
      photo: Olexandr,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: ""
      },
      check: ""
    },
    {
      name: "+Many more",
      role: "Business Development Representative",
      photo: newEmploye,
      social: {
        network: "LinkedIn",
        icon: linkedin,
        url: ""
      },
      check: "new"
    }
  ];

  export const benefitsData = [
    {
      title: "01 / Passion",
      text: "The Cowchain team is united by our burning desire to lead the transformation of how people interact with the world. And we have the experience & skills to fulfill it. How? Through successfully deployed products shaped by the vision of startups, enterprises, and Web3 pioneers who choose to work with us. ",
      transformStyle: "",
      initialStyle: "border-0 "
    },
    {
      title: "02 / Individual Approach",
      text: "Cowchcain offers no “one-size-fits-alls.” We immerse ourselves in our clients' businesses, speaking their language and working as an in-house product team to develop effective solutions with users in mind. Your goals become our goals, and your challenges fuel our creativity.",
      transformStyle:
        "max-h-max -translate-y-[5%] xl:-translate-y-[5%] duration-1000",
      initialStyle:
        "max-h-max translate-y-[80%] xl:translate-y-[115%]  duration-1000"
    },
    {
      title: "03 / We are the devs of Web3",
      text: "In our worldview, there’s a huge difference between being Web3 developers and developers of Web3. Web3 devs know how to implement blockchain technologies. Devs of Web3 code meaningful products that add value to the community and push the industry forward. We are the devs of Web3.",
      transformStyle:
        "max-h-max -translate-y-[10%] xl:-translate-y-[10%]  duration-1000",
      initialStyle:
        "max-h-max translate-y-[25%] xl:translate-y-[60%] duration-1000"
    }
  ];

  export const benefitsMobileData = [
    {
      title: "01 / Passion",
      text: "The Cowchain team is united by our burning desire to lead the transformation of how people interact with the world. And we have the experience & skills to fulfill it. How? Through successfully deployed products shaped by the vision of startups, enterprises, and Web3 pioneers who choose to work with us. "
    },
    {
      title: "02 / Individual Approach",
      text: "Cowchcain offers no “one-size-fits-alls.” We immerse ourselves in our clients' businesses, speaking their language and working as an in-house product team to develop effective solutions with users in mind. Your goals become our goals, and your challenges fuel our creativity."
    },
    {
      title: "03 / We are the devs of Web3",
      text: "In our worldview, there’s a huge difference between being Web3 developers and developers of Web3. Web3 devs know how to implement blockchain technologies. Devs of Web3 code meaningful products that add value to the community and push the industry forward. We are the devs of Web3."
    }
  ];

  export const teamBreadCrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebPage",
          "@id": "https://cowchain.io/",
          name: "Home"
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebPage",
          "@id": `https://cowchain.io/team`,
          name: "Team"
        }
      },
    ]
  };