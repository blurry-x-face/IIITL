import React from "react";
import "./alt-nav.css";
import { Link } from "react-router-dom";
// import RTI from "../assets/downloads/RTI - PDF.pdf";
import timeTable from "../assets/downloads/Time_Table.pdf";
import pdfFee from "../assets/blogs/fee-structure.pdf";

class AltNav extends React.Component {
  state = { isOpen: false, prev: "", isFirst: true, prevSelect: "" };
  openNav = n => {
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
  closeNav() {
    document.getElementById("alt-nav-id").style.display = "none";
    document.getElementById("btn-open").style.display = "inline";
    document.getElementById("btn-close").style.display = "none";
    // console.log("open!!");
  }
  render() {
    return (
      <div className="alt-navbar" id="alt-nav-id" style={{ display: "none" }}>
        <div className="alt-dropdown">
          <button
            className="alt-dropbtn"
            onClick={() => this.openNav("alt-dropdown-content-1")}
          >
            Institute
            <i className="fa fa-caret-down" />
          </button>
          <div className="alt-dropdown-content" id="alt-dropdown-content-1">
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Institute
              </div>
              <Link
                to="/About"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                At a Glance
              </Link>
              <a
                href="https://iiitcouncil.com/"
                target="blank"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                IIIT Council
              </a>
              <Link
                to="/board-governors"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Board of Governors
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Finance Committee
              </Link>
              <Link
                to="/Senate"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Senate
              </Link>

              <Link
                to="/contactus"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Reach Us
              </Link>
            </div>
            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-2-head alt-dropdown-content-head">
                Administration
              </div>
              <Link
                to="/directorate"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Directorate
              </Link>
              <Link
                to="/staff"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Officer & Staff
              </Link>
              {/* <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Academic Affairs
              </Link> */}
              <Link
                to="/faculty"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Faculty
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Student Affairs
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Registrar's Office
              </Link>
            </div>
            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-2-head alt-dropdown-content-head">
                Other Units
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Finance & Accounts
              </Link>
              <a
                href="https://rtionline.gov.in/"
                target="blank"
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                RTI
              </a>
            </div>
          </div>
        </div>
        <div className="alt-dropdown">
          <button
            className="alt-dropbtn"
            onClick={() => this.openNav("alt-dropdown-content-2")}
          >
            Departments
            <i className="fa fa-caret-down" />
          </button>
          <div className="alt-dropdown-content" id="alt-dropdown-content-2">
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Department of IT
              </div>
              <a
                href="https://it-iiitl.netlify.com/"
                target="blank"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Information Technology
              </a>
            </div>
            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-2-head alt-dropdown-content-head">
                Department of CSE
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Computer Science and Engineering
              </Link>
            </div>
          </div>
        </div>
        <div className="alt-dropdown">
          <button
            className="alt-dropbtn"
            onClick={() => this.openNav("alt-dropdown-content-3")}
          >
            Students
            <i className="fa fa-caret-down" />
          </button>
          <div className="alt-dropdown-content" id="alt-dropdown-content-3">
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Student Counselling
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                About Counselling
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Common Concerns
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Services
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                FAQ
              </Link>
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Regulations
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Anti-Ragging Committee
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Anti-Sexual Harassment Policy
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Office Orders
              </Link>
            </div>
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Hostel
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Student's Hostel
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Hostel Rules
              </Link>
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Mess
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Overview
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Mess Menu
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Mess Committee
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Mess Committee Duties
              </Link>
            </div>
            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                People
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Dean & Staff
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Wardens
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Counsellor
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Sports Staff
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Hostel Caretaker
              </Link>
            </div>
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Student Clubs
              </div>
              <a
                href="https://axios.iiitl.ac.in/"
                onClick={() => this.closeNav()}
                className="af-1"
                target="_blank"
              >
                Technical Club
              </a>
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Quick Links
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Student Portal Login
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Students' Website
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Sports/Gymkhana
              </Link>
            </div>
          </div>
        </div>
        <div className="alt-dropdown">
          <button
            className="alt-dropbtn"
            onClick={() => this.openNav("alt-dropdown-content-4")}
          >
            Academics
            <i className="fa fa-caret-down" />
          </button>
          <div className="alt-dropdown-content" id="alt-dropdown-content-4">
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Academic Programmes
              </div>
              <Link
                to="/btech-it"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                B.Tech in IT
              </Link>
              <Link
                to="/btech-cs"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                B.Tech in CS
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                M.Tech in CSE
              </Link>
              <Link
                to="/admissions/Phd"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                PhD
              </Link>
            </div>
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Useful Links
              </div>
              <Link
                to="/calender"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Academic Schedule
              </Link>
              <Link
                to="/seat-matrix"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Seat Matrix
              </Link>
              <Link
                to="/course-structure"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Course Structure
              </Link>
              <a
                href={timeTable}
                target="blank"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Time Table
              </a>
              <a
                href={pdfFee}
                target="blank"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Fee Structure
              </a>
              {/* <Link
                href={timeTable}
                target="blank"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                RTI
              </Link> */}
            </div>

            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Regulations
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Important Resolutions
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Office Orders
              </Link>
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Facility
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Lecture Hall Complex
              </Link>
            </div>
          </div>
        </div>
        <div className="alt-dropdown">
          <button
            className="alt-dropbtn"
            onClick={() => this.openNav("alt-dropdown-content-5")}
          >
            Facilities
            <i className="fa fa-caret-down" />
          </button>
          <div className="alt-dropdown-content" id="alt-dropdown-content-5">
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Central Library
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                About
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                People
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                E-Resources
              </Link>
              {/* <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Catalogue Search
              </Link> */}
            </div>
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Computer Centre
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                CC Home
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                People
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Services
              </Link>

              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                CC Lab
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                FAQ
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Download
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Notice Board
              </Link>
            </div>
            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Other Facilities
              </div>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Visitors' Hostel
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Transportation
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Security
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Health Centre
              </Link>
              <Link
                to="/coming-soon"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Lecture Hall Complex
              </Link>
            </div>
          </div>
        </div>
        <div className="alt-dropdown">
          <button
            className="alt-dropbtn"
            onClick={() => this.openNav("alt-dropdown-content-6")}
          >
            Admissions
            <i className="fa fa-caret-down" />
          </button>
          <div className="alt-dropdown-content" id="alt-dropdown-content-6">
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Undergraduate Programs
              </div>
              <Link
                to="admissions-IT"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                B.Tech in IT
              </Link>
              <Link
                to="admissions-CSE"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                B.Tech in CSE
              </Link>
            </div>
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Postgraduate Programs
              </div>
              <Link
                to="admissions-MTECH"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                M. Tech. in CSE
              </Link>
            </div>

            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Research
              </div>
              <Link
                to="/admissions-Phd"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Ph.D. in IT
              </Link>
            </div>
          </div>
        </div>
        <button className="alt-dropbtn">
          <Link
            to="/tenders"
            onClick={() => this.closeNav()}
            className="alt-nav-link"
            style={{ color: "black" }}
          >
            Tenders
          </Link>
        </button>
        <button className="alt-dropbtn">
          <a
            href="https://placements.iiitl.ac.in/"
            target="blank"
            className="alt-nav-link"
            style={{ color: "black" }}
          >
            Placements
          </a>
        </button>
      </div>
    );
  }
}

export default AltNav;
