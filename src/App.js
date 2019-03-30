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
import CommingSoon from "./components/CommingSoon";
import VKS from "./components/Faculty/VKS";
import Shikha from "./components/Faculty/Shikha";
import Downloads from "./components/Downloads";
import ContactUs from "./components/ContacUs";
import BTech from "./components/BTechIT";
import BTechCS from "./components/BTechCS";
import AcademicShedule from "./components/AcademicShedule";
import NewsList from "./components/NewsList";
import EventList from "./components/EventsList";

class App extends Component {
  render() {
    return (
      <Fragment>
        {window.location.pathname === "/faculty/vks" ||
        window.location.pathname === "/faculty/shikha" ? (
          ""
        ) : (
          <AboveNav />
        )}
        {window.location.pathname === "/faculty/vks" ||
        window.location.pathname === "/faculty/shikha" ? (
          ""
        ) : (
          <Nav />
        )}
        <Route path="/faculty/vks" exact component={VKS} />
        <Route path="/faculty/shikha" exact component={Shikha} />
        <Route path="/comming-soon" exact component={CommingSoon} />
        <SideRendering data={data.staff.data} />
        <SideRendering data={data.faculty.data} />
        <SideRendering data={data.cord.data} />
        <SideRendering data={data.about.data} />
        <SideRendering data={data.bog.data} />
        <SideRendering data={data.dir.data} />
        <SideRendering data={data.senate.data} />
        <SideRendering data={data.seatMatrix.data} />
        <SideRendering data={data.courseStructure.data} />
        <SideRendering data={data.calender.data} />
        <SideRendering data={data.downloads.data} />
        <Route path="/template" exact component={FacultyTemplate} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/btech-it" exact component={BTech} />
        <Route path="/btech-cs" exact component={BTechCS} />
        <Route path="/news" exact component={NewsList} />
        <Route path="/events" exact component={EventList} />
        <Route path="/" exact component={Home} />
        {/* <Route path="/calender" exact component={AcademicShedule} /> */}
        {/* <Route component={NoMatch} /> */}
        {window.location.pathname === "/faculty/vks" ||
        window.location.pathname === "/faculty/shikha" ? (
          ""
        ) : (
          <Footer />
        )}
      </Fragment>
    );
  }
}

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
  },
  staff: {
    data: {
      path: "/staff",
      Ins: InsAdmin,
      other: <Staff />,
      head: InsAdmin.head
    }
  },
  downloads: {
    data: {
      path: "/downloads",
      Ins: InsAdmin,
      other: <Downloads />,
      head: InsAdmin.head
    }
  },
  calender: {
    data: {
      path: "/calender",
      Ins: academicLinks,
      other: <AcademicShedule />,
      head: academicLinks.head
    }
  }
};

export default App;
