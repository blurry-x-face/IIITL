import React from "react";
import "./Announcements.css";
import Announcements from "./Announcements";
import AnnouncementsData from "./AnnouncemetsData";

const Announcements4 = () => {
  return (
    <div>
      <Announcements data={AnnouncementsData.announcement4} />
    </div>
  );
};
export default Announcements4;
