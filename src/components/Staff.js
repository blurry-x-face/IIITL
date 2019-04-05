import React from "react";
import "./Staff.css";
import { staff } from "./Data/StaffData";
import image1 from "../assets/staffData/image4.jpg";
import image2 from "../assets/staffData/image2.jpg";
import image3 from "../assets/staffData/image1.jpg";
import image4 from "../assets/staffData/image5.jpg";
import image5 from "../assets/staffData/image3.jpg";
import image6 from "../assets/staffData/image10.png";
import image7 from "../assets/staffData/image7.jpg";
import image8 from "../assets/staffData/image8.jpg";
import image9 from "../assets/staffData/image6.jpg";
import image10 from "../assets/staffData/image9.jpg";
import image11 from "../assets/staffData/image11.png";

class Staff extends React.Component {
  Card = props => {
    return (
      <div className={props.data.class}>
        <div class="staff-card">
          <img
            src={props.img}
            alt="Jane"
            className="staff-image"
            // style={{ width: "100%" }}
          />
          <div class="staff-container">
            <h2>{props.data.name}</h2>
            <p class="title">{props.data.post}</p>
            <p>{props.data.email}</p>
            <p>{props.data.mobile}</p>
            <p>
              <button class="staff-button">Contact</button>
            </p>
          </div>
        </div>
      </div>
    );
  };
  componentDidMount() {
    document.title =
      "Office & Staff  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="staff-global">
        <div className="admin-satff">
          <h1 style={{ textAlign: "center" }} className="staff-global-head">
            Administrative Staff
          </h1>

          <div class=" staff-row ">
            <div className="staff-r1 staff-r">
              <this.Card img={image1} data={staff[0].Administration[0].data1} />
            </div>
            <div className="staff-r2 staff-r">
              <this.Card img={image2} data={staff[0].Administration[0].data2} />
              <this.Card img={image3} data={staff[0].Administration[0].data3} />
            </div>
            <div className="staff-r3 staff-r">
              <this.Card img={image4} data={staff[0].Administration[0].data4} />
              <this.Card img={image5} data={staff[0].Administration[0].data5} />
            </div>
            <div className="staff-r4 staff-r">
              <this.Card img={image6} data={staff[0].Administration[0].data6} />
              <this.Card img={image7} data={staff[0].Administration[0].data7} />
              <this.Card img={image8} data={staff[0].Administration[0].data8} />
            </div>
          </div>
        </div>
        <div className="admin-satff">
          <h1
            style={{ textAlign: "center", fontSize: 40, marginBottom: 40 }}
            className="staff-global-head"
          >
            Technical Staff
          </h1>

          <div class=" staff-row ">
            <div className="staff-r1 staff-r">
              <this.Card img={image9} data={staff[0].Technical.data1} />
            </div>
            <div className="staff-r2 staff-r">
              <this.Card img={image10} data={staff[0].Technical.data2} />
              <this.Card img={image11} data={staff[0].Technical.data3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Staff;
