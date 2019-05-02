import React from "react";
import Carousel from "./Carousel";
// import Card from "./Card";
import Sudhar from "./ImageGrid";
// import Sudhar from "./Sudhar";
import { Link } from "react-router-dom";
import Latest from "./Latest";
import News from "./News";
import ScrollToTopOnMount from "./ScrollToTop";
import tenderPDF from "../assets/downloads/Tender.pdf";
import tendorExtension from "../assets/downloads/Tender_Extension.pdf";
import tendorVehicle from "../assets/announcementsData/FINAL TENDER DOCUMENT FOR RATE CONTRACT FOR HIRING OF DIFFERENT TYPE OF VEHICLES FOR IIIT LUCKNOW.pdf";
import { AnnouncementsData } from "./Announcements/AnnouncemetsData";

class Home extends React.Component {
  state = {
    marqueeData: AnnouncementsData.slice(
      AnnouncementsData.length - 4,
      AnnouncementsData.length
    ).reverse()
  };
  Marquee = props => {
    let list = props.data.map((v, i) => {
      return (
        <span style={{ cursor: "pointer" }}>
          <i
            class="fas fa-circle"
            style={{
              marginLeft: i === 0 ? "0px" : "200px",
              fontSize: "0.7em",
              marginBottom: 3,
              color: "black"
            }}
          />
          <a key={i} target="blank" href={tendorExtension}>
            {v.marquee}
          </a>
        </span>
      );
    });
    return (
      //eslint-disable-next-line jsx-a11y/no-distracting-elements
      <marquee
        scrollAmount="6"
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
        {list}
      </marquee>
    );
  };
  componentDidMount() {
    document.title =
      "Home  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="home padding-res">
        <ScrollToTopOnMount />
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
        <this.Marquee data={this.state.marqueeData} />
        <Carousel />
        <Latest />
        <Sudhar />
        <News />
      </div>
    );
  }
}
export default Home;
