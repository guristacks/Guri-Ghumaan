import React from "react";
import WorkTitle from "./workTitle";
import WorkCta from "./workCta";
import WebsitePreview from "./websitePreview";

const work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <WorkTitle />

        <WebsitePreview />

        <WorkCta />
      </div>
    </section>
  );
};

export default work;
