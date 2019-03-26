import React from "react";
import "./ImageGrid.css";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img6.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img3.jpg";

const ImageGrid = () => {
  return (
    <div className="img-grid-global">
      <div className="img-grid-head">Closer look for the curious</div>
      <div className="img-grid-row">
        <div className="img-grid-column">
          <img src={image1} alt="img1" />
          <img src={image2} alt="img2" />
        </div>
        <div className="img-grid-column">
          <img src={image3} alt="img3" />
          <img src={image4} alt="img4" />
        </div>
        <div className="img-grid-column">
          <img src={image5} alt="img5" />
          <img src={image6} alt="img6" />
        </div>
      </div>
    </div>
  );
};
export default ImageGrid;
