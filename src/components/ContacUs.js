import React, { Component } from "react";
import image from "../assets/ReachUs.png";
import "./ContactUs.css";
import ScrolltoTop from "./ScrollToTop";

class ContactUs extends Component {
  componentDidMount() {
    document.title =
      "Contact Us  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="contact-us-global">
        <ScrolltoTop />
        <h1 className="contact-us-global-head">Reach us</h1>
        <div className="contact-us">
          <div className="contact-us-img">
            <img src={image} alt="img" />
          </div>
          <div className="contact-us-para-global">
            <p className="contact-us-para">
              The permanent campus of IIIT, Lucknow is coming up in 50 acres of
              land at Chak Ganjaria Region, Lucknow. The Institute is being set
              up with the financial contributions of MHRD, Govt. of India, Govt.
              of Uttar Pradesh, and U. P. Electronics Corporation Ltd. as
              industry partner.It is a couple of kilometers away from the
              International cricket stadium (along with many other sports
              facilities ) which is being set up in Gomti Nagar extension.
              <br />
              <br />
              The institute is surrounded by a 100 Acre IT City SEZ Lucknow
              project which is being developed by HCL Group selected through a
              competitive bidding process envisages initial investment of
              approx. Rs 1500 crores.The IT city will provide direct employment
              to 25,000 with indirect employment to approx. 50,000 people.
            </p>
          </div>
        </div>

        <div className="google-map">
          <iframe
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35126.04598897896!2d81.0151556732693!3d26.785889849743928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x34d9dd79cdeac7d8!2sIIIT+LUCKNOW!5e0!3m2!1sen!2sin!4v1553935523313!5m2!1sen!2sin"
            style={{
              frameborder: "0",
              border: 0
            }}
            allowfullscreen
            title="map"
          />
        </div>
      </div>
    );
  }
}

export default ContactUs;
//style={{ height: "100vh", width: "100%" }}
/* <div className="contact-us">
          <div className="contact-us-address">
            <h1 className="contact-us-head">IIIT Lucknow</h1>
            <p className="contact-us-p">
              <i className="fas fa-home" />
              IIIT Allahabad, Jhalwa, Allahabad - 211015
            </p>
            <p className="contact-us-mob contact-us-p">
              <i className="fas fa-envelope" /> contact@iiitl.ac.in
            </p>
            <p className="contact-us-mail contact-us-p">
              <i className="fa fa-phone" style={{ marginLeft: "-7px" }} />
              +0532 292 2032
            </p>
          </div>
          <div className="contact-us-map">
            <iframe className='map-iframe'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35126.04598897896!2d81.0151556732693!3d26.785889849743928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x34d9dd79cdeac7d8!2sIIIT+LUCKNOW!5e0!3m2!1sen!2sin!4v1553935523313!5m2!1sen!2sin"
              style={{ width: 600, height: 450, frameborder: "0", border: 0 }}
              allowfullscreen
              title="map"
            />
          </div>
        </div> */
