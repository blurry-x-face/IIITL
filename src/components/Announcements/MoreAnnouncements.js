import React from "react";
import "./MoreAnnouncements.css";
import { Link } from "react-router-dom";
import { AnnouncementsData } from "./AnnouncemetsData";
import ScrollToTopOnMount from "../ScrollToTop";

class AnnouncementsList extends React.Component {
  componentDidMount() {
    document.title =
      "Announcements  | Indian Institute of Information Technology, Lucknow";
  }
  Article = props => {
    return (
      <li className="announcements-list">
        <Link
          to={`/announcements/${props.i + 1}`}
          className="announcements-link"
        >
          {props.data.head}
        </Link>
        {/* <p className="announcements-list-date">{props.data.date}</p> */}
      </li>
    );
  };
  Articles = props => {
    const list = props.data.map((value, index) => {
      return <this.Article data={value} i={index} key={index} />;
    });
    return (
      <ul
        style={{ display: "flex", flexDirection: "column-reverse" }}
        className="announcements-list-inner-global"
      >
        {list}
      </ul>
    );
  };
  render() {
    return (
      <div className="announcements-list-global padding-res">
        <ScrollToTopOnMount />
        <div className="event-list-head">
          <h1>Announcements from IIIT Lucknow</h1>
        </div>
        <this.Articles data={AnnouncementsData} />
      </div>
    );
  }
}
export default AnnouncementsList;
