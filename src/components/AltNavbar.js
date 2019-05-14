import React, { Component } from "react";
import "./alt-nav.css";
import { NavLink } from "react-router-dom";
import { NavData } from "./Data";

export default class AltNavbar extends Component {
  state = { NavButtons: NavData.NavButtons };
  render() {
    return <div className="alt-navbar" id="alt-nav-id" style={{ display: "none" }}>
    
    </div>;
  }
}
const DropDown=props=>{
    
}