import React from "react";

const SiteCard = (props) => {
  return (
    <div className={`site ${props.className} flex`}>
      <div className="threeImages flex f-clmn">
        <img
          src={props.img}
          loading="lazy"
          alt="Modern agency website design"
        />
      </div>

      <div className="siteContent flex f-clmn">
        <div className="identity flex ac sb">
          <p>{props.identity}</p>
          <div className="short-id flex ac">
            <p>{props.tag1}</p>
            <p>{props.tag2}</p>
          </div>
        </div>

        <h3 className="title">{props.title}</h3>
        <p className="description">
          {props.description}
        </p>
        <h4>{props.tech}</h4>
        <div className="techStack flex ac">
          <p>{props.stack1}</p>
          <p>{props.stack2}</p>
          <p>{props.stack3}</p>
          <p>{props.stack4}</p>
          <p>{props.stack5}</p>
          <p>{props.stack6}</p>
        </div>
        <div className="siteBtns flex ac">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="primaryBtn"
            href={props.liveLink}
          >
            {props.liveLinkCta} <i className="ri-external-link-line"></i>
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            className="secondaryBtn"
            href={props.githubLink}
          >
            Github <i className="ri-github-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;
