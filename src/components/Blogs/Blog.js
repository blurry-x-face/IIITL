import React from "react";
import "./Blog.css";
import ScrollToTopOnMount from "../ScrollToTop";

const Blog = props => {
  return (
    <div className="new-blog-global padding-res">
      <ScrollToTopOnMount />
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
