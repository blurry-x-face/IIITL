import React from "react";
import "./BTechIT.css";
import ScrollToTopOnMount from "./ScrollToTop";

class BTechCS extends React.Component {
  componentDidMount() {
    document.title =
      "BTech In CSE  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="btech-global padding-res">
        <ScrollToTopOnMount />
        <div className="btech-global-div">
          <h1 className="btech-global-head"> B.Tech. in CSE</h1>
          <p className="btech-p">
            Admissions to the four year B.Tech. Program in CSE branch of the
            Institute is made through the examination conducted by CBSE under
            the name and style of JEE (Main). Based upon the merit in the
            written examination, Central Counseling Board of JEE (Main) invites
            candidates for counseling at selected centers and seats for various
            participating institutions are allotted, based upon individual
            merit.
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
