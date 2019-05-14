import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-r1">
          <div className="footer-column footer-column-res" />
          <div className="footer-column footer-column footer-column-res" />
          <div className="footer-column footer-column-b" />
          <div className="connect-with-us footer-column footer-column-b">
            <div className="connect-inner footer-inner">
              <div className="footer-head connect-head">Connect with us</div>
              <a
                target="blank"
                href="https://www.facebook.com/iiitlucknow/"
                className="connect-content footer-inner-content"
              >
                <i className="fab fa-facebook" />
                Facebook
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/school/iiitl/"
                className="connect-content footer-inner-content"
              >
                <i className="fab fa-linkedin" />
                Linkedin
              </a>
              <a
                href="mailto:contact@iiitl.ac.in"
                className="connect-content footer-inner-content"
              >
                <i className="fas fa-envelope" />
                Mail
              </a>
              <Link
                to="/contactus"
                className="connect-content footer-inner-content"
              >
                <i className="fas fa-link" />
                Reach Us
              </Link>
            </div>
          </div>
          <div className="footer-column about-site">
            <div className="about-site-inner footer-inner">
              <div className="footer-head about-site-head">About this site</div>
              <a
                href="https://axios.iiitl.ac.in/wings/webDevelopment/"
                className="about-site-content footer-inner-content"
                target="blank"
              >
                Team
              </a>
              <a
                href="https://reactjs.org/"
                target="blank"
                className="about-site-content footer-inner-content"
              >
                Tech Used
              </a>
            </div>
          </div>
          <div className="footer-column" />
        </div>
        <div className="footer-r2">
          <div className="footer-column footer-column-res " />
          <div className="footer-column footer-column-b footer-column-b-res">
            <div className="contact contact-inner">
              <div className="contact-head footer-head">IIIT Lucknow</div>
              <div className="contact-content footer-inner-content contact-content-copy">
                <i
                  className="far fa-copyright"
                  style={{ fontSize: "0.78em", paddingRight: 5 }}
                />
                2019 IIIT Lucknow
              </div>
              <div className="footer-inner-content contact-content">
                <i className="fas fa-home" />
                IIIT Allahabad, Jhalwa, Allahabad - 211015
              </div>
              <div className="contact-content footer-inner-content">
                <i className="fas fa-envelope" /> contact@iiitl.ac.in
              </div>
              <div className="contact-content footer-inner-content">
                <i
                  className="fa fa-phone"
                  style={{ marginLeft: "-7px" }}
                  aria-hidden="true"
                />
                +0532 292 2032
              </div>
            </div>
          </div>
          <div className="footer-column footer-column-b footer-column-b-res">
            <div className="external-links external-links-inner footer-inner">
              <div className="external-links-head footer-head">
                External Links
              </div>
              <a
                href="http://iiita.ac.in"
                target="blank"
                className="external-links-content footer-inner-content"
              >
                <i className="fas fa-link" />
                IIIT Allahabad
              </a>
              <a
                href="https://iiitcouncil.com"
                target="blank"
                className="external-links-content footer-inner-content"
              >
                <i className="fas fa-link" />
                IIIT Council
              </a>
              <a
                target="blank"
                href="http://www.uplc.in/"
                className="external-links-content footer-inner-content"
              >
                <i className="fas fa-link" />
                UPLC | Industry Partner
              </a>
            </div>
          </div>

          <div className="footer-column footer-column-b footer-column-b-res ">
            <div className="portals  portals-inner footer-inner">
              <div className="portals-head footer-head">Portals</div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                Portals
              </div>
              <a
                href="https://helpdesk.iiita.ac.in/"
                target="blank"
                className="portals-content footer-inner-content"
              >
                <i className="fas fa-link" />
                Help Desk
              </a>
              <a
                href="http://pldap.iiita.ac.in/"
                target="blank"
                className="portals-content footer-inner-content"
              >
                <i className="fas fa-link" />
                INDEM
              </a>
              <a
                href="http://library.iiita.ac.in/"
                target="blank"
                className="portals-content footer-inner-content"
              >
                <i className="fas fa-link" />
                Library
              </a>
            </div>
          </div>
          <div className="footer-column footer-downloads">
            <div className="portals portals-inner footer-inner">
              <div className="portals-head footer-head">Links</div>
              <Link
                to="/downloads"
                className="portals-content footer-inner-content"
              >
                <i className="fas fa-link" />
                Downloads
              </Link>
              <Link
                to="/calender"
                className="portals-content footer-inner-content"
              >
                <i className="fas fa-link" />
                Academic Calender
              </Link>
              <Link
                to="/course-structure"
                className="portals-content footer-inner-content"
              >
                <i className="fas fa-link" />
                Course Structure
              </Link>
              <a
                href="https://rtionline.gov.in/"
                target="blank"
                className="portals-content footer-inner-content"
              >
                <i className="fas fa-link" />
                RTI
              </a>
            </div>
          </div>
          <div className="footer-column footer-column-res" />
        </div>
        {/* <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <div className="footer-bottom-head">IIIT Lucknow</div>
            <div className="footer-bottom-contact-content footer-bottom-inner-content footer-bottom-contact-content-copy">
              <i
                className="far fa-copyright"
                style={{ fontSize: "0.78em", paddingRight: 5 }}
              />
              2019 IIIT Lucknow
            </div>
            <div className="footer-bottom-contact-content footer-bottom-inner-content footer-bottom-contact-content-copy">
              <i className="fas fa-home" />
              IIIT Allahabad, Jhalwa, Allahabad - 211015
            </div>
            <div className="footer-bottom-contact-content footer-bottom-inner-content footer-bottom-contact-content-copy">
              <i className="fas fa-envelope" /> contact@iiitl.ac.in
            </div>
            <div className="footer-bottom-contact-content footer-bottom-inner-content footer-bottom-contact-content-copy">
              <i className="fa fa-phone" aria-hidden="true" />
              +0532 292 2032
            </div>
          </div>
        </div>
  */}{" "}
      </footer>
    );
  }
}

export default Footer;
