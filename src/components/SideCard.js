import React from "react";
import "./SideCard.css";
import { Link, NavLink } from "react-router-dom";
const Side = props => {
  const lol = props.Ins.anchor.name.map((name, index) => {
    return (
      <div className="side-card-sub-head" key={index}>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "#005699"
          }}
          to={props.Ins.anchor.links[index]}
        >
          {name}
        </NavLink>
      </div>
    );
  });
  return <div className="side-card-sub-head-outer">{lol}</div>;
};
const Card = props => {
  return (
    <div className="side-card-outer">
      <div className="side-card-inner">
        <div className="side-card-head">
          <p>{props.head}</p>
        </div>
        <Side Ins={props.Ins} />
      </div>
    </div>
  );
};
export default Card;
