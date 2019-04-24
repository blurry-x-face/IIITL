import React from "react";
import "../Admissions.css";
import ScrollToTopOnMount from "../../ScrollToTop";
import pdfFee from "../../../assets/downloads/Fee Structure M.Tech.pdf";
import Link from "react-router-dom/Link";

class AdmissionMtech extends React.Component {
  render() {
    return (
      <div className="btech-global admissions-section-global admissions-it-global padding-res">
        <ScrollToTopOnMount />
        <div className="admission-it-global-div">
          <h1 className="btech-global-head">M.Tech. in Computer Science</h1>
          <p className="btech-it-p">
            Admissions to the two year M.Tech. (Computer Science) Program of the Institute is made through the <a className="ext-links" href ="https://ccmt.nic.in/webinfo/Public/Home.aspx">CCMT</a> based on GATE (Graduate Aptitude Test
  in Engineering) score. Admission begins in May and gets completed by July. Session for 1st semester begins in August. For exact dates, notifications need to be followed.
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
                <td>310</td>
                <td>Indian Institute of Information Technology, Lucknow</td>
                <td>4116</td>
                <td>M.Tech. (Computer Science)</td>
                <td>14</td>
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
              <Link to="/coming-soon">Course Structure</Link>
            </li>
            <li>
              <a href={pdfFee} target="blank">
                Fee Structure
              </a>
            </li>
          </ul>
        </div>
        <div className="admissions-useful-links ">
          <h1 className="admissions-sub-head">Contact Persons</h1>
          <ul>
            <li className="admissions-course-structure">
              Mr. Vivekanand Sinha <br/>
              Assistant Registrar (AFA)<br/>
              Mob.: 9415395066<br/>
              E-mail: <a style={{color: '#005699', textDecoration:"none"}} href="mailto:ar.afa@iiitl.ac.in">ar.afa@iiitl.ac.in</a>
            </li>
            <li className="admissions-course-structure">
              Mr. Shivam Dubey<br/>
              Mob.: 9335158900<br/>
              E-mail: <a href="mailto:shivam@iiitl.ac.in">shivam@iiitl.ac.in</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdmissionMtech;
