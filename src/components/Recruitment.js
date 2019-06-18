import React from "react";
import "./Recruitment.css";

class Recruitment extends React.Component {
  componentDidMount() {
    document.title =
      "Recruitment  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="recruit-global">
        <div className="recruit-inner">
          <div className="recruit-section">
          <h1>Vacancies in Teaching and Non-Teaching Cadre</h1>
            <h1>Teaching Positions</h1>
            <ul>
              <li>
                <i>Currently there are no vacancy for this post.</i>
              </li>
            </ul>
          </div>
          <div className="recruit-section">
            <h1>Non-Teaching Positions</h1>
            <ul>
              <li>
                <i>Currently there are no vacancy for this post.</i>
              </li>
            </ul>
          </div>
          <div className="recruit-section">
            <h1>Other</h1>
            <ul>
              <li>
                <i>Currently there are no vacancy for this post.</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Recruitment;
