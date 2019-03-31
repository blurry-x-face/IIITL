import React from "react";
import "./FacultyCard.css";
import facultyCardData from "./FacultyData";
import { Link } from "react-router-dom";

class FacultyCard extends React.Component {
  Card = props => {
    return (
      <div className={props.alt === true ? "blog-card alt" : "blog-card"}>
        <div className="meta">
          <div className="photo" id={props.data.id} />
          <ul className="details">
            <li className="author">
              <a href="#s">{props.data.name}</a>
            </li>
            <li className="date">{props.data.position}</li>
            {/* <li className="tags">{props.data.qualification}</li> */}
          </ul>
        </div>
        <div className="description">
          <h1>{props.data.name}</h1>
          <h2>
            {props.data.position}
            <div>{props.data.qualification}</div>
          </h2>
          <p className="faculty-pseudo">
            <h2 style={{ color: "black" }}>Research Areas:</h2>
            {props.data.researchArea}
          </p>
          <p className="read-more">
            <p className="faulty-contact">{props.data.contact}</p>
            <Link target="blank" to={props.data.link}>
              Read More
            </Link>
          </p>
        </div>
      </div>
    );
  };
  CustomLinkCard = props => {
    return (
      <div className={props.alt === true ? "blog-card alt" : "blog-card"}>
        <div className="meta">
          <div className="photo" id={props.data.id} />
          <ul className="details">
            <li className="author">
              <a href="#s">{props.data.name}</a>
            </li>
            <li className="date">{props.data.position}</li>
            {/* <li className="tags">{props.data.qualification}</li> */}
          </ul>
        </div>
        <div className="description">
          <h1>{props.data.name}</h1>
          <h2>
            {props.data.position}
            <div>{props.data.qualification}</div>
          </h2>
          <p className="faculty-pseudo">
            <h2 style={{ color: "black" }}>Research Areas:</h2>
            {props.data.researchArea}
          </p>
          <p className="read-more">
            <p className="faulty-contact">{props.data.contact}</p>
            <a target="blank" href={props.data.link}>
              Read More
            </a>
          </p>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="faculty-global padding-res    ">
        {/* <this.Card data={facultyCardData[0]} alt={false} /> */}
        <this.Card data={facultyCardData[4]} alt={true} />
        <this.Card data={facultyCardData[2]} alt={false} />
        <this.Card data={facultyCardData[8]} alt={true} />
        <this.Card data={facultyCardData[3]} alt={false} />
        <this.Card data={facultyCardData[5]} alt={true} />
        <this.Card data={facultyCardData[1]} alt={false} />
        <this.Card data={facultyCardData[6]} alt={true} />
        <this.CustomLinkCard data={facultyCardData[7]} alt={false} />
      </div>
    );
  }
}
export default FacultyCard;
