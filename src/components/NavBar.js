import React, { Component } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import newGIF from "../assets/new.gif";
import { NavData } from "./Data";
import AltNav from "./Alt-nav";

export default class NavBar extends Component {
  state = { NavButtons: NavData.NavButtons };
  openNav() {
    document.getElementById("alt-nav-id").style.display = "block";
    document.getElementById("btn-open").style.display = "none";
    document.getElementById("btn-close").style.display = "inline";
  }
  closeNav() {
    document.getElementById("alt-nav-id").style.display = "none";
    document.getElementById("btn-open").style.display = "inline";
    document.getElementById("btn-close").style.display = "none";
  }
  render() {
    return (
      <nav className="nav-global">
        <div className="nav-flex padding-res">
          <div className="navbar">
            {this.state.NavButtons.map((v, i) => {
              return <Dropdown key={i} data={v} />;
            })}
            <div className="toggle-btn">
              <button
                className="toggle-btn"
                id="btn-open"
                onClick={() => this.openNav()}
              >
                <div className="toggle-btn-line toggle-btn-line-1" />
                <div className="toggle-btn-line toggle-btn-line-2" />
                <div className="toggle-btn-line toggle-btn-line-3" />
              </button>
              <button
                className="toggle-btn"
                id="btn-close"
                onClick={() => this.closeNav()}
              >
                <div className="toggle-btn-line toggle-btn-line-1-close" />
                <div className="toggle-btn-line toggle-btn-line-2-close" />
              </button>
            </div>
          </div>
          <div className="nav-icons">
            <a
              target="blank"
              href="https://www.facebook.com/iiitlucknow/"
              className="nav-res"
            >
              <i className="fab fa-facebook" />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/school/iiitl/"
              className="nav-res"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://twitter.com/iiitlucknow"
              target="blank"
              className="nav-res"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
        <AltNav />
      </nav>
    );
  }
}
const Dropdown = props => {
  return (
    <>
      {props.data.isAnchor ? (
        props.data.isGIF ? (
          <NavLink
            to={props.data.link}
            className="nav-NavLink nav-res"
            style={{ marginTop: "-4px" }}
          >
            {props.data.head} <img src={newGIF} alt="new" id="new-gif" />
          </NavLink>
        ) : (
          <a
            target="blank"
            href={props.data.link}
            className="nav-NavLink nav-res"
          >
            {props.data.head}
          </a>
        )
      ) : (
        <div className="dropdown nav-res">
          <button className="dropbtn">
            {props.data.head}
            {props.data.isGif ? (
              <img src={newGIF} alt="new" id="new-gif" />
            ) : (
              <i className="fa fa-caret-down" />
            )}
          </button>
          <div className="dropdown-content">
            {props.data.drop.map((v, i) => {
              return (
                <div
                  key={i}
                  className="dropdown-content-c-1 dropdown-content-c"
                >
                  <div className="dropdown-content-c-1-head dropdown-content-head">
                    {v.head}
                  </div>
                  {v.links.map((val, index) => {
                    return (
                      <>
                        {val.isAnchor ? (
                          <a href={val.link} target="blank" className="af-1">
                            {val.head}
                          </a>
                        ) : (
                          <NavLink to={val.link} key={index} className="af-1">
                            {val.head}
                          </NavLink>
                        )}
                      </>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
