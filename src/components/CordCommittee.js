import React from "react";
import "./CordCommittee.css";

const CordCommittee = () => {
  return (
    <div className="cord-global">
      <div className="cord-inner">
        <div className="cord-head">
          <p className="cord-head-head cord-head-content">
            Co Ordination Committee
          </p>
          <p className="cord-head-para cord-head-content">
            With a view to co-ordinate the IIIT Lucknow matters, following
            committee is constituted
          </p>
        </div>
        <div className="cord-content-outer">
          <div className="cord-content">
            <p>Prof. Anupam</p>
          </div>
          <div className="cord-content">
            <p>Dr. Vijaishri Tiwari</p>
          </div>
          <div className="cord-content">
            <p>Dr. Ashutosh Mishra</p>
          </div>
          <div className="cord-content"><p>Dr. Asheesh Kumar</p> </div>
        </div>
      </div>
    </div>
  );
};
export default CordCommittee;
