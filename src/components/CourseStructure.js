import React from "react";
import "./CourseStructure.css";
import { courseStructure } from "./Data";
import ScrollToTopOnMount from "./ScrollToTop";

class Course extends React.Component {
  state = { isOpen: false, prevID: "", isFirst: true };
  doSomething = id => {
    if (this.state.prevID !== id) {
      this.setState({ isOpen: false });
    }
    let element = document.getElementById(id);
    if (!this.state.isFirst) {
      let prevElement = document.getElementById(this.state.prevID);
      prevElement.style.display = "none";
      debugger;
      console.log(this.state.prevID);
    }
    if (!this.state.isOpen) {
      element.style.display = "flex";
      console.log("lola");
    } else {
      element.style.display = "none";
    }
    if (this.state.prevID === id) {
      this.setState({ isOpen: !this.state.isOpen });
    }
    this.setState({ prevID: id });
    this.setState({ isFirst: false });
  };
  Row = props => {
    let row = [];
    for (var i = 0; i < 6; i++) {
      row.push(<td>{Object.entries(props.sem)[i][1][props.j]}</td>);
    }
    return <tr>{row}</tr>;
  };
  TBody = props => {
    let tBody = [];
    for (var i = 0; i < props.j; i++) {
      tBody.push(<this.Row j={i} sem={props.sem} />);
    }
    return <tbody>{tBody}</tbody>;
  };

  TableHead = () => {
    let tHead = courseStructure.tableHead.map(content => <th>{content}</th>);
    return (
      <thead>
        <tr>{tHead}</tr>
      </thead>
    );
  };

  Table = props => {
    return (
      <table className="course-table">
        <this.TableHead />
        <this.TBody j={props.j} sem={props.sem} />
      </table>
    );
  };
  Sem = props => {
    return (
      <div className="course-sem">
        <div className="sem-head center ">
          <div
            className="sem-head-inner"
            onClick={() => this.doSomething(`${props.sem.name}`)}
          >
            {props.head}
          </div>
        </div>
        <div className="sem-table center" id={props.sem.name}>
          <this.Table j={props.j} sem={props.sem} />
        </div>
      </div>
    );
  };
  componentDidMount() {
    document.title =
      "Course Structure  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="course-global width-res">
        <ScrollToTopOnMount />
        <div className="course-head">Course Structure</div>
        <this.Sem j={7} sem={courseStructure.sem1} head={"Semester-1"} />
        <this.Sem j={6} sem={courseStructure.sem2} head={"Semester-2"} />
        <this.Sem j={5} sem={courseStructure.sem3} head={"Semester-3"} />
        <this.Sem j={5} sem={courseStructure.sem4} head={"Semester-4"} />
        <this.Sem j={6} sem={courseStructure.sem5} head={"Semester-5"} />
        <this.Sem j={7} sem={courseStructure.sem6} head={"Semester-6"} />
        <this.Sem j={7} sem={courseStructure.sem7} head={"Semester-7"} />
        <this.Sem j={2} sem={courseStructure.sem8} head={"Semester-8"} />
        <this.Sem j={7} sem={courseStructure.sem1} head={"Electives"} />
      </div>
    );
  }
}
export default Course;
