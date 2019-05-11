import React, { Component, Fragment } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Ins, academicLinks, InsAdmin, cCMT } from "./components/Data";

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
import Niharika from "./components/Faculty/Niharika";
import Somendu from "./components/Faculty/Somendu";
import ST from "./components/Faculty/ST";
import PictureGallery from "./components/PictureGallery";
import AnnouncementsList from "./components/Announcements/MoreAnnouncements";
import AP from "./components/Faculty/AP";
import SG from "./components/Faculty/SG";
import MS from "./components/Faculty/Mary";
import BKC from "./components/Faculty/BKC";
import Blog1 from "./components/Blogs/Blog1";
import Blog2 from "./components/Blogs/Blog2";
import Blog3 from "./components/Blogs/Blog3";
import Recruitment from "./components/Recruitment";
import Director from "./components/Faculty/Dir";
import AdmissionIT from "./components/Admissions/IT/AdmissionIT";
import AdmissionCSE from "./components/Admissions/IT/AdmissionCSE";
import AdmissionsPhd from "./components/Admissions/IT/AdmissionsPhd";
import AM from "./components/Faculty/AM";
import AdmissionMtech from "./components/Admissions/IT/AdmissionMtech";
import CCMT from "./components/CCMT19";
import AnnouncementsAuto from "./components/Announcements/AnnouncementsAuto";
import { AnnouncementsData } from "./components/Announcements/AnnouncemetsData";
import Tender from './components/Announcements/Tenders';

class App extends Component {
  render() {
    return (
      <Fragment>
        {window.location.pathname === "/faculty/vks" ||
        window.location.pathname === "/faculty/shikha" ||
        window.location.pathname === "/faculty/niharika" ||
        window.location.pathname === "/faculty/somendu" ||
        window.location.pathname === "/faculty/ST" ||
        window.location.pathname === "/faculty/AP" ||
        window.location.pathname === "/faculty/SG" ||
        window.location.pathname === "/faculty/MS" ||
        window.location.pathname === "/faculty/BKC" ||
        window.location.pathname === "/faculty/dir" ||
        window.location.pathname === "/faculty/AM" ? (
          ""
        ) : (
          <AboveNav />
        )}
        {window.location.pathname === "/faculty/vks" ||
        window.location.pathname === "/faculty/shikha" ||
        window.location.pathname === "/faculty/niharika" ||
        window.location.pathname === "/faculty/somendu" ||
        window.location.pathname === "/faculty/ST" ||
        window.location.pathname === "/faculty/AP" ||
        window.location.pathname === "/faculty/SG" ||
        window.location.pathname === "/faculty/MS" ||
        window.location.pathname === "/faculty/BKC" ||
        window.location.pathname === "/faculty/dir" ||
        window.location.pathname === "/faculty/AM" ? (
          ""
        ) : (
          <Nav />
        )}
        <Route path="/faculty/vks" exact component={VKS} />
        <Route path="/faculty/ST" exact component={ST} />
        <Route path="/faculty/AP" exact component={AP} />
        <Route path="/faculty/SG" exact component={SG} />
        <Route path="/faculty/MS" exact component={MS} />
        <Route path="/faculty/AM" exact component={AM} />
        <Route path="/faculty/niharika" exact component={Niharika} />
        <Route path="/faculty/somendu" exact component={Somendu} />
        <Route path="/faculty/shikha" exact component={Shikha} />
        <Route path="/faculty/dir" exact component={Director} />
        <Route path="/faculty/BKC" exact component={BKC} />
        <Route path="/coming-soon" exact component={CommingSoon} />
        <Route path="/blogs/1" exact component={Blog1} />
        <Route path="/blogs/2" exact component={Blog2} />
        <Route path="/blogs/3" exact component={Blog3} />
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
        <SideRendering data={data.ccmt.data} />
        <Route path="/template" exact component={FacultyTemplate} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/btech-it" exact component={BTech} />
        <Route path="/btech-cs" exact component={BTechCS} />
        <Route path="/news" exact component={NewsList} />
        <Route path="/events" exact component={EventList} />
        <Route path="/gallery" exact component={PictureGallery} />
        <Route path="/" exact component={Home} />
        <Route path="/recruitment" exact component={Recruitment} />
        <Route path="/admissions/IT" exact component={AdmissionIT} />
        <Route path="/admissions/CSE" exact component={AdmissionCSE} />
        <Route path="/admissions/Phd" exact component={AdmissionsPhd} />
        <Route path="/admissions/MTECH" exact component={AdmissionMtech} />
        <Route path="/tenders" exact component={Tender} />
        <Route path="/announcements" exact component={AnnouncementsList} />
        {AnnouncementsData.map((v, i) => {
          return (
            <Route
              path={`/announcements/${i + 1}`}
              exact
              component={AnnouncementsAuto}
            />
          );
        })}
        {/* <Route path="/CCMT19" exact component={CCMT} /> */}
        {/* <Route path="/calender" exact component={AcademicShedule} /> */}
        {/* <Route component={NoMatch} /> */}
        {window.location.pathname === "/faculty/vks" ||
        window.location.pathname === "/faculty/shikha" ||
        window.location.pathname === "/faculty/niharika" ||
        window.location.pathname === "/faculty/somendu" ||
        window.location.pathname === "/faculty/ST" ||
        window.location.pathname === "/faculty/AP" ||
        window.location.pathname === "/faculty/SG" ||
        window.location.pathname === "/faculty/MS" ||
        window.location.pathname === "/faculty/BKC" ||
        window.location.pathname === "/faculty/dir" ||
        window.location.pathname === "/faculty/AM" ? (
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
  },
  ccmt: {
    data: {
      path: "/CCMT19",
      Ins: cCMT,
      other: <CCMT />,
      head: ""
    }
  }
};

export default App;
