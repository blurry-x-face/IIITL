import React from "react";
import "./Announcements.css";
import ScrollToTopOnMount from "../ScrollToTop";

const Announcements = props => {
  return (
    <div className="announcements-global padding-res">
      <ScrollToTopOnMount />
      <div className="announcements-inner">
        <h1>{props.data.head}</h1>
        <p>{props.data.para}</p>
        <a href={props.data.link} target="blank">
          {props.data.linkPara}
        </a>
      </div>
    </div>
  );
};
export default Announcements;
