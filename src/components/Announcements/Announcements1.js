import React from "react";
import "./Announcements.css";
import Announcements from "./Announcements";
import { AnnouncementsData } from "./AnnouncemetsData";

class Announcements1 extends React.Component {
  componentDidMount() {
    document.title =
      "Announcements  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div>
        <Announcements data={AnnouncementsData.announcement1} />
      </div>
    );
  }
}
export default Announcements1;
