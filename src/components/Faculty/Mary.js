import React from "react";
import "../FacultyTemplate.css";
import { Link } from "react-router-dom";
import { mary } from "./FacultyData";

class Template extends React.Component {
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
    return <ol>{li} </ol>;
  };
  Confrence = props => {
    let li = props.conferences.map(journal => {
      return <li>{journal}</li>;
    });
    return <ol>{li} </ol>;
  };
  render() {
    return (
      <div className="faculty-template-global padding-res">
        <div className="faculty-above-nav">
          <div className="faculty-above-nav-inner">
            <div className="faculty-above-nav-head-name">
              Dr. Vishal Krishna Singh
            </div>
            <div className="faculty-above-nav-head-position">Professor</div>
            <div className="faculty-above-nav-head-dept faculty-above-nav-item">
              Department of Information Technology
            </div>
            <div className="faculty-above-nav-head-institute faculty-above-nav-item">
              Indian Institute of Information Technology, Lucknow,UP,India
            </div>
          </div>
        </div>
        <div className="faculty-nav">
          <div class="faculty-nav-inner">
            <Link to="#home" class="faculty-nav-item">
              Home
            </Link>
            <Link to="#home" class="faculty-nav-item">
              Education
            </Link>
            <Link to="#home" class="faculty-nav-item">
              Awards
            </Link>
            <div class="faculty-nav-item faculty-nav-item-dropdown">
              <button class="dropbtn">
                Publications
                <i class="fa fa-caret-down" />
              </button>
              <div class="faculty-drop-item">
                <Link to="#">Journals</Link>
                <Link to="#">Conferences</Link>
                <Link to="#">Invited Talks</Link>
                <Link to="#">Patents</Link>
              </div>
            </div>
            <div class="faculty-nav-item faculty-nav-item-dropdown">
              <button class="dropbtn">
                Experience
                <i class="fa fa-caret-down" />
              </button>
              <div class="faculty-drop-item">
                <Link to="#">Work Experience</Link>
                <Link to="#">Proffesional Activities</Link>
              </div>
            </div>
            <div class="faculty-nav-item faculty-nav-item-dropdown">
              <button class="dropbtn">
                Students
                <i class="fa fa-caret-down" />
              </button>
              <div class="faculty-drop-item">
                <Link to="#">Ph.D. Students</Link>
                <Link to="#">M.Tech Students</Link>
                <Link to="#">MSR Students</Link>
              </div>
            </div>

            <Link to="#home" class="faculty-nav-item">
              Course
            </Link>

            <Link to="#home" class="faculty-nav-item">
              Contact
            </Link>
          </div>
        </div>
        <div className="faculty-body">
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
            <div className="faculty-awards-head faculty-section-head">
              Latest Achievements
            </div>
            <this.Awards award={mary.awards.award1} />
          </div>
          <div className="faculty-journals">
            <div className="faculty-journals-head faculty-section-head faculty-journals-head">
              Publications
            </div>
            <div className="faculty-journal-list">
              <this.Journals journals={mary.journalData} />
            </div>
          </div>
          <div className="faculty-conferences">
            <div className="faculty-conference-head faculty-section-head">
              Conference
            </div>
            <div className="faculty-conference-list">
              <this.Confrence conferences={mary.conference} />
            </div>
          </div>
          <div className="faculty-footer">
            <div className="faculty-footer-copy">
              <i class="far fa-copyright" />
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
      </div>
    );
  }
}

export default Template;
