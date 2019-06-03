import React from "react";
import "./Announcements.css";
import { tenders } from "./AnnouncemetsData";

class Tender extends React.Component {
  state = { tendersListData: tenders.reverse(), isExpired: false };
  whichOne = b => {
    if (b) {
      this.setState({ isExpired: true }, () => {
        let l = document.getElementById("tender-expired-switch");
        l.classList.add("border-bottom");
        l = document.getElementById("tender-latest-switch");
        l.classList.remove("border-bottom");
        l = document.getElementById("tender-switch-border");
        l.classList.remove("border-left");
        l.classList.add("border-right");
        l = document.getElementById("tender-expired-id");
        l.style.width = "auto";
        l.style.height = "auto";
        l.style.opacity = "1";
        l = document.getElementById("tender-latest-id");
        l.style.width = "0px";
        l.style.opacity = "0";
        l.style.height = "0px";
      });
    } else {
      this.setState({ isExpired: true }, () => {
        let l = document.getElementById("tender-latest-switch");
        l.classList.add("border-bottom");
        l = document.getElementById("tender-expired-switch");
        l.classList.remove("border-bottom");
        l = document.getElementById("tender-switch-border");
        l.classList.remove("border-right");
        l.classList.add("border-left");
        l = document.getElementById("tender-latest-id");
        l.style.height = "auto";
        l.style.opacity = "1";
        l.style.width = "auto";
        l = document.getElementById("tender-expired-id");
        l.style.height = "0px";
        l.style.opacity = "0";
        l.style.width = "0px";
      });
    }
  };
  render() {
    return (
      <div className="padding-res">
        <div id="tender-switch-border" className="tender-inner border-left">
          <div className="tender-switch">
            <h1
              onClick={() => {
                this.whichOne(0);
              }}
              id="tender-latest-switch"
              className="border-bottom"
            >
              Latest Tenders
            </h1>
            <h1
              onClick={() => {
                this.whichOne(1);
              }}
              id="tender-expired-switch"
              className=""
            >
              Expired Tenders
            </h1>
          </div>
          <div className="center">
            <div id="tender-latest-id">
              {this.state.tendersListData.map((v, i) => {
                return (
                  <div key={i}>
                    {!v.isExpired ? (
                      <li>
                        <a href={v.link} target="blank">
                          {v.head}
                        </a>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            margin: "10px 0",
                            color: "rgba(0,0,0,0.65)",
                            fontSize: "16px"
                          }}
                        >
                          {v.date}
                        </p>
                      </li>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
            <div id="tender-expired-id">
              {this.state.tendersListData.map((v, i) => {
                return (
                  <div key={i}>
                    {v.isExpired ? (
                      <li>
                        <a href={v.link} target="blank">
                          {v.head}
                        </a>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            margin: "10px 0",
                            color: "rgba(0,0,0,0.65)",
                            fontSize: "16px"
                          }}
                        >
                          {v.date}
                        </p>
                      </li>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tender;
