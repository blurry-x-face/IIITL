import React, { Component, Fragment } from "react";
import "./App.css";

import { Route } from "react-router-dom";
import { Ins, academicLinks, InsAdmin, cCMT } from "./components/Data";

import AboveNav from "./components/Above-nav";
import "./components/Nav";
import Nav from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BoG from "./components/BoardGovernors";
import About from "./components/About";
import Senate from "./components/Senate";
import SideCard from "./components/SideCard";
import Dir from "./components/DirectorMessage";
import Seat from "./components/SeatMatrix";
import Course from "./components/CourseStructureAll";
import CourseIT from "./components/CourseStructureIT";
import FacultyCard from "./components/FacultyCard";
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
import AdmissionCS from "./components/Admissions/IT/AdmissionCSE";
import AdmissionsPhd from "./components/Admissions/IT/AdmissionsPhd";
import AM from "./components/Faculty/AM";
import AdmissionMtech from "./components/Admissions/IT/AdmissionMtech";
import CCMT from "./components/CCMT19";
import AnnouncementsAuto from "./components/Announcements/AnnouncementsAuto";
import { AnnouncementsData } from "./components/Announcements/AnnouncemetsData";
import Tender from "./components/Announcements/Tenders";
import FinanceCommitte from "./components/FinanceCommitte";
import Scholarships from "./components/Scholarships";

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
        {routePath.map((v, i) => (
          <Route path={v.path} exact component={v.component} key={i} />
        ))}
        {/* {sideRenderData.map((v, i) => {
          return <SideRendering data={v.data} key={i} />;
        })} */}
        <Route path="/blogs/1" exact component={Blog1} />
        <Route path="/blogs/2" exact component={Blog2} />
        <Route path="/blogs/3" exact component={Blog3} />
        <SideRendering data={data.staff.data} />
        <SideRendering data={data.faculty.data} />
        <SideRendering data={data.about.data} />
        <SideRendering data={data.bog.data} />
        <SideRendering data={data.dir.data} />
        <SideRendering data={data.senate.data} />
        <SideRendering data={data.finance.data} />
        <SideRendering data={data.seatMatrix.data} />
        <SideRendering data={data.courseStructure.data} />
        <SideRendering data={data.courseStructureIT.data} />
        <SideRendering data={data.calender.data} />
        <SideRendering data={data.downloads.data} />
        <SideRendering data={data.ccmt.data} />
        <Route path="/" exact component={Home} />
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
  console.log(props);
  return (
    <Route
      exact={true}
      path={props.data.path}
      component={() => {
        return (
          <div className="division-global">
            <SideCard head={props.data.head} Ins={props.data.Ins} />
            {props.data.other}
          </div>
        );
      }}
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
  courseStructureIT: {
    data: {
      path: "/course-structure-it",
      Ins: academicLinks,
      other: <CourseIT />,
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
  },
  finance: {
    data: {
      path: "/finance-committee",
      Ins: Ins,
      other: <FinanceCommitte />,
      head: InsAdmin.head
    }
  }
};

/* const sideRenderData = [
  { data: data.staff.data },
  { data: data.finance.data },
  { data: data.ccmt.data },
  { data: data.calender.data },
  { data: data.courseStructure.data },
  { data: data.courseStructureIT.data },
  { data: data.about },
  { data: data.bog.data },
  { data: data.dir.data },
  { data: data.seatMatrix.data },
  { data: data.senate.data },
  { data: data.downloads.data },
  { data: data.faculty.data }
]; */
const routePath = [
  { path: "/faculty/vks", component: VKS },
  { path: "/faculty/ST", component: ST },
  { path: "/faculty/AP", component: AP },
  { path: "/faculty/SG", component: SG },
  { path: "/faculty/MS", component: MS },
  { path: "/faculty/AM", component: AM },
  { path: "/faculty/niharika", component: Niharika },
  { path: "/faculty/somendu", component: Somendu },
  { path: "/faculty/shikha", component: Shikha },
  { path: "/faculty/dir", component: Director },
  { path: "/faculty/BKC", component: BKC },
  { path: "/coming-soon", component: CommingSoon },
  { path: "/contactus", component: ContactUs },
  { path: "/btech-it", component: BTech },
  { path: "/btch-cs", component: BTechCS },
  { path: "/news", component: NewsList },
  { path: "/events", component: EventList },
  { path: "/gallery", component: PictureGallery },
  { path: "/recruitment", component: Recruitment },
  { path: "/admissions-IT", component: AdmissionIT },
  { path: "/admissions-CS", component: AdmissionCS },
  { path: "/admissions-Phd", component: AdmissionsPhd },
  { path: "/admissions-MTECH", component: AdmissionMtech },
  { path: "/tenders", component: Tender },
  { path: "/announcements", component: AnnouncementsList },
  { path: "/scholarship", component: Scholarships }
];
export default App;
