import React from "react";
import ScrollToTop from "./ScrollToTop";

class CommingSoon extends React.Component {
  componentDidMount() {
    document.title =
      "Comming Soon  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div>
        <ScrollToTop />
        <img
          src="https://safekozani.gr/images/coming-soon.png"
          alt="comming soon"
          style={{
            marginLeft: "30%",
            width: "40%",
            marginTop: "10%",
            marginBottom: "10%"
          }}
        />
      </div>
    );
  }
}

export default CommingSoon;
