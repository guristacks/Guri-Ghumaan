import React from "react";
import nexaWaveImg from "../../assets/Images/Work/nexa-wave-mockup.webp";
import elenaMorganImg from "../../assets/Images/Work/elena-morgan-mockup.webp";
import stacksImg from "../../assets/Images/Work/stacks-mockup.webp";
import SiteCard from "./SiteCard";


const WebsitePreview = () => {

  const siteInfo = [
    {
      className: "site0",
      img: nexaWaveImg,
      identity: "Website",
      tag1: "• 3 Pages",
      tag2: "2026",
      title: "Nexa Wave - Ai Agency",
      description:
        "Nexa Wave Agency builds modern websites, powerful brands, and digital experiences that help businesses grow online.",
      tech: "Teck Stack",
      stack1: "Html",
      stack2: "Css",
      stack3: "javaScript",
      stack4: "Gsap",
      stack5: "Lenis",
      liveLink: "https://nexa-wave-agency.vercel.app/",
      liveLinkCta: "nexa-wave... ",
      githubLink: "https://github.com/guristacks/Nexa-Wave-Agency",
    },
    {
      className: "site1",
      img: elenaMorganImg,
      identity: "Portfolio",
      tag1: "• Minimal",
      tag2: "2026",
      title: "Elena Morgan - Photography",
      description:
        "Elena Morgan captures timeless portraits, emotional moments, and cinematic stories.",
      tech: "Teck Stack",
      stack1: "Next.js",
      stack2: "React.js",
      stack3: "typeScript",
      stack4: "javaScript",
      stack5: "Html + Css",
      stack6: "Gsap",
      liveLink: "https://elena-morgan.vercel.app/",
      liveLinkCta: "elena-morgan...",
      githubLink: "https://github.com/guristacks/Elena-Morgan-Photography",
    },
    {
      className: "site2",
      img: stacksImg,
      identity: "Landing Page",
      tag1: "• Agency",
      tag2: "2026",
      title: "Stacks - IT Agency",
      description:
        "Stacks creates modern websites, seamless user experiences, and powerful digital solutions for businesses.",
      tech: "Teck Stack",
      stack1: "Html",
      stack2: "Css",
      stack3: "javaScript",
      stack4: "Gsap",
      stack5: "Lenis",
      liveLink: "https://stacks-design-development.vercel.app/",
      liveLinkCta: "stacks-design...",
      githubLink: "https://github.com/guristacks/Stacks-design-development",
    },
  ];

  return (
    <div className="sites flex f-clmn">
      {siteInfo.map((site, idx) => (
        <SiteCard
          key={idx}
          className={site.className}
          img={site.img}
          identity={site.identity}
          tag1={site.tag1}
          tag2={site.tag2}
          title={site.title}
          description={site.description}
          tech={site.tech}
          stack1={site.stack1}
          stack2={site.stack2}
          stack3={site.stack3}
          stack4={site.stack4}
          stack5={site.stack5}
          stack6={site.stack6}
          liveLink={site.liveLink}
          liveLinkCta={site.liveLinkCta}
          githubLink={site.githubLink}
        />
      ))}
    </div>
  );
};

export default WebsitePreview;
