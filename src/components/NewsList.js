import React from "react";
import "./NewsList.css";
import { blogs } from "./Data";
import ScrollToTopOnMount from "./ScrollToTop";
import { Link } from "react-router-dom";

class NewsList extends React.Component {
  Item = props => {
    return (
      <div className="list-blog">
        <div className="list-center-res">
          <img src={props.data.img} alt="img" />
        </div>
        <Link to={props.data.link}>
          <div className="list-blog-post">
            <h1 className="list-blog-post-head">{props.data.head}</h1>

            <p className="list-blog-post-p">{props.data.para}</p>
          </div>
        </Link>
      </div>
    );
  };
  componentDidMount() {
    document.title =
      "News  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="news-list-global">
        <ScrollToTopOnMount />
        <div className="news-list-head">
          <h1>News from IIIT Lucknow</h1>
        </div>
        <this.Item data={blogs[0]} />
        <this.Item data={blogs[1]} />
        <this.Item data={blogs[2]} />
      </div>
    );
  }
}
export default NewsList;
