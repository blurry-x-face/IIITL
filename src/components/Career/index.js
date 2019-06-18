import React, { Component } from "react";
import {
  facultyRecruitment,
  StaffRecruitment,
  otherRecruitment
} from "./RecruitmentAnnouncementData";

import "../Recruitment.css";

class Career extends Component {
  state = {
    data: []
  };
  RecruitmentNotice(props) {
    return (
      <>
        {props.data.length !== 0 ? (
          props.data.map((v, i) => (
            <div key={i} className="recruit-section">
              <h1>{v.head}</h1>
              <div style={{ padding: 10 }}>
                {v.pdf.map((val, ind) => (
                  <>
                    <i class="far fa-file-pdf" style={{ marginRight: 15 }} />
                    <a key={ind} href={val.pdfLink} target="blank">
                      {val.pdfPara}
                    </a>
                    <br />
                    <br />
                  </>
                ))}

                <br />
                <i class="fas fa-link" />
                <a target="blank" href={v.registerLink}>
                  Apply Online:
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="recruit-section">
            <h1>Career at IIIT Lucknow</h1>
            <ul>
              <li>
                <i>Currently there are no vacancy for this post.</i>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }
  componentDidMount() {
    if (
      window.location.pathname === "/career/faculty" ||
      window.location.pathname === "/career/faculty/"
    ) {
      this.setState({ data: facultyRecruitment });
<<<<<<< HEAD
    } else if (window.location.pathname === "/career/Staff") {
      this.setState({ data: StaffRecruitment });
    } else if (window.location.pathname === "/career/other") {
=======
    } else if (
      window.location.pathname === "/career/staff" ||
      window.location.pathname === "/career/staff/"
    ) {
      this.setState({ data: staffRecruitment });
    } else if (
      window.location.pathname === "/career/other" ||
      window.location.pathname === "/career/other/"
    ) {
>>>>>>> 118b844e270018ca4e10d89bf513d3500b269b38
      this.setState({ data: otherRecruitment });
    }
  }
  render() {
    return (
      <div className="recruit-global">
        <div className="recruit-inner">
          <this.RecruitmentNotice data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Career;
