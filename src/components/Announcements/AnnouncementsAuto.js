import React from "react";
import "./Announcements.css";
import ScrollToTopOnMount from "../ScrollToTop";
import { AnnouncementsData } from "./AnnouncemetsData";

class AnnouncementsAuto extends React.Component {
  state = { aData: AnnouncementsData[7] };
  componentWillMount() {
    for (var i = 0; i <= AnnouncementsData.length; i++) {
      if (window.location.pathname === `/announcements/${i + 1}`) {
        this.setState({ aData: AnnouncementsData[i] });
      }
    }
  }
  render() {
    return (
      <div className="announcements-global padding-res">
        <ScrollToTopOnMount />
        <div className="announcements-inner">
          <h1>{this.state.aData.head}</h1>
          <p>{this.state.aData.para}</p>
          <a href={this.state.aData.link} target="blank">
            {this.state.aData.linkPara}
          </a>
        </div>
      </div>
    );
  }
}
export default AnnouncementsAuto;
