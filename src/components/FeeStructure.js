import React, { Component } from "react";
import Feebatch2019 from "../assets/downloads/fee_btech_2019.pdf";
import Feebatch2017_18 from "../assets/downloads/fee_btech_2017_18.pdf";
import Feebatch2016 from "../assets/downloads/fee_btech_2016.pdf";
import FeeDasa from "../assets/downloads/fee_dasa.pdf";


class FeeStructure extends Component {
  state = {
    feeStructureList: [
     { anchor: Feebatch2019, para: "Fee Structure batch(2019)" },
      { anchor: Feebatch2017_18, para: "Fee Structure batch(2017) & (2018)" },
      { anchor: Feebatch2016, para: "Fee Structure batch(2016)" },
      { anchor: FeeDasa, para: "Fee Structure for DASA" }
              
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
          Fee Structure
        </h1>
        <ul>
          {this.state.feeStructureList.map((v, i) => (
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

export default FeeStructure;

