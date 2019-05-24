import React from "react";
import "../Admissions.css";
import ScrollToTopOnMount from "../../ScrollToTop";
import feeBtech from "../../../assets/blogs/fee_btech.pdf";
import feeDasa from "../../../assets/blogs/fee_dasa.pdf";
import Link from "react-router-dom/Link";

class AdmissionIT extends React.Component {
  render() {
    return (
      <div className="btech-global admissions-section-global admissions-it-global padding-res">
        <ScrollToTopOnMount />
        <div className="admission-it-global-div">
          <h1 className="btech-global-head"> B.Tech. in IT</h1>
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
            .
          </p>
          <p className="btech-it-p">
            The Institute is open to all races, creeds and classes including
            persons of either sex (including transgender). As Central Education
            Institution IIIT follows the Central Educational Institutions
            (Reservation in Admission) Act, 2006.
          </p>
        </div>
        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head"> Seat Matrix (2019-20) </h1>
          <h2 className="admissions-sub-head"> Indian Institute of Information Technology, Lucknow</h2>
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
              <td>4146</td>
              <td>B.Tech in Information Technology</td>
              <td>AIR</td>
              <td>Gender-Neutral</td>
              <td>25</td>
              <td>01</td>
              <td>06</td>
              <td>01</td>
              <td>09</td>
              <td>00</td>
              <td>04</td>
              <td>01</td>
              <td>16</td>
              <td>01</td>
              <td>64</td>
              
              <td>00</td>
              </tr>

           </table>
           

        </div>

        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head"> Seat Matrix (2019-20) </h1>
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
              <td>4146</td>
              <td>B.Tech in Information Technology</td>
              <td>AIR</td>
              <td>Female-only(including Supernumerary)</td>
              <td>05</td>
              <td>00</td>
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
              <td>ITY</td>
              <td>4</td>
              <td>7</td>
              <td>11</td>
            </tr>
          </table>
        </div>  

        <div className="admissions-useful-links ">
          <h1 className="admissions-sub-head">Useful Links</h1>
          <ul>
            <li className="admissions-course-structure">
              <Link to="/course-structure">Course Structure</Link>
            </li>
            <li>
              <a href={feeBtech} target="blank">
                Fee Structure
              </a>
            </li>
            <li>
              <a href={feeDasa} target="blank">
                Fee Structure for DASA students
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdmissionIT;
