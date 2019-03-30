import React from "react";
import "./EventList.css";
import { article } from "./Data";
import { Link } from "react-router-dom";

class EventList extends React.Component {
  Article = props => {
    return (
      <div className="events-list-news-article">
        <Link to="/comming-soon" className="events-list-news-link fonts">
          {props.data.article}
        </Link>
        <p className="events-list-date">{props.data.date}</p>
      </div>
    );
  };
  Articles = props => {
    const list = props.data.map((value, index) => {
      return <this.Article data={value} key={index} />;
    });
    return <div className="event-list">{list}</div>;
  };
  render() {
    return (
      <div className="event-list-global padding-res">
        <div className="event-list-head">
          <h1>Events at IIIT Lucknow</h1>
        </div>
        <this.Articles data={article} />
      </div>
    );
  }
}
export default EventList;
