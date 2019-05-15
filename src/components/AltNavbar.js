import React, { Component } from "react";
import "./alt-nav.css";
import { NavLink } from "react-router-dom";
import { NavData } from "./Data";

export default class AltNavbar extends Component {
  state = { NavButtons: NavData.NavButtons };
  render() {
    return (
      <div className="alt-navbar" id="alt-nav-id" style={{ display: "none" }}>
        {this.state.NavButtons.map((v, i) => {
          return <DropDown key={i} data={v} />;
        })}
      </div>
    );
  }
}
const DropDown = props => {
  return (
    <div className="alt-dropdown">
      <button
        className="alt-dropbtn"
        onClick={() => this.openNav("alt-dropdown-content-1")}
      >
        {props.data.head}
        <i className="fa fa-caret-down" />
      </button>
      <div className="alt-dropdown-content" id="alt-dropdown-content-1">
        {props.data.drop.map((v, i) => {
          return (
            <>
              <div
                key={i}
                className="alt-dropdown-content-c-1-head alt-dropdown-content-head"
              >
                {v.head}
              </div>
              {v.links.map((val, index) => {
                return (
                  <NavLink key={index} to={val.link}>
                    {val.head}
                  </NavLink>
                );
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};
