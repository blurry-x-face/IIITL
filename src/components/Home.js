import React from "react";
import Carousel from "./Carousel";
// import Card from "./Card";
import Sudhar from "./ImageGrid";
// import Sudhar from "./Sudhar";
import { Link } from "react-router-dom";
import Latest from "./Latest";
import News from "./News";

const Home = () => {
  return (
    <div className="home padding-res">
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee
        scrollAmount="8"
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
          <Link to="/announcements/1">
            Logo Design Contest for IIIT-Lucknow
          </Link>
        </span>
        <span style={{ marginLeft: "200px", cursor: "pointer" }}>
          <i
            class="fas fa-circle"
            style={{ fontSize: "0.7em", color: "black" }}
          />
          <Link to="/announcements/2">Updated Fee Structure, 2019</Link>
        </span>
        <span style={{ marginLeft: "200px", cursor: "pointer" }}>
          <i
            class="fas fa-circle"
            style={{ fontSize: "0.7em", color: "black" }}
          />
          <Link to="/announcements/3">
            Postponement of Selection Process on 14th October 2018 for IIIT
          </Link>
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
