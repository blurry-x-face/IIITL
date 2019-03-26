import React from "react";
import "./Staff.css";

class Staff extends React.Component {
  Card = props => {
    return (
      <div class="staff-column">
        <div class="staff-card">
          <img src={props.img} alt="Jane" style={{ width: "100%" }} />
          <div class="staff-container">
            <h2>Staff Member</h2>
            <p class="title">Staff Post</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p>
              <button class="staff-button">Contact</button>
            </p>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="padding-res">
        <h1 style={{ textAlign: "center" }}>Type of Staff</h1>

        <div class=" staff-row ">
          <this.Card img="https://iiitl.ac.in/sites/default/files/inline-images/vks_0.png" />
          <this.Card img="https://iiitl.ac.in/sites/default/files/inline-images/vks_0.png" />
          <this.Card img="https://iiitl.ac.in/sites/default/files/inline-images/vks_0.png" />
          {/* <div className='staff-flex-grows' /> */}
        </div>
      </div>
    );
  }
}

export default Staff;
