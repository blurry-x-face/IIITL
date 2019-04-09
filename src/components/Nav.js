import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import AltNav from "./Alt-nav";
import RTI from "../assets/downloads/RTI - PDF.pdf";
import timeTable from "../assets/downloads/Time_Table.pdf";
import pdfFee from "../assets/blogs/fee-structure.pdf";

// import Sidebar from "./Sidebar";
class Nav extends React.Component {
  state = {
    isOpen: false,
    prevSelect: ""
  };
  openNav() {
    document.getElementById("alt-nav-id").style.display = "block";
    document.getElementById("btn-open").style.display = "none";
    document.getElementById("btn-close").style.display = "inline";
    // console.log("open!!");
  }
  closeNav() {
    document.getElementById("alt-nav-id").style.display = "none";
    document.getElementById("btn-open").style.display = "inline";
    document.getElementById("btn-close").style.display = "none";
    // console.log("open!!");
  }
  altDrop = n => {
    let display = document.getElementById(n);
    let prevDisp;
    prevDisp =
      this.state.prevSelect !== ""
        ? document.getElementById(this.state.prevSelect)
        : "";
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
      prevDisp.style.display = "none";
      if (n !== this.state.prevSelect) {
        this.setState({ isOpen: true });
        display.style.display = "grid";
      }
    } else if (!this.state.isOpen) {
      this.setState({ isOpen: true });
      display.style.display = "grid";
    }
    this.setState({ prevSelect: n });
  };
  render() {
    return (
      <nav className="nav-global">
        <div className="nav-flex padding-res">
          <div className="navbar">
            {/* <NavLink
            to="#home"
            style={{
              margin: "0 0 0 2.5vw",
              fontFamily: "Playfair Display"
            }}
            id="nav-head"
          >
            IIIT LUCKNOW
          </NavLink> */}
            <div className="flex-grows" />
            <div className="dropdown nav-res">
              <button className="dropbtn">
                Institute
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Institute
                  </div>
                  <NavLink to="/About" className="af-1">
                    At a Glance
                  </NavLink>
                  <a
                    href="https://iiitcouncil.com/"
                    target="blank"
                    className="af-1"
                  >
                    IIIT Council
                  </a>
                  <NavLink to="/board-governors" className="af-1">
                    Board of Governors
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Finance Committee
                  </NavLink>
                  <NavLink to="/Senate" className="af-1">
                    Senate
                  </NavLink>
                  <NavLink to="/contactus" className="af-1">
                    Reach Us
                  </NavLink>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-2-head dropdown-content-head">
                    Administration
                  </div>
                  <NavLink to="/directorate" className="af-1">
                    Directorate
                  </NavLink>
                  <NavLink to="/staff" className="af-1">
                    Officer & Staff
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Academic Affairs
                  </NavLink>
                  <NavLink to="/faculty" className="af-1">
                    Faculty
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Student Affairs
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Registrar's Office
                  </NavLink>
                  <NavLink to="/downloads" className="af-1">
                    Downloads
                  </NavLink>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-2-head dropdown-content-head">
                    Other Units
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Finance & Accounts
                  </NavLink>
                  <a href={RTI} target="blank" className="af-1">
                    RTI
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown nav-res">
              <button className="dropbtn">
                Departments
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Department of IT
                  </div>
                  <a
                    href="https://it-iiitl.netlify.com/"
                    target="blank"
                    className="af-1"
                  >
                    Information Technology
                  </a>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-2-head dropdown-content-head">
                    Department of CSE
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Computer Science Engineering
                  </NavLink>
                </div>
              </div>
            </div>
            <div id="dropdown-student" className="dropdown nav-res">
              <button className="dropbtn">
                Students
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Student Counselling
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    About Counselling
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Common Concerns
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Services
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    FAQ
                  </NavLink>
                </div>
                <div className="dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Regulations
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Anti-Ragging Committee
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Anti-Sexual Harassment Policy
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Office Orders
                  </NavLink>
                </div>
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Hostel
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Student's Hostel
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Hostel Rules
                  </NavLink>
                </div>
                <div className="dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Mess
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Overview
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Mess Menu
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Mess Committee
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Mess Committee Duties
                  </NavLink>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    People
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Dean & Staff
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Wardens
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Counsellor
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Sports Staff
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Hostel Caretaker
                  </NavLink>
                </div>
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Office, Students' Affairs
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    People
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Notice Board
                  </NavLink>
                  {/* <div className="dropdown-content-c-1-head dropdown-content-head">
                    Quick Links
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Student Portal Login
                  </NavLink>

                  <NavLink to="/coming-soon" className="af-1">
                    Sports/Gymkhana
                  </NavLink> */}
                </div>
              </div>
            </div>
            <div className="dropdown nav-res">
              <button className="dropbtn">
                Academics
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Academic Programmes
                  </div>
                  <NavLink to="/btech-it" className="af-1">
                    B.Tech in IT
                  </NavLink>
                  <NavLink to="/btech-cs" className="af-1">
                    B.Tech in CSE
                  </NavLink>

                  <NavLink to="/coming-soon" className="af-1">
                    M.Tech in CSE
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    PhD
                  </NavLink>
                </div>
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Useful Links
                  </div>
                  <NavLink to="/calender" className="af-1">
                    Academic Schedule
                  </NavLink>
                  <NavLink to="/seat-matrix" className="af-1">
                    Seat Matrix
                  </NavLink>
                  <NavLink to="/course-structure" className="af-1">
                    Course Structure
                  </NavLink>
                  <a href={timeTable} target="blank" className="af-1">
                    Time Table
                  </a>
                  <a href={pdfFee} target="blank" className="af-1">
                    Fee Structure
                  </a>

                  <NavLink to="/coming-soon" className="af-1">
                    List of Students
                  </NavLink>
                </div>

                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Regulations
                  </div>
                  {/* <NavLink to="/coming-soon" className="af-1">
                    Important Resolutions
                  </NavLink> */}
                  <NavLink to="/coming-soon" className="af-1">
                    Office Orders
                  </NavLink>
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Facility
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Lecture Hall Complex
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="dropdown nav-res">
              <button className="dropbtn">
                Facilities
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Central Library
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    About
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    People
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    E-Resources
                  </NavLink>
                </div>
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Computer Centre
                  </div>

                  <NavLink to="/coming-soon" className="af-1">
                    People
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Services
                  </NavLink>

                  <NavLink to="/coming-soon" className="af-1">
                    CC Lab
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    FAQ
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Download
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Notice Board
                  </NavLink>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Other Facilities
                  </div>
                  <NavLink to="/coming-soon" className="af-1">
                    Visitors' Hostel
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Transportation
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Security
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Health Centre
                  </NavLink>
                  <NavLink to="/coming-soon" className="af-1">
                    Department Research Facility
                  </NavLink>

                  <NavLink
                    // style={{ borderLeft: "solid 1px" }}
                    to="/coming-soon"
                    className="af-1"
                  >
                    Lecture Hall Complex
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink
              to="/coming-soon"
              // target="blank"
              style={{ border: "none" }}
              className="nav-NavLink nav-res"
            >
              Recruitment
            </NavLink>
            <a
              href="https://placements.iiitl.ac.in/"
              target="blank"
              className="nav-NavLink nav-res"
            >
              Placements
            </a>

            <div className="toggle-btn">
              <button
                className="toggle-btn"
                id="btn-open"
                onClick={() => this.openNav()}
              >
                <div className="toggle-btn-line toggle-btn-line-1" />
                <div className="toggle-btn-line toggle-btn-line-2" />
                <div className="toggle-btn-line toggle-btn-line-3" />
              </button>
              <button
                className="toggle-btn"
                id="btn-close"
                onClick={() => this.closeNav()}
              >
                <div className="toggle-btn-line toggle-btn-line-1-close" />
                <div className="toggle-btn-line toggle-btn-line-2-close" />
              </button>
            </div>
          </div>
          <div className="nav-icons">
            <a
              target="blank"
              href="https://www.linkedin.com/school/iiitl/"
              className="nav-res"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a href="mailto:contact@iiitl.ac.in" className="nav-res">
              <i className="fas fa-envelope" />
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/iiitlucknow/"
              className="nav-res"
            >
              <i className="fab fa-facebook" />
            </a>
          </div>
        </div>
        <AltNav />
      </nav>
    );
  }
}

export default Nav;
