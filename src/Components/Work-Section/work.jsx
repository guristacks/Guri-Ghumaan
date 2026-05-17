import React from "react";
import WorkTitle from "./workTitle";
import WebsitePreview from "./websitePreview";

const Work = () => {

  return (
    <section id="work" className="work">
      <div className="container">
        <WorkTitle />
        <WebsitePreview />
      </div>
    </section>
  );
};

export default Work;
