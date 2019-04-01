import React from "react";
import "./Announcements.css";
import Announcements from "./Announcements";
import AnnouncementsData from "./AnnouncemetsData";

const Announcements3 = () => {
  return (
    <div>
      <Announcements data={AnnouncementsData.announcement3} />
    </div>
  );
};
export default Announcements3;
