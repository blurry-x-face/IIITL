import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import AltNav from "./Alt-nav";

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
            {/* <Link
            to="#home"
            style={{
              margin: "0 0 0 2.5vw",
              fontFamily: "Playfair Display"
            }}
            id="nav-head"
          >
            IIIT LUCKNOW
          </Link> */}
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
                  <Link to="/About" className="af-1">
                    At a Glance
                  </Link>
                  <Link to="/vision" className="af-1">
                    Vision & Mission
                  </Link>
                  <Link to="google.com" className="af-1">
                    Background
                  </Link>
                  <Link to="google.com" className="af-1">
                    IIIT Council
                  </Link>
                  <Link to="/board-governors" className="af-1">
                    Board of Governors
                  </Link>
                  <Link to="google.com" className="af-1">
                    Finance Committee
                  </Link>
                  <Link to="/Senate" className="af-1">
                    Senate
                  </Link>
                  <Link to="/co-ordination-committee" className="af-1">
                    Co-ordination Committee
                  </Link>
                  <Link to="/contactus" className="af-1">
                    Contact Us
                  </Link>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-2-head dropdown-content-head">
                    Administration
                  </div>
                  <Link to="/directorate" className="af-1">
                    Directorate
                  </Link>
                  <Link to="/staff" className="af-1">
                    Officer & Staff
                  </Link>
                  <Link to="google.com" className="af-1">
                    Academic Affairs
                  </Link>
                  <Link to="/faculty" className="af-1">
                    Faculty Affairs
                  </Link>
                  <Link to="google.com" className="af-1">
                    Student Affairs
                  </Link>
                  <Link to="google.com" className="af-1">
                    Registrar's Office
                  </Link>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-2-head dropdown-content-head">
                    Other Units
                  </div>
                  <Link to="google.com" className="af-1">
                    Finance & Accounts
                  </Link>
                  <Link to="google.com" className="af-1">
                    RTI
                  </Link>
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
                  <Link to="google.com" className="af-1">
                    Information Technology
                  </Link>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-2-head dropdown-content-head">
                    Department of CSE
                  </div>
                  <Link to="google.com" className="af-1">
                    Computer Science Engineering
                  </Link>
                </div>
              </div>
            </div>
            <div className="dropdown nav-res">
              <button className="dropbtn">
                Students
                <i className="fa fa-caret-down" />
              </button>
              <div className="dropdown-content">
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Student Counselling
                  </div>
                  <Link to="google.com" className="af-1">
                    About Counselling
                  </Link>
                  <Link to="google.com" className="af-1">
                    Common Concerns
                  </Link>
                  <Link to="google.com" className="af-1">
                    Services
                  </Link>
                  <Link to="google.com" className="af-1">
                    FAQ
                  </Link>
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Regulations
                  </div>
                  <Link to="google.com" className="af-1">
                    Anti-Ragging Committee
                  </Link>
                  <Link to="google.com" className="af-1">
                    Anti-Sexual Harassment Policy
                  </Link>
                  <Link to="google.com" className="af-1">
                    Office Orders
                  </Link>
                </div>
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Hostel
                  </div>
                  <Link to="google.com" className="af-1">
                    Student's Hostel
                  </Link>
                  <Link to="google.com" className="af-1">
                    Hostel Rules
                  </Link>
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Mess
                  </div>
                  <Link to="google.com" className="af-1">
                    Overview
                  </Link>
                  <Link to="google.com" className="af-1">
                    Mess Menu
                  </Link>
                  <Link to="google.com" className="af-1">
                    Mess Committee
                  </Link>
                  <Link to="google.com" className="af-1">
                    Mess Committee Duties
                  </Link>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    People
                  </div>
                  <Link to="google.com" className="af-1">
                    Dean & Staff
                  </Link>
                  <Link to="google.com" className="af-1">
                    Wardens
                  </Link>
                  <Link to="google.com" className="af-1">
                    Counsellor
                  </Link>
                  <Link to="google.com" className="af-1">
                    Sports Staff
                  </Link>
                  <Link to="google.com" className="af-1">
                    Hostel Caretaker
                  </Link>
                </div>
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Office, Students' Affairs
                  </div>
                  <Link to="google.com" className="af-1">
                    People
                  </Link>
                  <Link to="google.com" className="af-1">
                    Notice Board
                  </Link>
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Quick Links
                  </div>
                  <Link to="google.com" className="af-1">
                    Student Portal Login
                  </Link>

                  <Link to="google.com" className="af-1">
                    Sports/Gymkhana
                  </Link>
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
                  <Link to="google.com" className="af-1">
                    B.Tech in IT
                  </Link>
                  <Link to="google.com" className="af-1">
                    B.Tech in CS
                  </Link>

                  <Link to="google.com" className="af-1">
                    PhD
                  </Link>
                </div>
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Useful Links
                  </div>
                  <Link to="google.com" className="af-1">
                    Academic Schedule
                  </Link>
                  <Link to="/faculty" className="af-1">
                    Faculty
                  </Link>
                  <Link to="/seat-matrix" className="af-1">
                    Seat Matrix
                  </Link>
                  <Link to="/course-structure" className="af-1">
                    Course Structure
                  </Link>

                  <Link to="google.com" className="af-1">
                    List of Students
                  </Link>
                  <Link to="google.com" className="af-1">
                    Convocation
                  </Link>
                </div>

                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Regulations
                  </div>
                  <Link to="google.com" className="af-1">
                    Important Resolutions
                  </Link>
                  <Link to="google.com" className="af-1">
                    Office Orders
                  </Link>
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Facility
                  </div>
                  <Link to="google.com" className="af-1">
                    Lecture Hall Complex
                  </Link>
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
                  <Link to="google.com" className="af-1">
                    About
                  </Link>
                  <Link to="google.com" className="af-1">
                    People
                  </Link>
                  <Link to="google.com" className="af-1">
                    E-Resources
                  </Link>
                </div>
                <div className="dropdown-content-c-1 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Computer Centre
                  </div>

                  <Link to="google.com" className="af-1">
                    People
                  </Link>
                  <Link to="google.com" className="af-1">
                    Services
                  </Link>

                  <Link to="google.com" className="af-1">
                    CC Lab
                  </Link>
                  <Link to="google.com" className="af-1">
                    FAQ
                  </Link>
                  <Link to="google.com" className="af-1">
                    Download
                  </Link>
                  <Link to="google.com" className="af-1">
                    Notice Board
                  </Link>
                </div>
                <div className="dropdown-content-c-2 dropdown-content-c">
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    Other Facilities
                  </div>
                  <Link to="google.com" className="af-1">
                    Visitors' Hostel
                  </Link>
                  <Link to="google.com" className="af-1">
                    Transportation
                  </Link>
                  <Link to="google.com" className="af-1">
                    Security
                  </Link>
                  <Link to="google.com" className="af-1">
                    Health Centre
                  </Link>
                  <Link to="placements.iiitl.ac.in" className="af-1">
                    Placement
                  </Link>
                  <Link to="google.com" className="af-1">
                    Department Research Facility
                  </Link>

                  <Link to="google.com" className="af-1">
                    Lecture Hall Complex
                  </Link>
                </div>
              </div>
            </div>
            <a
              href="https://placements.iiitl.ac.in/"
              target="blank"
              className="nav-link nav-res"
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
            <Link to="#home" className="nav-res">
              <i className="fab fa-linkedin" />
            </Link>
            <a href="mailto:/contact@iiitl.ac.in" className="nav-res">
              <i className="fas fa-envelope" />
            </a>
            <Link to="#home" className="nav-res">
              <i className="fab fa-facebook" />
            </Link>
          </div>
        </div>
        {/* <div className="alt-nav">
          <div className="alt-nav-drop-head">
            <div className="alt-nav-drop-subhead">
              <div className="alt-nav-drop-subhead-head">Institute</div>
              <div className="alt-nav-drop-item">
              <div className='alt-nav-sub-drop'>
                Institute
              </div>
              </div>
            </div>
          </div>
        </div> */}
        <AltNav />
      </nav>
    );
  }
}

export default Nav;
