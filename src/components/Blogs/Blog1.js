import React from "react";
import "./Blog.css";
import image from "../../assets/dr-arun-sherry.jpg";

class Blog extends React.Component {
  render() {
    return (
      <div className="new-blog-global">
        <div className="new-blog-inner">
          <img src={image} alt="img" />
          <div className="new-blog-post">
            <h1 className="new-blog-post-head">
              IIIT Lucknow welcomes Founding Director Dr. Arun Mohan Sherry
            </h1>
            <p className="new-blog-post-p">
              Prof. Arun Mohan Sherry, an alumnus of IIT-Kharagpur has been
              appointed the founding director of the Indian Institute of
              Information Technology (IIIT), Lucknow.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
