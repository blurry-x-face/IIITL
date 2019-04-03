import React from "react";
import "./Blog.css";

const Blog = props => {
  return (
    <div className="new-blog-global padding-res">
      <div className="new-blog-inner">
        <img src={props.data.img} alt="img" />
        <div className="new-blog-post">
          <h1 className="new-blog-post-head">{props.data.head}</h1>
          <p className="new-blog-post-p">{props.data.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
// IIIT Lucknow welcomes Founding Director Dr. Arun Mohan Sherry
