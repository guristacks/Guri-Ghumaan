import React from "react";
import nexaWaveImg from "../../assets/Images/Work/nexa-mockup.webp";
import elenaMorganImg from "../../assets/Images/Work/Elena-Morgan-Mockup.webp";
import stacksImg from "../../assets/Images/Work/Stacks-Mockup.webp";
import aurumImg from "../../assets/Images/Work/Aurum-Mockup.webp";
import SiteCard from "./SiteCard";

const WebsitePreview = () => {
  const siteInfo = [
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
      stack1: "React.js",
      stack2: "javaScript",
      stack3: "Gsap",
      stack4: "Html5",
      stack5: "Css3",
      stack6: "Lenis",
      liveLink: "https://stacks-design-development.vercel.app/",
      liveLinkCta: "stacks-design...",
      githubLink: "https://github.com/guristacks/Stacks-design-development",
    },
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
      stack1: "Html5",
      stack2: "Css3",
      stack3: "javaScript",
      stack4: "Gsap",
      stack5: "Lenis",
      liveLink: "https://nexa-wave-agency.vercel.app/",
      liveLinkCta: "nexa-wave... ",
      githubLink: "https://github.com/guristacks/Nexa-Wave-Agency",
    },
    {
      className: "site3",
      img: aurumImg,
      identity: "Landing Page",
      tag1: "• Jwellery Shop",
      tag2: "2026",
      title: "Aurum Luxe - Jewellery",
      description:
        "Crafting luxurious, handcrafted jewellery pieces blending modern elegance, premium materials for every occasion.",
      tech: "Teck Stack",
      stack1: "Html5",
      stack2: "Css3",
      stack3: "javaScript",
      stack4: "Gsap",
      stack5: "Lenis",
      liveLink: "https://aurum-luxe-jewellery.vercel.app/",
      liveLinkCta: "aurum-luxe... ",
      githubLink: "https://github.com/guristacks/Aurum-Luxe-Jewellery",
    },
    {
      className: "site1",
      img: elenaMorganImg,
      identity: "Portfolio",
      tag1: "• Minimal",
      tag2: "2026",
      title: "Elena Morgan - Photography",
      description:
        "Elena Morgan Capturing timeless emotions, elegant portraits, and cinematic stories through natural light, creativity, and authenticity.",
      tech: "Teck Stack",
      stack1: "Next.js",
      stack2: "React.js",
      stack3: "Gsap",
      stack4: "typeScript",
      stack5: "javaScript",
      stack6: "Html5 + Css3",
      liveLink: "https://elena-morgan.vercel.app/",
      liveLinkCta: "elena-morgan...",
      githubLink: "https://github.com/guristacks/Elena-Morgan-Photography",
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
