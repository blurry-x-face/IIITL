import React from "react";
import "./footer.css";

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
              <div className="connect-content footer-inner-content">
                <i className="fab fa-facebook" />
                Facebook
              </div>
              <div className="connect-content footer-inner-content">
                <i className="fab fa-linkedin" />
                Linkedin
              </div>
              <div className="connect-content footer-inner-content">
                <i className="fas fa-envelope" />
                Mail
              </div>
            </div>
          </div>
          <div className="footer-column about-site">
            <div className="about-site-inner footer-inner">
              <div className="footer-head about-site-head">About this site</div>
              <div className="about-site-content footer-inner-content">
                Team
              </div>
              <div className="about-site-content footer-inner-content">
                Tech Used
              </div>
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
              <div className="contact-content footer-inner-content">
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
              <div className="external-links-content footer-inner-content">
                <i className="fas fa-link" />
                IIIT Allahabad
              </div>
              <div className="external-links-content footer-inner-content">
                <i className="fas fa-link" />
                IIIT Council
              </div>
              <div className="external-links-content footer-inner-content">
                <i className="fas fa-link" />
                UPLC | Industry Partner
              </div>
            </div>
          </div>

          <div className="footer-column footer-column-b footer-column-b-res ">
            <div className="portals  portals-inner footer-inner">
              <div className="portals-head footer-head">Portals</div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                Portals
              </div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                Help Desk
              </div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                INDEM
              </div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                Library
              </div>
            </div>
          </div>
          <div className="footer-column footer-downloads">
            <div className="portals portals-inner footer-inner">
              <div className="portals-head footer-head">Links</div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                Downloads
              </div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                Academic Calender
              </div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                Course Structure
              </div>
              <div className="portals-content footer-inner-content">
                <i className="fas fa-link" />
                Library
              </div>
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
