import React from "react";
import "../FacultyTemplate.css";
import { Link } from "react-router-dom";
import { aP, aM } from "./FacultyData";
import profile from "../../assets/facultyData/anonymous.jpg";

class AM extends React.Component {
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
    let li = props.data.map(journal => {
      return <p className="faculty-contact-p">{journal}</p>;
    });
    return <div>{li} </div>;
  };
  componentDidMount() {
    document.title =
      "Ashutosh Mishra  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="faculty-template-global padding-res">
        <div className="faculty-above-nav">
          <div className="faculty-above-nav-inner">
            <div className="above-nav-section-1">
              <div className="faculty-above-nav-head-name">
                Dr. Ashutosh Mishra
              </div>
              {/* <div className="faculty-above-nav-head-position">
                Guest Faculty
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
              {/* Home */}
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
              {/* Home */}
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
                <this.Interests interests={aM.interests} />
              </div>
            </div>
          </div>
          <div className="faculty-interest">
            <div className="faculty-interest-section-1">
              <div className="faculty-interest-head faculty-section-head">
                Education:
              </div>
              <div className="faculty-interest-list">
                <this.Interests interests={aM.education} />
              </div>
            </div>
          </div>
          <div className="faculty-interest">
            <div className="faculty-interest-section-1">
              <div className="faculty-interest-head faculty-section-head">
                Contact:
              </div>
              <div className="faculty-interest-list">
                <this.Contact data={aM.contact} />
              </div>
              <div className="faculty-interest-list">
                <this.Contact data={aM.address} />
              </div>
            </div>
            <div className="faculty-interest-section-2">
              <div className="faculty-photo" />
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
        </div>
      </div>
    );
  }
}

export default AM;
