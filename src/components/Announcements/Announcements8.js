import React from "react";
import "./Announcements.css";
import Announcements from "./Announcements";
import { AnnouncementsData } from "./AnnouncemetsData";

class Announcements8 extends React.Component {
  componentDidMount() {
    document.title =
      "Announcements  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div>
        <Announcements data={AnnouncementsData.announcement8} />
      </div>
    );
  }
}
export default Announcements8;
