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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5px"
                  }}
                />
              </div>
            </div>
            <div className="dir-content-right">
              IIIT- Lucknow is a growing Institute amongst the Institutes of
              national importance in India.
              <br />
              <br />
              Intellect is an inner ability that can be achieved through
              education and scientific approach. Technical education carves the
              personality of students and also paves the way for self-reliance.
              <br />
              <br />
              Knowledge is an effective tool to drive the world by own
              innovations and inventions. IIIT-Lucknow is focusing on
              augmentation of scientific and technical knowledge so as to create
              expertise in different arena and is committed to providing
              opportunities to achieve success.
              <br />
              <br />
              The Institute is not only imparting knowledge in Computer Science
              but also focusing on Data Science, Artificial Intelligence and
              Research outcomes vis-a-vis learning environment.
              <br />
              <br />
              IIIT-Lucknow is in full swing to create inquisitiveness and
              promote scientific temper amongst its students.
              <br />
              <br />I am fully confident that the future of all fresher is
              bright and will definitely touch the peak of success.
              <br />
              <br />
              With good wishes,
              <br />
              <br />
              <strong style={{ color: "#23232491" }}>
                Dr. Arun Mohan Sherry
              </strong>
              <br />
              <strong style={{ color: "#23232491" }}>
                Founding Director, IIIT Lucknow
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dir;
