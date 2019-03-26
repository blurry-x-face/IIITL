import React from "react";
import "./SideCard.css";
import { Link } from "react-router-dom";
const Side = props => {
  const lol = props.Ins.anchor.name.map((name, index) => {
    return (
      <div className="side-card-sub-head" key={index}>
        <Link to={props.Ins.anchor.links[index]}>{name}</Link>
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
