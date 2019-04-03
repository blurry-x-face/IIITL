import React from "react";
import "./Blog.css";
import Blog from "./Blog";
import { blogs } from "../Data";

class Blog3 extends React.Component {
  render() {
    return <Blog data={blogs[2]} />;
  }
}

export default Blog3;
