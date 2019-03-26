import React from "react";
import "./Map.css";
const Map = () => {
  return (
    <div className="reach-us-outer">
    <div className='reach-us-head'>Reach Us</div>
      <div className="reach-us">
        <div className="connect-with-us footer-column footer-column-b">
          <div className="connect-inner footer-inner">
            <div className="footer-head connect-head">Connect with us</div>
            <div className="connect-content footer-inner-content">
              <i class="fab fa-facebook" />
              Facebook
            </div>
            <div className="connect-content footer-inner-content">
              <i class="fab fa-linkedin" />
              Linkedin
            </div>
            <div className="connect-content footer-inner-content">
              <i class="fas fa-envelope" />
              Mail
            </div>
          </div>
        </div>
        <div className="iframe-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2290910536026!2d81.02202081504258!3d26.80083318317589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIIIT+LUCKNOW!5e0!3m2!1sen!2sin!4v1551962200381"
            width="800"
            height="400"
            frameborder="0"
            //   style={{ border: 0, width: "80%" }}
            allowfullscreen
            title="Map"
          />
        </div>
        {/* <div className="c2">2</div> */}
        {/* <div className='c3'>3</div> */}
      </div>
    </div>
  );
};
export default Map;
