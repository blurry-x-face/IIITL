import React from "react";
import "./Blog.css";
import Blog from "./Blog";
import {blogs} from "../Data";

class Blog1 extends React.Component {
  render() {
    return <Blog data={blogs[0]} />;
  }
}

export default Blog1;
