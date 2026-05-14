import React from "react";

const ProcessCard = (props) => {
  return (
    <div className="process">
      <div className="process-content">
        <h3>{props.processName}</h3>
        <div className="process-inner flex f-clmn">
          <p>{props.processDetails}</p>
          <a className="primaryBtn" href="#">
            Learn More <i className="ri-arrow-right-up-long-line"></i>
          </a>
        </div>
      </div>
      <div className="process-numbering">
        <h2>{props.processNum}</h2>
      </div>
    </div>
  );
};

export default ProcessCard;
