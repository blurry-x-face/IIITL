import React from "react";
import "../FacultyTemplate.css";
import { Link } from "react-router-dom";
import { mary } from "./FacultyData";
import profile from "../../assets/facultyData/mary.jpg";
import { remove_hash_from_url } from "./Utils";

class MS extends React.Component {
  state = { isOpen: false, prev: "", isFirst: true };
  openNav = () => {
    if (!this.state.isOpen) {
      document.getElementById("faculty-alt-nav").style.display = "flex";
    } else {
      document.getElementById("faculty-alt-nav").style.display = "none";
    }
    this.setState({ isOpen: !this.state.isOpen });
  };

  open = (id, hash) => {
    if (window.innerWidth < 867) {
      this.openNav();
    }
    if (window.location.hash === hash) {
      return;
    }

    if (this.state.isFirst) {
      document.getElementById("faculty-body-home").style.display = "none";
    }
    document.getElementById(id).style.display = "block";

    if (!this.state.isFirst) {
      document.getElementById(this.state.prev).style.display = "none";
    }
    this.setState({ isFirst: false });
    this.setState({ prev: id });
  };

  Awards = props => {
    return (
      <div className="faculty-award-inner">
        <div className="faculty-award-head">{props.award.head}</div>
        <div className="faculty-award-detail">{props.award.detail}</div>
      </div>
    );
  };
  Awards1 = props => {
    const list = props.data.map((value, index) => {
      return (
        <li>
          <div key={index} className="faculty-award-inner">
            <div className="faculty-award-head">{value.head}</div>
            <div className="faculty-award-detail">{value.detail}</div>
          </div>
        </li>
      );
    });
    return (
      <div className="faculty-awards-global">
        <div className="faculty-awards-head faculty-section-head">
          Latest Achievements
        </div>
        <ul>{list}</ul>
      </div>
    );
  };
  Interests = props => {
    let li = props.interests.map(interest => {
      return <li>{interest}</li>;
    });
    return <ul>{li} </ul>;
  };
  Journals = props => {
    let li = props.journals.map(journal => {
      return <li>{journal}</li>;
    });
    return <ul>{li} </ul>;
  };
  Confrence = props => {
    let li = props.conferences.map(journal => {
      return <li>{journal}</li>;
    });
    return <ul>{li} </ul>;
  };
  Education = props => {
    let li = props.conferences.map(journal => {
      return <li>{journal}</li>;
    });
    return <ul>{li} </ul>;
  };
  Contact = props => {
    let li = props.conferences.map(journal => {
      return <p className="faculty-contact-p">{journal}</p>;
    });
    return <div>{li} </div>;
  };
  componentDidMount() {
    document.title =
      "Mary Samuel  | Indian Institute of Information Technology, Lucknow";
    remove_hash_from_url();
  }
  render() {
    return (
      <div className="faculty-template-global padding-res">
        <div className="faculty-above-nav">
          <div className="faculty-above-nav-inner">
            <div className="above-nav-section-1">
              <div className="faculty-above-nav-head-name">Dr. Mary Samuel</div>
              {/* <div className="faculty-above-nav-head-position">
                ASSISTANT PROFESSOR
              </div> */}
              <div className="faculty-above-nav-head-dept faculty-above-nav-item">
                Department of Information Technology
              </div>
              <div className="faculty-above-nav-head-institute faculty-above-nav-item">
                Indian Institute of Information Technology, Lucknow,UP,India
              </div>
            </div>
            <div className="above-nav-section-2">
              <img src={profile} alt="VKS" />
            </div>
          </div>
        </div>
        <div className="faculty-nav">
          <div className="faculty-nav-inner">
            <Link
              onClick={() => {
                this.open("faculty-body-home", "#home");
              }}
              to="#home"
              className="faculty-nav-item"
            >
              Home
            </Link>
            <Link
              to="#education"
              onClick={() => {
                this.open("faculty-body-education", "#education");
              }}
              className="faculty-nav-item"
            >
              Education
            </Link>
            <Link
              className="faculty-nav-item"
              onClick={() => {
                this.open("faculty-body-journals", "#journals");
              }}
              to="#journals"
            >
              Publications
            </Link>
            <Link
              className="faculty-nav-item"
              onClick={() => {
                this.open("faculty-body-experience", "#experience");
              }}
              to="#experience"
            >
              Experience
            </Link>
            <Link
              to="#courses"
              onClick={() => {
                this.open("faculty-body-courses", "#courses");
              }}
              className="faculty-nav-item"
            >
              Course
            </Link>

            <Link
              onClick={() => {
                this.open("faculty-body-contact", "#contact");
              }}
              to="#contact"
              className="faculty-nav-item"
            >
              Contact
            </Link>
          </div>
          <div className="faculty-hamburger">
            <i className="fas fa-bars" onClick={() => this.openNav()} />
          </div>
          <div className="faculty-alt-nav-inner" id="faculty-alt-nav">
            <Link
              to="#home"
              onClick={() => {
                this.open("faculty-body-home", "#home");
              }}
              className="faculty-alt-nav-item"
            >
              Home
            </Link>
            <Link
              onClick={() => {
                this.open("faculty-body-education", "#education");
              }}
              to="#education"
              className="faculty-alt-nav-item"
            >
              Education
            </Link>
            {/* <Link to="#home" className="faculty-nav-item">
              Awards
            </Link> */}
            <Link
              onClick={() => {
                this.open("faculty-body-journals", "#journals");
              }}
              to="#journals"
              className="faculty-alt-nav-item"
            >
              Publications
            </Link>
            <Link
              onClick={() => {
                this.open("faculty-body-experience", "#experience");
              }}
              to="#Experience"
              className="faculty-alt-nav-item"
            >
              Experience
            </Link>
            <Link
              onClick={() => {
                this.open("faculty-body-courses", "#courses");
              }}
              to="#courses"
              className="faculty-alt-nav-item"
            >
              Course
            </Link>

            <Link
              onClick={() => {
                this.open("faculty-body-contact", "#contact");
              }}
              to="#contact"
              className="faculty-alt-nav-item"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="faculty-body" id="faculty-body-home">
          <div className="faculty-image-hid">
            <img src={profile} alt="VKS" />
          </div>
          <div className="faculty-interest">
            <div className="faculty-interest-section-1">
              <div className="faculty-interest-head faculty-section-head">
                Research Interests:
              </div>
              <div className="faculty-interest-list">
                <this.Interests interests={mary.interests} />
              </div>
            </div>
            <div className="faculty-interest-section-2">
              <div className="faculty-photo" />
            </div>
          </div>
          <div className="faculty-awards-global">
            <this.Awards1 data={mary.awards} />
          </div>
          <div className="faculty-journals">
            <div className="faculty-journals-head faculty-section-head faculty-journals-head">
              Publications
            </div>
            <div className="faculty-journal-list">
              {/* <this.Journals journals={mary.journalData} /> */}
            </div>
          </div>
          {/* <div className="faculty-conferences">
            <div className="faculty-conference-head faculty-section-head">
              Conference
            </div>
            <div className="faculty-conference-list">
              <this.Confrence conferences={vks.conference} />
            </div>
          </div> */}
        </div>
        <div className="faculty-body" id="faculty-body-journals">
          {/* <div className="faculty-journals">
            <div className="faculty-journals-head faculty-section-head faculty-journals-head">
              Research Publications
            </div>
            <div className="faculty-journal-list">
              <this.Journals journals={vks.research} />
            </div>
          </div>
          <div className="faculty-journals">
            <div className="faculty-journals-head faculty-section-head faculty-journals-head">
              Journals
            </div>
            <div className="faculty-journal-list">
              <this.Journals journals={vks.journalData} />
            </div>
          </div> */}
        </div>
        <div className="faculty-body" id="faculty-body-education">
          <div className="faculty-education">
            <div className="faculty-education-head faculty-section-head">
              Education
            </div>
            <div className="faculty-education-list">
              <this.Education conferences={mary.education} />
            </div>
          </div>
        </div>
        <div className="faculty-body" id="faculty-body-courses">
          <div className="faculty-courses">
            <div className="faculty-courses-head faculty-section-head">
              Teaching:
            </div>
            <div className="faculty-education-list faculty-courses-list">
              <this.Education conferences={mary.courses} />
            </div>
          </div>
        </div>
        <div className="faculty-body" id="faculty-body-contact">
          <div className="faculty-courses">
            <div className="faculty-courses-head faculty-section-head">
              Contact
            </div>
            <div className="faculty-education-list faculty-courses-list">
              <this.Contact conferences={mary.address} />
              <this.Contact conferences={mary.contact} />
            </div>
          </div>
        </div>
        <div className="faculty-body" id="faculty-body-experience">
          <div className="faculty-experience">
            <div className="faculty-experience-head faculty-section-head">
              Proffessional Activities:
            </div>
            <div className="faculty-education-list faculty-experience-list">
              <this.Education conferences={mary.experience} />
            </div>
          </div>
        </div>
        <div className="faculty-footer">
          <div className="faculty-footer-copy">
            <i className="far fa-copyright" />
            2019 IIIT Lucknow|
          </div>
          <div className="faculty-footer-department">Department of IT|</div>
          <div className="faculty-footer-department">
            Last Updated: March 2019
          </div>
          {/* <Count
              isViewCounter={true}
              counterText="views"
              firebaseHost="https://counter-button.firebaseio.com/"
              firebaseResourceId="views-counter"
            /> */}
        </div>
      </div>
    );
  }
}

export default MS;
