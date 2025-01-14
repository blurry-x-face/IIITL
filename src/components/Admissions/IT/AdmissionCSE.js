import React from "react";
import "../Admissions.css";
import ScrollToTopOnMount from "../../ScrollToTop";
import feeBtech from "../../../assets/blogs/fee_btech.pdf";
import feeDasa from "../../../assets/blogs/fee_dasa.pdf";
import fresherPDF1 from "../../../assets/announcementsData/Info_JoSSA_2019_July.pdf";
import refund from "../../../assets/announcementsData/withdrawal_refund_policy.pdf";
// import Link from "react-router-dom/Link";
import CourseStructure from "../../../assets/blogs/B.Tech_Course_Structure.pdf";
import newGIF from "../../../assets/new.gif";
class AdmissionCS extends React.Component {
  render() {
    return (
      <div className="btech-global admissions-section-global admissions-it-global padding-res">
        <ScrollToTopOnMount />
        <div className="admission-it-global-div">
          <h1 className="btech-global-head"> B.Tech. in CS</h1>
          <p className="btech-it-p">
            Admissions to the four year B.Tech. Program in IT branch of the
            Institute is made through Central Seat Allocation Board 2019 &nbsp;
            
            <a
              style={{ color: "#005f99", textDecoration: "none" }}
              href="https://csab.nic.in/cms/Public/Home.aspx"
              target="blank"
            >
              (CSAB-2019)
            </a>
            /
            <a
              style={{ color: "#005f99", textDecoration: "none" }}
              href="https://josaa.nic.in/webinfocms/public/view.aspx?page=46"
              target="blank"
            >
              JoSAA
            </a>
            . Based upon the merit in{" "}
            <a
              style={{ color: "#005f99", textDecoration: "none" }}
              href="https://jeemain.nic.in/webinfo/Public/Home.aspx"
              target="blank"
            >
              JEE (Mains)
            </a>
            
            .&nbsp;

            <a className="ext-links" href={fresherPDF1} target="blank">
              <u>Information for Freshers</u>
              <img src={newGIF} style={{ height: 22,marginLeft: 5 }} alt="newGIF" />
            </a>
          </p>
          <p className="btech-it-p">
            The Institute is open to all races, creeds and classes including
            persons of either sex (including transgender). As Central Education
            Institution IIIT follows the Central Educational Institutions
            (Reservation in Admission) Act, 2006.
          </p>
        </div>
        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head"> Seat Matrix(2019-20) </h1>
          <h2 className="admissions-sub-head">
            {" "}
            Indian Institute of Information Technology, Lucknow{" "}
          </h2>
        </div>
        <div className="admissions-it-seat-table">
          <table style={{ width: "100%" }}>
            <tr>
              <th>Institute Code</th>
              <th>Program Code</th>
              <th>Program Name</th>
              <th>All India Seats</th>
              <th>Seat Pool</th>
              <th>Open</th>
              <th>Open-PwD</th>
              <th>EWS</th>
              <th>EWS-PwD</th>
              <th>SC</th>
              <th>SC-PwD</th>
              <th>ST</th>
              <th>ST-PwD</th>
              <th>OBC-NCL</th>
              <th>OBC-NCL-PwD</th>
              <th>Total (includes Female Supernumerary)</th>
              <th>Female Supernumerary</th>
            </tr>
            <tr>
              <td>315</td>
              <td>New Program fresh code requested</td>
              <td>B.Tech in Computer Science</td>
              <td>AIR</td>
              <td>Gender-Neutral</td>
              <td>25</td>
              <td>01</td>
              <td>06</td>
              <td>00</td>
              <td>09</td>
              <td>01</td>
              <td>05</td>
              <td>00</td>
              <td>16</td>
              <td>01</td>
              <td>64</td>
              <td>00</td>
            </tr>
          </table>
        </div>

        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head"> Seat Matrix(2019-20) </h1>
        </div>
        <div className="admissions-it-seat-table">
          <table style={{ width: "100%" }}>
            <tr>
              <th>Institute Code</th>
              <th>Program Code</th>
              <th>Program Name</th>
              <th>All India Seats</th>
              <th>Seat Pool</th>
              <th>Open</th>
              <th>Open-PwD</th>
              <th>EWS</th>
              <th>EWS-PwD</th>
              <th>SC</th>
              <th>SC-PwD</th>
              <th>ST</th>
              <th>ST-PwD</th>
              <th>OBC-NCL</th>
              <th>OBC-NCL-PwD</th>
              <th>Total (includes Female Supernumerary)</th>

              <th>Female Supernumerary</th>
            </tr>
            <tr>
              <td>315</td>
              <td>New Program fresh code requested</td>
              <td>B.Tech in Computer Science</td>
              <td>AIR</td>
              <td>Female-only(including Supernumerary)</td>
              <td>04</td>
              <td>01</td>
              <td>01</td>
              <td>00</td>
              <td>02</td>
              <td>00</td>
              <td>01</td>
              <td>00</td>
              <td>04</td>
              <td>00</td>
              <td>13</td>
              <td>02</td>
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
              <a href={CourseStructure} target="blank">
                Course Structure
              </a>
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
            <li>
              <a href={refund} target="blank">
                 Admission withdrawal and refund policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdmissionCS;
