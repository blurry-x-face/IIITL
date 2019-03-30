import React from "react";
import "./alt-nav.css";
import { Link } from "react-router-dom";

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
              <Link
                to="/vision"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Vision & Mission
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Background
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                IIIT Council
              </Link>
              <Link
                to="/board-governors"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Board of Governors
              </Link>
              <Link
                to="google.com"
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
                to="/co-ordination-committee"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Co-ordination Committee
              </Link>
              <Link
                to="/contactus"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Contact Us
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
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Academic Affairs
              </Link>
              <Link
                to="/faculty"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Faculty Affairs
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Student Affairs
              </Link>
              <Link
                to="google.com"
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
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Finance & Accounts
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                RTI
              </Link>
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
                Engineering Sciences Stream
              </div>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Information Technology
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Computer Science
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Electronics & Communications Engineering
              </Link>
            </div>
            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-2-head alt-dropdown-content-head">
                Humanities and Social Sciences Stream
              </div>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Economic Sciences
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Humanities and Social Sciences
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
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                About Counselling
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Common Concerns
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Services
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                FAQ
              </Link>
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Regulations
              </div>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Anti-Ragging Committee
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Anti-Sexual Harassment Policy
              </Link>
              <Link
                to="google.com"
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
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Student's Hostel
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Hostel Rules
              </Link>
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Mess
              </div>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Overview
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Mess Menu
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Mess Committee
              </Link>
              <Link
                to="google.com"
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
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Dean & Staff
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Wardens
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Counsellor
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Sports Staff
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Hostel Caretaker
              </Link>
            </div>
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Office, Students' Affairs
              </div>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                People
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Notice Board
              </Link>
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Quick Links
              </div>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Student Portal Login
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                DOSA Office Website
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Students' Website
              </Link>
              <Link
                to="google.com"
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
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                B.Tech in IT
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                B.Tech in CS
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                B.Tech in ECE
              </Link>
              <Link
                to="google.com"
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
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Officer & Staff
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Academic Schedule
              </Link>
              <Link
                to="/faculty"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Faculty
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
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                List of Students
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Convocation
              </Link>
            </div>

            <div className="alt-dropdown-content-c-2 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Regulations
              </div>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Important Resolutions
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Office Orders
              </Link>
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Facility
              </div>
              <Link
                to="google.com"
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
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                About
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                People
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                E-Resources
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Catalogue Search
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Institutional Digital Repository (IDR)
              </Link>
            </div>
            <div className="alt-dropdown-content-c-1 alt-dropdown-content-c">
              <div className="alt-dropdown-content-c-1-head alt-dropdown-content-head">
                Computer Centre
              </div>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                CC Home
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                People
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Services
              </Link>

              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                CC Lab
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                FAQ
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Download
              </Link>
              <Link
                to="google.com"
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
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Visitors' Hostel
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Transportation
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Security
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Health Centre
              </Link>
              <Link to="placements.iiitl.ac.in" className="af-1">
                Placement
              </Link>
              <Link
                to="google.com"
                onClick={() => this.closeNav()}
                className="af-1"
              >
                Lecture Hall Complex
              </Link>
            </div>
          </div>
        </div>
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
