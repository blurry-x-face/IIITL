import React from "react";
import "../Admissions.css";
import ScrollToTopOnMount from "../../ScrollToTop";
import Phd_result from "../../../assets/downloads/Phdresult.pdf";
import newGIF from "../../../assets/new.gif";

class AdmissionIT extends React.Component {
  render() {
    return (
      <div className="btech-global admissions-section-global admissions-it-global padding-res">
        <ScrollToTopOnMount />
                
        <p className="btech-it-p">
          
               
            <li style={{ marginBottom: "15px" }}>
              <a
                href={Phd_result}
                style={{ color: "#005f99" }}
                target="blank"
              > 
                List of provisionally selected candidates for admission July 2019 - session
              </a>{" "}
             </li>
          
        </p>
      </div>
    );
  }
}

export default AdmissionIT;
