import React from "react";
import "./Announcements.css";
import ScrollToTopOnMount from "../ScrollToTop";
import { AnnouncementsData } from "./AnnouncemetsData";

class Bakchodi extends React.Component {
  state = { karo: AnnouncementsData[7] };
  componentWillMount() {
    for (var i = 0; i <= AnnouncementsData.length; i++) {
      if (window.location.pathname === `/announcements/${i + 1}`) {
        this.setState({ karo: AnnouncementsData[i] });
      }
    }
  }
  render() {
    return (
      <div className="announcements-global padding-res">
        <ScrollToTopOnMount />
        <div className="announcements-inner">
          <h1>{this.state.karo.head}</h1>
          <p>{this.state.karo.para}</p>
          <a href={this.state.karo.link} target="blank">
            {this.state.karo.linkPara}
          </a>
        </div>
      </div>
    );
  }
}
export default Bakchodi;
