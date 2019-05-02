import React from "react";
import "./Director.css";
import ScrollToTopOnMount from "./ScrollToTop";

class Dir extends React.Component {
  componentDidMount() {
    document.title =
      "Director's Message  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="dir-global padding-res" id="dir-padding">
        <ScrollToTopOnMount />
        <div className="dir-inner">
          <div className="dir-head">
            <p className="dir-head-p">Director's Message</p>
          </div>
          <div className="dir-contents">
            <div className="dir-content-left">
              <div className="dir-card">
                <div className="dir-img" />
                <div style={{display: "flex", justifyContent: "center", marginTop: "5px"}}>
                <div className="dir-name">
                Dr. Arun Mohan Sherry, Founding Director, IIIT Lucknow
                </div>
              </div>
              </div>
            </div>
            <div className="dir-content-right">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dir;
