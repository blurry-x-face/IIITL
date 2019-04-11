import React, { Component, Fragment } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Ins, academicLinks, InsAdmin } from "./components/Data";

// import blogImage1 from "./assets/dr-arun-sherry.jpg";

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
import Announcements1 from "./components/Announcements/Announcements1";
import Announcements2 from "./components/Announcements/Announcement2";
import Announcements3 from "./components/Announcements/Announcement3";
import Announcements4 from "./components/Announcements/Announcements4";
import Announcements5 from "./components/Announcements/Announcements5";
import AnnouncementsList from "./components/Announcements/MoreAnnouncements";
import AP from "./components/Faculty/AP";
import SG from "./components/Faculty/SG";
import MS from "./components/Faculty/Mary";
import BKC from "./components/Faculty/BKC";
import Blog1 from "./components/Blogs/Blog1";
import Blog2 from "./components/Blogs/Blog2";
import Blog3 from "./components/Blogs/Blog3";
import Recruitment from "./components/Recruitment";

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
        window.location.pathname === "/faculty/BKC" ? (
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
        window.location.pathname === "/faculty/BKC" ? (
          ""
        ) : (
          <Nav />
        )}
        <Route path="/faculty/vks" exact component={VKS} />
        <Route path="/faculty/ST" exact component={ST} />
        <Route path="/faculty/AP" exact component={AP} />
        <Route path="/faculty/SG" exact component={SG} />
        <Route path="/faculty/MS" exact component={MS} />
        <Route path="/faculty/niharika" exact component={Niharika} />
        <Route path="/faculty/somendu" exact component={Somendu} />
        <Route path="/faculty/shikha" exact component={Shikha} />
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
        <Route path="/template" exact component={FacultyTemplate} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/btech-it" exact component={BTech} />
        <Route path="/btech-cs" exact component={BTechCS} />
        <Route path="/news" exact component={NewsList} />
        <Route path="/events" exact component={EventList} />
        <Route path="/gallery" exact component={PictureGallery} />
        <Route path="/" exact component={Home} />
        <Route path="/recruitment" exact component={Recruitment} />
        <Route path="/announcements" exact component={AnnouncementsList} />
        <Route path="/announcements/1" exact component={Announcements1} />
        <Route path="/announcements/2" exact component={Announcements2} />
        <Route path="/announcements/3" exact component={Announcements3} />
        <Route path="/announcements/4" exact component={Announcements4} />
        <Route path="/announcements/5" exact component={Announcements5} />
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
        window.location.pathname === "/faculty/BKC" ? (
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

// const blogs = [
//   {
//     head: "IIIT Lucknow welcomes Founding Director Dr. Arun Mohan Sherry",
//     para: "IIIT Lucknow welcomes Founding Director Dr. Arun Mohan Sherry",
//     img: { blogImage1 }
//   }
// ];
// const BlogsG = props => {
//   return;
// };

export default App;
