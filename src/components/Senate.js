import React from "react";
import "./Senate.css";
import ScrollToTopOnMount from "./ScrollToTop";

class Senate extends React.Component {
  componentDidMount() {
    document.title =
      "Senate  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="senate-global padding-res">
        <ScrollToTopOnMount />
        <div className="senate-table">
          <div className="senate-head">Senate</div>
          <table>
            <tbody>
              <tr>
                <th>S. No.</th>
                <th>Under Section of IIIT-PPP Act, 2017</th>
                <th>Composition</th>
                <th>Member</th>
              </tr>
              <tr>
                <td>1</td>
                <td> 18(1)(a)</td>
                <td>
                  The Director of the Institute, who shall be the ex-officio
                  Chairperson of the Senate
                </td>
                <td>Dr. Arun Mohan Sherry Director, IIIT-Lucknow</td>
              </tr>
              <tr>
                <td>2</td>
                <td> 18(1)(b)</td>
                <td>All Deans, ex-officio</td>
                <td>
                  Interim Dean Academic, Infrastructures & Student Affairs
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>18(1)(c)</td>
                <td>
                  Heads of all departments, faculties or schools, ex-officio as
                  the case may be, of the Institute
                </td>
                <td>
                  Head &amp; Coordinator for Admissions &amp; Examinations
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>18(1)(f)</td>
                <td>
                  Three persons who are not members of teaching staff co-opted
                  by the Senate for their specialized knowledge.
                </td>
                <td>
                  <div className="sub-table">
                    <div>1.</div>
                    <div className="sub-table-name">
                      {" "}
                      Prof. Raghuraj Singh Professor, Computer Science HBTU,
                      Kanpur & Former Director, KNIT, Sultanpur Prof.
                    </div>
                  </div>{" "}
                  <div className="sub-table">
                    <div> 2.</div>
                    <div className="sub-table-name">
                      {" "}
                      Surya Prakash Tripathi Professor of Computer Science
                      Institute of Engineering & Technology, Lucknow
                    </div>
                  </div>{" "}
                  <div className="sub-table">
                    <div>3.</div>
                    <div className="sub-table-name">
                      {" "}
                      Prof. T. Lahiri Dean (Academic & Research) IIIT-Allahabad.
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td> 18(1)(g)</td>
                <td> Registrar of the Institute, ex-officio Secretary.</td>
                <td>Interim Registrar, IIITL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Senate;
