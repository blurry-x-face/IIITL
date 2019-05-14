import React from "react";
import "./BTechIT.css";
import ScrollToTopOnMount from "./ScrollToTop";

class BTech extends React.Component {
  componentDidMount() {
    document.title =
      "BTech In IT  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="btech-global padding-res">
        <ScrollToTopOnMount />
        <div className="btech-global-div">
          <h1 className="btech-global-head"> B.Tech. in IT</h1>
          <p className="btech-p">
            Admissions to the four year B.Tech. Program in IT branch of the
            Institute is made through Central Seat Allocation Board 2019
            (CSAB-2019)/JoSAA. Based upon the merit in JEE (Mains).
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
export default BTech;
