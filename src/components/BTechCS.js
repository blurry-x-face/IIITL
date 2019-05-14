import React from "react";
import "./BTechIT.css";
import ScrollToTopOnMount from "./ScrollToTop";

class BTechCS extends React.Component {
  componentDidMount() {
    document.title =
      "BTech In CS  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="btech-global padding-res">
        <ScrollToTopOnMount />
        <div className="btech-global-div">
          <h1 className="btech-global-head"> B.Tech. in CS</h1>
          <p className="btech-it-p">
            Admissions to the four year B.Tech. Program in CS branch of the
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
          <p className="btech-p">
            The Institute is open to all races, creeds and classes including
            persons of either sex (including transgender). As Central Education
            Institution IIIT follows the Central Educational Institutions
            (Reservation in Admission) Act, 2006.
          </p>
        </div>
      </div>
    );
  }
}
export default BTechCS;
