import React, { Component } from "react";
import "./CourseStructure.css";
import ScrollToTopOnMount from "./ScrollToTop";
import Link from "react-router-dom/Link";
import CourseStructureCS from "../assets/blogs/B.TECH.IIITL.23.05.19-converted-1.pdf";
import CourseStructureMTECH from "../assets/blogs/M.TECH.CS.IIITL.23.05.19-converted-2.pdf";

export default class CourseStructureAll extends Component {
  componentDidMount() {
    document.title =
      "Course Structure  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="course-global course-global-all width-res">
        <ScrollToTopOnMount />
        <div className="course-head">Course Structure</div>
        <ul>
          <li>
            <Link to="/course-structure-it">B.Tech in IT</Link>
          </li>
          <li>
            <a href={CourseStructureCS} target="blank">
              B.Tech in CS
            </a>
          </li>
          <li>
            <a href={CourseStructureMTECH} target="blank">
              M.Tech in CS
            </a>
          </li>
          <li>
            <Link to="/coming-soon">PhD in IT</Link>
          </li>
        </ul>
      </div>
    );
  }
}
