import React from "react";
import Carousel from "./Carousel";
// import Card from "./Card";
import Sudhar from "./ImageGrid";
// import Sudhar from "./Sudhar";
import Latest from "./Latest";
import News from "./News";

const Home = () => {
  return (
    <div className="home padding-res">
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee
        scrollAmount="10"
        behaviour="alternate"
        onMouseOver="this.stop();"
        style={{
          width: "100%",
          height: 20,
          padding: "20px 0 5px 0",
          fontSize: "13px",
          color: "black"
        }}
      >
        <span style={{ cursor: "pointer" }}>
          <i
            class="fas fa-circle"
            style={{ fontSize: "0.7em", marginBottom: 3, color: "black" }}
          />
          Logo Design Contest for IIIT-Lucknow
        </span>
        <span style={{ marginLeft: "200px", cursor: "pointer" }}>
          <i
            class="fas fa-circle"
            style={{ fontSize: "0.7em", color: "black" }}
          />
          Updated Fee Structure, 2019
        </span>
        <span style={{ marginLeft: "200px", cursor: "pointer" }}>
          <i
            class="fas fa-circle"
            style={{ fontSize: "0.7em", color: "black" }}
          />
          Postponement of Selection Process on 14th October 2018 for IIIT
          Lucknow
        </span>
      </marquee>
      <Carousel />
      {/* <Card /> */}
      <Latest />
      <Sudhar />
      <News />
      {/* <Map /> */}
    </div>
  );
};
export default Home;
