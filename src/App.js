import React, { Component, Fragment } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Ins, academicLinks, InsAdmin } from "./components/Data";

import AboveNav from "./components/Above-nav";
import "./components/Nav";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BoG from "./components/BoardGovernors";
import About from "./components/About";
import Senate from "./components/Senate";
import Cord from "./components/CordCommittee";
import SideCard from "./components/SideCard";
import Dir from "./components/DirectorMessage";
import Seat from "./components/SeatMatrix";
import Course from "./components/CourseStructure";
import FacultyCard from "./components/FacultyCard";
import FacultyTemplate from "./components/FacultyTemplate";
import Staff from "./components/Staff";

function SideRendering(props) {
  return (
    <Route
      exact={true}
      path={props.data.path}
      component={() => (
        <div className="division-global">
          <SideCard head={props.data.head} Ins={props.data.Ins} />
          {props.data.other}
          {/* <div /> */}
        </div>
      )}
    />
  );
}
const data = {
  faculty: {
    data: {
      path: "/faculty",
      Ins: InsAdmin,
      other: <FacultyCard />,
      head: "Administration"
    }
  },
  cord: {
    data: {
      path: "/co-ordination-committee",
      Ins: Ins,
      other: <Cord />,
      head: "Institution"
    }
  },
  about: {
    data: { path: "/About", Ins: Ins, other: <About />, head: "Institution" }
  },
  bog: {
    data: {
      path: "/board-governors",
      Ins: Ins,
      other: <BoG />,
      head: "Institution"
    }
  },
  dir: {
    data: {
      path: "/directorate",
      Ins: InsAdmin,
      other: <Dir />,
      head: InsAdmin.head
    }
  },
  senate: {
    data: {
      path: "/senate",
      Ins: Ins,
      other: <Senate />,
      head: Ins.head
    }
  },
  seatMatrix: {
    data: {
      path: "/seat-matrix",
      Ins: academicLinks,
      other: <Seat />,
      head: academicLinks.head
    }
  },
  courseStructure: {
    data: {
      path: "/course-structure",
      Ins: academicLinks,
      other: <Course />,
      head: academicLinks.head
    }
  }
};
// const NoMatch = () => {
//   return (
//     <h1 style={{ textAlign: "center", marginTop: "10%", paddingBottom: 300 }}>
//       Page Under Construction
//     </h1>
//   );
// };
class App extends Component {
  render() {
    return (
      <Fragment>
        {window.location.pathname === "/template" ? "" : <AboveNav />}
        {window.location.pathname === "/template" ? "" : <Nav />}
        <SideRendering data={data.faculty.data} />
        <SideRendering data={data.cord.data} />
        <SideRendering data={data.about.data} />
        <SideRendering data={data.bog.data} />
        <SideRendering data={data.dir.data} />
        <SideRendering data={data.senate.data} />
        <SideRendering data={data.seatMatrix.data} />
        <SideRendering data={data.courseStructure.data} />
        <Route path="/template" exact component={FacultyTemplate} />
        <Route path="/" exact component={Home} />
        <Route path="/staff" exat={true} component={Staff} />
        {/* <Route component={NoMatch} /> */}
        {window.location.pathname === "/template" ? "" : <Footer />}
      </Fragment>
    );
  }
}

export default App;
