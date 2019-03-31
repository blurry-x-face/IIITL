import React from "react";
import "./PictureGallery.css";
import image1 from "../assets/gallery/img1.jpg";
import image2 from "../assets/gallery/img2.jpg";
import image3 from "../assets/gallery/img3.jpg";
import image4 from "../assets/gallery/img4.jpg";
import image5 from "../assets/gallery/img5.jpg";
import image6 from "../assets/gallery/img6.jpg";
import image7 from "../assets/gallery/img7.jpg";
import image8 from "../assets/gallery/img8.jpg";
import image9 from "../assets/gallery/img9.jpg";
import image10 from "../assets/gallery/img10.jpg";
import image11 from "../assets/gallery/img11.jpg";
import image12 from "../assets/gallery/img12.jpg";
import image13 from "../assets/gallery/img13.jpg";
import image14 from "../assets/gallery/img14.jpg";
import image15 from "../assets/gallery/img15.jpg";
import image16 from "../assets/gallery/img16.jpg";
import image17 from "../assets/gallery/img17.jpg";
import image18 from "../assets/gallery/img18.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery-global">
        <div className="gallery-global-head">
          <h1>Image Gallery for IIIT Lucknow</h1>
        </div>
        <div className="gallery-inner">
          <div className="gallery-row">
            <img src={image1} alt="img" />
            <img src={image2} alt="img" />
            <img src={image3} alt="img" />
            <img src={image13} alt="img" />
          </div>
          <div className="gallery-row">
            <img src={image4} alt="img" />
            <img src={image5} alt="img" />
            <img src={image6} alt="img" />
            <img src={image14} alt="img" />
          </div>
          <div className="gallery-row">
            <img src={image7} alt="img" />
            <img src={image8} alt="img" />
            <img src={image9} alt="img" />
            <img src={image17} alt="img" />
          </div>
          <div className="gallery-row">
            <img src={image10} alt="img" />
            <img src={image11} alt="img" />
            <img src={image12} alt="img" />
            <img src={image18} alt="img" />
          </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
