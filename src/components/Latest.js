import React from "react";
import "./Latest.css";
import { Link } from "react-router-dom";
import { AnnouncementsData } from "./Announcements/AnnouncemetsData";

class Latest extends React.Component {
  state = {
    Announcements: AnnouncementsData.slice(
      AnnouncementsData.length - 4,
      AnnouncementsData.length
    )
  };
  List = props => {
    let list = props.data.map((v, i) => {
      return (
        <Link to={`/announcements/${i + AnnouncementsData.length - 3}`}>
          <div className="box-1 hidden1 active1">
            {" "}
            <p className="latest-blog-date">{v.date}</p>{" "}
            <p className="latest-blog-head">{v.head}</p>{" "}
            <p className="latest-blog-content">{v.p}</p>
          </div>
        </Link>
      );
    });
    return <div className="blog-container-contents">{list.reverse()}</div>;
  };
  render() {
    return (
      <div className="latest-global">
        <div className="blog-container-head curious-head">
          Announcements from IIITL
        </div>
        <div className="blog-container-global">
          <this.List data={this.state.Announcements} />
        </div>
        <div className="latest-more">
          <h3>
            <Link to="/announcements"> Read More-></Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default Latest;
