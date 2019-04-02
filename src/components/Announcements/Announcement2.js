import React from "react";
import "./Announcements.css";
import Announcements from "./Announcements";
import {AnnouncementsData} from "./AnnouncemetsData";

const Announcements2 = () => {
  return (
    <div>
      <Announcements data={AnnouncementsData.announcement2} />
    </div>
  );
};
export default Announcements2;
