import React from "react";
import "./Blog.css";
import Blog from "./Blog";
import { blogs } from "../Data";

class Blog1 extends React.Component {
  componentDidMount() {
    document.title =
      "News  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return <Blog data={blogs[0]} />;
  }
}

export default Blog1;
