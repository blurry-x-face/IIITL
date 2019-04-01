import React from "react";
import ScrollToTop from "./ScrollToTop";

const CommingSoon = () => {
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
};

export default CommingSoon;
