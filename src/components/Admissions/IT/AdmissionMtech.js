import React from "react";
import "../Admissions.css";
import ScrollToTopOnMount from "../../ScrollToTop";
import pdfFee from "../../../assets/downloads/Fee Structure M.Tech.pdf";
// import Link from "react-router-dom/Link";
import fresherPDF from "../../../assets/announcementsData/CCMT2019.pdf";
import CourseStructure from "../../../assets/blogs/M.Tech_Course_Structure.pdf";
import refund from "../../../assets/announcementsData/withdrawal_refund_policy.pdf";
import AdmissionMtech1 from "../../../assets/announcementsData/Applicationform.pdf";
import AdmissionMtech2 from "../../../assets/announcementsData/Mtechprg.pdf";
import Info_freshers from "../../../assets/announcementsData/CCMT_NSR.pdf";
import newGIF from "../../../assets/new.gif";



class AdmissionMtech extends React.Component {
  render() {
    return (
      <div className="btech-global admissions-section-global admissions-it-global padding-res">
        <ScrollToTopOnMount />
        <div className="admission-it-global-div">
          <h1 className="btech-global-head">M.Tech. in Computer Science</h1>
          <img src={newGIF} style={{ height: 52,marginLeft: 25 }} alt="newGIF" />
          <h2 className="btech-global-head">Call for Applications to the M.Tech Program</h2>          
          
          <p className="btech-it-p">

          <a className="ext-links" href={AdmissionMtech2} target="blank">
          <img src={newGIF} style={{ height: 22,marginLeft: 5 }} alt="newGIF" />
              <u>Call for Applications to the M.Tech Program</u>
              
            </a>
                   
          </p>

          <p className="btech-it-p">

  <a className="ext-links" href={Info_freshers} target="blank">
  <img src={newGIF} style={{ height: 22,marginLeft: 5 }} alt="newGIF" />
    <u>Information for Freshers</u>
    
  </a>

  
</p>

          <div className="admissions-it-seat admissions-useful-links">
            <h1 className="admissions-sub-head"> Specialization </h1>
          </div>
          <ul>
            <li>Data Science</li>
            <li>Artificial Intelligence</li>
          </ul>
        </div>
        <div className="admissions-it-seat admissions-useful-links">
          <h1 className="admissions-sub-head"> Seat Matrix </h1>
        </div>
        <div className="admissions-it-seat-table">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <th>Institute Code</th>
                <th>Institute</th>
                <th>Program</th>
                <th>General</th>
                <th>General-EWS</th>
                <th>General-PwD</th>
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
                <td>310</td>
                <td>Indian Institute of Information Technology, Lucknow</td>
                <td>M.Tech. (Computer Science)</td>
                <td>11</td>
                <td>3</td>
                <td>1</td>
                <td>5</td>
                <td>0</td>
                <td>2</td>
                <td>0</td>
                <td>8</td>
                <td>0</td>
                <td>30</td>
                <td>All India</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="admissions-useful-links ">
          <h1 className="admissions-sub-head">Useful Links</h1>
          <ul>
          <li className="admissions-course-structure">
              <a href={AdmissionMtech1} target="blank">
                Application form of M.Tech Program
              </a>
            </li>
            <li className="admissions-course-structure">
              <a href={CourseStructure} target="blank">
                Course Structure
              </a>
            </li>
            <li>
              <a href={pdfFee} target="blank">
                Fee Structure
              </a>
            </li>
            <li>
              <a href={refund} target="blank">
                 Admission withdrawal and refund policy
              </a>
            </li>
          </ul>
        </div>
        <div className="admissions-useful-links ">
          <h1 className="admissions-sub-head">Contact Persons</h1>
          <ul>
            <li className="admissions-anchor-structure">
              Mr. Vivekanand Sinha <br />
              Assistant Registrar (AFA)
              <br />
              Mob.: 9415395066
              <br />
              E-mail:{" "}
              <a
                style={{ color: "#005699", textDecoration: "none" }}
                href="mailto:ar.afa@iiitl.ac.in"
              >
                ar.afa@iiitl.ac.in
              </a>
            </li>
            <li className="admissions-anchor-structure">
              Mr. Shivam Dubey
              <br />
              Mob.: 9335158900
              <br />
              E-mail: <a href="mailto:shivam@iiitl.ac.in">shivam@iiitl.ac.in</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdmissionMtech;
