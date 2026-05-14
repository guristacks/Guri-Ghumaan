import React from "react";
import ProcessCard from "./ProcessCard";

const AllProcess = () => {
  const processCardContent = [
    {
      title: "PERFORMANCE FIRST",
      description:
        "I focus on building websites that load fast and feel smooth from the first interaction. Performance is considered at every stage, from structure and assets to code quality and optimization, ensuring reliable results on real devices and networks.",
      processNum: "01",
    },
    {
      title: "CLEAN & SCALABLE CODE",
      description:
        "I write clean, well-structured, and maintainable code with a strong focus on clarity and long-term scalability. This approach makes projects easier to understand and extend over time, while reducing complexity and keeping the codebase reliable.",
      processNum: "02",
    },
    {
      title: "MODERN UI & UX",
      description:
        "I design and build interfaces with clarity, usability, and consistency in mind. Layouts, interactions, and responsive behavior are carefully crafted to provide an intuitive experience that works seamlessly across all devices and screen sizes.",
      processNum: "03",
    },
    {
      title: "SEO & BEST PRACTICES",
      description:
        "Websites are built using modern best practices and strong technical SEO foundations from the very beginning of the project. This includes clean structure, accessibility and optimization techniques that support visibility and performance.",
      processNum: "04",
    },
    {
      title: "RELIABLE DELIVERY",
      description:
        "From the initial idea to the final launch, I focus on clear communication, thoughtful planning, and reliable delivery at every stage of the process. Each project is carefully tested and refined to ensure stability, quality, and confidence when the product goes live.",
      processNum: "05",
    },
  ];

  return (
    <div className="allProcess">
      {processCardContent.map((pro, idx) => {
        return (
          <ProcessCard
            key={idx}
            processName={pro.title}
            processDetails={pro.description}
            processNum={pro.processNum}
          />
        );
      })}
    </div>
  );
};

export default AllProcess;
