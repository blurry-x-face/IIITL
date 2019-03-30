import React from "react";
import "./Above-nav.css";
import { Link } from "react-router-dom";

const AboveNav = () => {
  return (
    <div className="above-nav-container-g padding-res">
      <div className="above-nav-container">
        <div className="above-nav-left">
          <Link to="/">
            {/* <div className="above-nav-head">IIIT Lucknow</div>
          <div className="above-nav-head-desc">
            Indian Institute of Information Technology, Lucknow
          </div> */}
            <img
              src="https://iiitl.ac.in/themes/custom/zircon/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="above-nav-right">
          <div className="above-nav-right-nav">
            <div className="above-nav-right-icons">
              <div className="above-nav-right-icon-1 above-nav-right-icon">
                <Link to="/">
                  <i className="fas fa-home" />
                  Home
                </Link>
              </div>
              <div className="above-nav-right-icon-2 above-nav-right-icon">
                <a href="mailto:contact@iiitl.ac.in">
                  <i className="fas fa-envelope" />
                  Webmail
                </a>
              </div>
              <div className="above-nav-right-icon-3 above-nav-right-icon">
                <div id="google_translate_element" />
                {/* <i class="fas fa-arrow-down" style={{ paddingLeft: "5px" }} /> */}
              </div>
            </div>
            <div className="above-nav-right-search">
              <input type="text" name="Search" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboveNav;
