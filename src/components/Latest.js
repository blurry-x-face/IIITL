import React from "react";
import "./Latest.css";
import { Link } from "react-router-dom";
import tenderPDF from "../assets/downloads/Tender.pdf";
import tendorExtension from "../assets/downloads/Tender_Extension.pdf";

class Latest extends React.Component {
  render() {
    return (
      <div className="latest-global">
        <div className="blog-container-head curious-head">
          Announcements from IIITL
        </div>
        <div className="blog-container-global">
          <div className="blog-container-contents">
            <a target="blank" href={tendorExtension}>
              <div className="box-7 hidden1 active1">
                <p className="latest-blog-date">April, 2019</p>
                <p className="latest-blog-head">Extension of Tender</p>{" "}
                <p className="latest-blog-content">
                  Extension of Tender for hiring of premises for Director IIIT
                  Lucknow
                </p>
              </div>
            </a>
            <a target="blank" href={tenderPDF}>
              <div className="box-6 hidden1 active1">
                <p className="latest-blog-date">April, 2019</p>{" "}
                <p className="latest-blog-head">Tender Notice</p>{" "}
                <p className="latest-blog-content">
                  Hiring of residential premises for Director,IIIT-L
                </p>
              </div>
            </a>
            <Link to="/announcements/1">
              <div className="box-1 hidden1 active1">
                {" "}
                <p className="latest-blog-date">March 2, 2019</p>{" "}
                <p className="latest-blog-head">Logo Design Contest</p>{" "}
                <p className="latest-blog-content">
                  The Contest is open to all IIITL Students, Employees and all
                  stake holders of IIITL.
                </p>
              </div>
            </Link>
            <Link to="/announcements/2">
              <div className="box-2 hidden1 active1">
                <p className="latest-blog-date">January, 2019</p>{" "}
                <p className="latest-blog-head">Updated Academic Calendar</p>{" "}
                <p className="latest-blog-content" />
              </div>
            </Link>
            {/* <Link to="/announcements/3">
              <div className="box-3 hidden1 active1">
                <p className="latest-blog-date">July, 2019</p>{" "}
                <p className="latest-blog-head">Updated Fee Structure</p>{" "}
                <p className="latest-blog-content">
                  Fee Structure for IIIT Lucknow has been updated.
                </p>
              </div>
            </Link> */}
            {/* <Link to="/announcements/4">
              <div className="box-4 hidden1 active1">
                <p className="latest-blog-date">October 14, 2018</p>{" "}
                <p className="latest-blog-head">
                  Postponement of Selection Process
                </p>{" "}
                <p className="latest-blog-content">
                  Postponement of proposed Selection Process on 14th October
                  2018 for the post of Junior Superintendent and Junior Engineer
                  for IIIT Lucknow till further order. Will be intimated next
                  date when it is finalized.
                </p>
              </div>
            </Link> */}
            {/* <Link to="/announcements/5">
              <div className="box-5 hid-res hidden1 active1">
                <p className="latest-blog-date">Jan, 2018</p>{" "}
                <p className="latest-blog-head">Recruitment of Faculty</p>{" "}
                <p className="latest-blog-content" />
              </div>
            </Link> */}
          </div>
        </div>
        <div className="latest-more">
          <h3>
            <Link to="/announcements"> Read More-></Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default Latest;
