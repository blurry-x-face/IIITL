import React from "react";
import "./Carousel.css";

class Carousel extends React.Component {
  state = {
    slideNo: 0
  };
  change(c) {
    var i = this.state.slideNo;
    var slide = document.querySelectorAll(".block");
    if (c) {
      slide[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = slide.length - 1;
      }
      slide[i].classList.add("active");
    } else if (!c) {
      slide[i].classList.remove("active");
      i++;

      if (i >= slide.length) {
        i = 0;
      }

      slide[i].classList.add("active");
    }
    this.setState({ slideNo: i });
  }

  autoPlay() {
    // for (var i = 0; i < 200; i++) {
    let l = 0;
    l = setInterval(() => {
      if (window.location.hash === "#/") {
        var slide = document.querySelectorAll(".block");
        var j = this.state.slideNo;
        slide[j].classList.remove("active");
        j++;
        if (j >= slide.length) {
          j = 0;
        }
        slide[j].classList.add("active");
        this.setState({ slideNo: j });
      } else {
        clearInterval(l);
      }
      // console.log(l);
    }, 2500);
  }

  componentDidMount() {
    this.autoPlay();
  }
  render() {
    return (
      <div className="gallery">
        <div className="photos">
          <div className="block block-1 active" />
          <div className="block block-2" />
          <div className="block block-3" />
          <div className="block block-4" />
          <div className="block block-5" />
          <div className="block block-6" />
        </div>
        <div className="buttons">
          <div onClick={() => this.change(1)} className="prev" href="#home">
            <i className="fas fa-angle-left" />
          </div>
          <div onClick={() => this.change(0)} className="next" href="#home">
            <i className="fas fa-angle-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
