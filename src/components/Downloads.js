import React from "react";
import "./Downloads.css";
import BOG1 from "../assets/downloads/BOG-1.pdf";
import BOG2 from "../assets/downloads/BOG-2.pdf";
import BOG3 from "../assets/downloads/BOG-3.pdf";
import BOG4 from "../assets/downloads/BOG-4.pdf";
import BOG5 from "../assets/downloads/BOG-5.pdf";
import BOG6 from "../assets/downloads/BOG-6.pdf";
import BOG7 from "../assets/downloads/BOG-7.pdf";
import Senate1 from "../assets/downloads/Senate-1.pdf";
import Senate2 from "../assets/downloads/Senate-2.pdf";
import Ordinance from "../assets/downloads/Ordinance.pdf";
import Statues from "../assets/downloads/StatutesOfIIITLucknow.pdf";
import ScrollToTopOnMount from "./ScrollToTop";

import form1 from '../assets/downloads/bigIndentForm.pdf';
import form2 from '../assets/downloads/childrenEducationform.pdf';
import form3 from '../assets/downloads/employeeMedical.pdf';
import form4 from '../assets/downloads/icardForm.pdf';
import form5 from '../assets/downloads/leaveApplicationForm.pdf';
import form6 from '../assets/downloads/studentLeaveForm.pdf';
import form7 from '../assets/downloads/studentMedicalForm.pdf';
import form8 from '../assets/downloads/TAForm.pdf';
import form9 from '../assets/downloads/StudentNoDues.pdf';
import form10 from '../assets/downloads/INDENT_FORM.pdf';


const BoGMeeting = [
  ["Minutes of First BOG Meeting", BOG1],
  ["Minutes of Second BOG Meeting", BOG2],
  ["Minutes of Third BOG Meeting", BOG3],
  ["Minutes of Fourth BOG Meeting", BOG4],
  ["Minutes of Fifth BOG Meeting", BOG5],
  ["Minutes of Sixth BOG Meeting", BOG6],
  ["Minutes of Seventh BOG Meeting", BOG7]
];
const senate = [
  ["Minutes of First SENATE Meeting", Senate1],
  ["Minutes of Second SENATE Meeting", Senate2]
];
const forms = [
  ["Indent Form 1", form1],
  ["Indent Form 2", form10],
  ["Children Education Form", form2],
  ["Employee Medical Form", form3],
  ["I-Card form", form4],
  ["Leave Application Form", form5],
  ["Student Leave Form", form6],
  ["Student Medical Form", form7],
  ["Travelling Allowance Claim Form", form8],
  ["Student No Dues Form", form9]
];
class Downloads extends React.Component {
  List = props => {
    let li = props.data.map(item => {
      return (
        <li>
          <a href="/coming-soon">{item}</a>
        </li>
      );
    });
    return <ul className="downloads-list">{li}</ul>;
  };
  Lists = props => {
    let li = props.data.map(item => {
      return (
        <li>
          <a href={item[1]} target="blank">
            {item[0]}
          </a>
        </li>
      );
    });
    return <ul className="downloads-list">{li}</ul>;
  };
  componentDidMount() {
    document.title =
      "Downloads  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="downloads-global padding-res">
        <ScrollToTopOnMount />
        <div className="downloads-head">
          <h1 className="downloads-global-head">Downloads</h1>
          <h2 className="downloads-global-sub-head">Minutes of BOG Meetings</h2>
          <this.Lists data={BoGMeeting} />
          <h2 className="downloads-global-sub-head">
            Minutes of SENATE Meetings
          </h2>
          <this.Lists data={senate} />
          <h2 className="downloads-global-sub-head">Ordinance</h2>
          <p className="ordinance-para">
            IIIT-Lucknow follows the academic ordinance of IIIT- Allahabad at
            present.
          </p>
          <p className="ordinance-link">
            For detailed ordinance{" "}
            <a href={Ordinance} target="blank" className="ordinance-link-link">
              Click Here
            </a>
          </p>
          <h2 className="downloads-global-sub-head">
            Statutes Of IIIT-Lucknow
          </h2>
          <p>
            <a href={Statues} target="blank">
              Statutes of IIIT-L (22-10-2018)
            </a>
          </p>
          <h2 className="downloads-global-sub-head">Forms and Formats</h2>
          <this.Lists data={forms} />
        </div>
      </div>
    );
  }
}

export default Downloads;
