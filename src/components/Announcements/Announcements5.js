import React from "react";
import "./Announcements.css";
import Announcements from "./Announcements";
import AnnouncementsData from "./AnnouncemetsData";

const Announcements5 = () => {
  return (
    <div>
      <Announcements data={AnnouncementsData.announcement5} />
    </div>
  );
};
export default Announcements5;
