import React from "react";
import "./Announcements.css";
import Announcements from "./Announcements";
import {AnnouncementsData} from "./AnnouncemetsData";

const Announcements1 = () => {
  return (
    <div>
      <Announcements data={AnnouncementsData.announcement1} />
    </div>
  );
};
export default Announcements1;
