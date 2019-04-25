import React from "react";
import "../Admissions.css";
import ScrollToTopOnMount from "../../ScrollToTop";
import feeBtech from "../../../assets/blogs/fee_btech.pdf";
import feeDasa from '../../../assets/blogs/fee_dasa.pdf';
import Link from "react-router-dom/Link";

class AdmissionCSE extends React.Component {
  render() {
    return (
      <div className="btech-global admissions-section-global admissions-it-global padding-res">
        <ScrollToTopOnMount />
        <div className="admission-it-global-div">
          <h1 className="btech-global-head"> B.Tech. in CSE</h1>
          <p className="btech-it-p">
            Admissions to the four year B.Tech. Program in CSE branch of the
            Institute is made through the examination conducted by CBSE under
            the name and style of JEE (Main). Based upon the merit in the
            written examination, Central Counseling Board of JEE (Main) invites
            candidates for counseling at selected centers and seats for various
            participating institutions are allotted, based upon individual
            merit.
          </p>
          <p className="btech-it-p">
            The Institute is open to all races, creeds and classes including
            persons of either sex (including transgender). As Central Education
            Institution IIIT follows the Central Educational Institutions
            (Reservation in Admission) Act, 2006.
          </p>
        </div>
        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head"> Seat Matrix </h1>
        </div>
        <div className="admissions-it-seat-table">
          <table style={{ width: "100%" }}>
            <tr>
              <th>Institute Code</th>
              <th>Institute</th>
              <th>Program Code</th>
              <th>Program</th>
              <th>Open</th>
              <th>Open-PwD</th>
              <th>SC</th>
              <th>SC-PwD</th>
              <th>ST</th>
              <th>ST-PwD</th>
              <th>OBC-NCL</th>
              <th>OBC-NCL-PwD</th>
              <th>Total Seats</th>
              <th>State / All India</th>
            </tr>
            <tr>
              <td>315</td>
              <td>Indian Institute of Information Technology, Lucknow</td>
              <td>4116</td>
              <td>
                Computer Science & Engineering (4 Years, Bachelor of Technology)
              </td>
              <td>31</td>
              <td>2</td>
              <td>9</td>
              <td>0</td>
              <td>5</td>
              <td>0</td>
              <td>16</td>
              <td>1</td>
              <td>75</td>
              <td>All India</td>
            </tr>
          </table>
        </div>
        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head"> Seat Matrix(DASA) </h1>
        </div>
        <div className="admissions-it-seat-table">
          <table style={{ width: "100%" }}>
            <tr>
              <th>Instcd</th>
              <th>Brcd</th>
              <th>Tciwg</th>
              <th>Tgen</th>
              <th>Tseat</th>
            </tr>
            <tr>
              <td>ILK</td>
              <td>COS</td>
              <td>3</td>
              <td>8</td>
              <td>11</td>
            </tr>
          </table>
        </div>
        <div className="admissions-useful-links">
          <h1>Useful Links</h1>
          <ul>
            <li className="admissions-course-structure">
              <Link to="/coming-soon">Course Structure</Link>
            </li>
            <li>
              <a href={feeBtech} target="blank">
                Fee Structure
              </a>
            </li>
            <li>
              <a href={feeDasa} target="blank">
                Fee Structure for DASA Students
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdmissionCSE;