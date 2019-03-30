import React, { Component } from "react";
import "./ContactUs.css";

class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us-global">
        <h1 className="contact-us-global-head">Contact Us</h1>
        <div class="map">
          <div id="map">
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35126.04598897896!2d81.0151556732693!3d26.785889849743928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x34d9dd79cdeac7d8!2sIIIT+LUCKNOW!5e0!3m2!1sen!2sin!4v1553935523313!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "100%",
                frameborder: "0",
                border: 0
              }}
              allowfullscreen
              title="map"
            />
          </div>
          <div class="map-c">
            <h1>ABC Stores</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium id cumque est dolores voluptatibus.
            </p>
            <div class="det">
              <i class="fa fa-map-marker" /> 102 New Road, New City
            </div>
            <div class="det">
              <i class="fa fa-phone" /> 001 2045 509
            </div>
            <div class="det">
              <i class="fa fa-globe" /> www.abcstores.com
            </div>
            <center>
              <button class="fa fa-car" />
              <button class="fa fa-envelope" />
            </center>
          </div>
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
