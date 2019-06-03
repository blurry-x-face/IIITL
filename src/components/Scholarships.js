import React, { Component } from "react";
import Scholar from "../assets/downloads/UP_PMS_Notice_Aadhar_Card.pdf";

class Scholarships extends Component {
  state = {
    scolarshipList: [
      { anchor: Scholar, para: "Scholarships offered at IIIT LUCKNOW" }
    ]
  };
  render() {
    return (
      <div
        style={{
          minHeight: "30vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Playfair Display",
          margin: "10px 0px 80px 0px"
        }}
      >
        <h1
          style={{
            marginBottom: "40px",
            fontSize: "40px",
            fontWeight: "normal"
          }}
        >
          Scholarships offered
        </h1>
        <ul>
          {this.state.scolarshipList.map((v, i) => (
            <li
              style={{
                width: "fit-content",
                fontSize: "20px",
                marginBottom: "20px"
              }}
            >
              <a
                style={{ color: "#005699", textDecoration: "none" }}
                target="blank"
                href={v.anchor}
              >
                {v.para}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Scholarships;
