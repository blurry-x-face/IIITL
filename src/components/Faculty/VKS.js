import React from "react";
import "../FacultyTemplate.css";
import { Link } from "react-router-dom";
import { vks } from "./FacultyData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ReactMarkdown from "react-markdown";

const contentful = require("contentful");

class Template extends React.Component {
  state = {
    isOpen: false,
    prev: "",
    isFirst: true,
    data: { interest: [""] },
    teaching: { courses: [""] },
    achievements: [""],
    education: [""],
    journals: [""],
    conferences: [""],
    profileURL: "",
    contact: ""
  };
  componentDidMount() {
    document.title =
      "Vishal Krishna Singh  | Indian Institute of Information Technology, Lucknow";

      function remove_hash_from_url()
      {
          var uri = window.location.toString();
          if (uri.indexOf("#") > 0) {
              var clean_uri = uri.substring(0, uri.indexOf("#"));
              window.history.replaceState({}, document.title, clean_uri);
          }
      }
    remove_hash_from_url();

    const client = contentful.createClient({
      space: "e6ot1k2ihxg2",
      accessToken: "Rl9tOsAWSxgmXKkIMHW307RPW6xTbGBAw0b02UrR0jg"
    });
    client
      .getEntries({ content_type: "reasearchInterests" })
      .then(r => {
        this.setState({ data: r.items[0].fields });
      })
      .catch(rj => {
        console.log("NOT DONE!", rj);
      });
    client
      .getEntries({ content_type: "courses" })
      .then(r => {
        this.setState({ teaching: r.items[0].fields });
      })
      .catch(rj => {
        console.log("NOT DONE!", rj);
      });
    client
      .getEntries({ content_type: "latestAchievements" })
      .then(r => {
        let achievements = r.items.map(v =>
          documentToReactComponents(v.fields.achievement)
        );
        this.setState({ achievements });
      })
      .catch(rj => {
        console.log("NOT DONE!", rj);
      });
    client
      .getEntries({ content_type: "education", order: "sys.createdAt" })
      .then(r => {
        console.log(r.items);
        let education = r.items.map(v => v.fields.qualification);
        this.setState({ education: education.reverse() });
      })
      .catch(rj => {
        console.log("NOT DONE!", rj);
      });
    client
      .getEntries({ content_type: "conferences" })
      .then(r => {
        let conferences = r.items.map(v =>
          documentToReactComponents(v.fields.conference)
        );
        this.setState({ conferences });
      })
      .catch(rj => {
        console.log("NOT DONE!", rj);
      });
    client
      .getEntries({ content_type: "journals" })
      .then(r => {
        let journals = r.items.map(v =>
          documentToReactComponents(v.fields.journal)
        );
        this.setState({ journals });
      })
      .catch(rj => {
        console.log("NOT DONE!", rj);
      });
    client
      .getEntries({ content_type: "profilePhoto" })
      .then(r => {
        let profileURL = r.items[0].fields.profileImage.fields.file.url;
        this.setState({ profileURL });
      })
      .catch(rj => {
        console.log("NOT DONE!", rj);
      });
    client
      .getEntries({ content_type: "contact" })
      .then(r => {
        let contact = documentToReactComponents(
          r.items[0].fields.contactDetail
        );
        this.setState({ contact });
      })
      .catch(rj => {
        console.log("NOT DONE!", rj);
      });
  }
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
  List = props => {
    let li = props.data.map((v, i) => <li key={i}>{v}</li>);
    return <ul>{li}</ul>;
  };
  MarkDownList = props => {
    let li = props.data.map(v => (
      <li>
        <ReactMarkdown source={v} />
      </li>
    ));
    return <ul>{li}</ul>;
  };

  render() {
    return (
      <>
        {this.state.data.interest[0] === "" ? (
          <div className="" />
        ) : (
          <div className="faculty-template-global padding-res">
            <div className="faculty-above-nav">
              <div className="faculty-above-nav-inner">
                <div className="above-nav-section-1">
                  <div className="faculty-above-nav-head-name">
                    Dr. Vishal Krishna Singh
                  </div>
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
                  <img src={this.state.profileURL} alt="VKS" />
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
                <img src={this.state.profileURL} alt="VKS" />
              </div>
              <div className="faculty-interest">
                <div className="faculty-interest-section-1">
                  <div className="faculty-interest-head faculty-section-head">
                    Research Interests:
                  </div>
                  <div className="faculty-interest-list">
                    <this.List data={this.state.data.interest} />
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
                <this.List data={this.state.achievements} />
              </div>
            </div>
            <div className="faculty-body" id="faculty-body-journals">
              <div className="faculty-journals">
                <div className="faculty-journals-head faculty-section-head faculty-journals-head">
                  Research Publications
                </div>
              </div>
              <div className="faculty-journals">
                <div className="faculty-journals-head faculty-section-head faculty-journals-head">
                  Journals
                </div>
                <div className="faculty-journal-list">
                  <this.List data={this.state.journals} />
                </div>
              </div>
              <div className="faculty-journals">
                <div className="faculty-journals-head faculty-section-head faculty-journals-head">
                  Conferences
                </div>
                <div className="faculty-journal-list">
                  <this.List data={this.state.conferences} />
                </div>
              </div>
            </div>
            <div className="faculty-body" id="faculty-body-education">
              <div className="faculty-education">
                <div className="faculty-education-head faculty-section-head">
                  Education
                </div>
                <div className="faculty-education-list">
                  <this.MarkDownList data={this.state.education} />
                </div>
              </div>
            </div>
            <div className="faculty-body" id="faculty-body-courses">
              <div className="faculty-courses">
                <div className="faculty-courses-head faculty-section-head">
                  Teaching:
                </div>
                <div className="faculty-education-list faculty-courses-list">
                  <this.List data={this.state.teaching.courses} />
                </div>
              </div>
            </div>
            <div className="faculty-body" id="faculty-body-contact">
              <div className="faculty-courses">
                <div className="faculty-courses-head faculty-section-head">
                  Contact
                </div>
                <div className="faculty-education-list faculty-courses-list">
                  {/*               <this.Contact conferences={vks.address} />
              <this.Contact conferences={vks.contact} /> */}
                  {/* <this.List data={this.state.contacts} /> */}
                  {this.state.contact}
                </div>
              </div>
            </div>
            <div className="faculty-body" id="faculty-body-experience">
              <div className="faculty-experience">
                <div className="faculty-experience-head faculty-section-head">
                  Proffessional Activities:
                </div>
                <div
                  className="faculty-experience-head faculty-section-head"
                  style={{ marginTop: 40, fontSize: 25, marginLeft: 10 }}
                >
                  Technical Committee Member:
                </div>
                <div className="faculty-education-list faculty-experience-list">
                  <this.List data={vks.member} />
                </div>
                <div
                  className="faculty-experience-head faculty-section-head"
                  style={{ marginTop: 40, fontSize: 25, marginLeft: 10 }}
                >
                  Reviewer for:
                </div>
                <div className="faculty-education-list faculty-experience-list">
                  <this.List data={vks.reviewer} />
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
        )}
      </>
    );
  }
}

export default Template;
