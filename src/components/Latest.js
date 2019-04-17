import React from "react";
import "./Latest.css";
import { Link } from "react-router-dom";
  import tenderPDF from "../assets/downloads/Tender.pdf";
// import ScrollToTopOnMount from "./ScrollToTop";

class Latest extends React.Component {
  state = {
    isShowing: [1, 1, 1, 1, 0, 0],
    first: 0
  };

  change(c) {
    // console.log(this.state);
    //
    if (c) {
      if (this.state.first + 3 < 5) {
        this.setState(
          cs => {
            var temp = cs.isShowing.map((ele, i) => {
              if (i === cs.first) {
                return 0;
              }
              return ele;
            });
            return { isShowing: temp, first: cs.first + 1 };
          },
          () => {
            this.setState(
              cs => {
                var temp1 = cs.isShowing;
                temp1[cs.first + 3] = 1;
                return { isShowing: temp1, first: cs.first };
              },
              () => {
                var slide = document.querySelectorAll(".hidden1");
                for (var k = 0; k < this.state.isShowing.length; k++) {
                  //   console.log(this.state);
                  if (this.state.isShowing[k] === 1) {
                    slide[k].classList.add("active1");
                  } else {
                    slide[k].classList.remove("active1");
                  }
                }
              }
            );
          }
        );
      } else {
        this.setState({ isShowing: [1, 1, 1, 1, 0, 0], first: 0 }, () => {
          var slide = document.querySelectorAll(".hidden1");
          for (var k = 0; k < this.state.isShowing.length; k++) {
            //   console.log(this.state);
            if (this.state.isShowing[k] === 1) {
              slide[k].classList.add("active1");
            } else {
              slide[k].classList.remove("active1");
            }
          }
        });
      }
    } else {
      if (this.state.isShowing[0] === 1) {
        this.setState({ isShowing: [1, 1, 1, 1, 0, 0], first: 0 }, () => {
          var slide = document.querySelectorAll(".hidden1");
          for (var k = 0; k < this.state.isShowing.length; k++) {
            //   console.log(this.state);
            if (this.state.isShowing[k] === 1) {
              slide[k].classList.add("active1");
            } else {
              slide[k].classList.remove("active1");
            }
          }
        });
      } else {
        this.setState(
          cs => {
            var temp1 = cs.isShowing;
            temp1[cs.first + 3] = 0;
            temp1[cs.first - 1] = 1;
            return { isShowing: temp1, first: cs.first - 1 };
          },
          () => {
            var slide = document.querySelectorAll(".hidden1");
            for (var k = 0; k < this.state.isShowing.length; k++) {
              //   console.log(this.state);
              if (this.state.isShowing[k] === 1) {
                slide[k].classList.add("active1");
              } else {
                slide[k].classList.remove("active1");
              }
            }
          }
        );
      }
    }
    // console.log(this.state);
  }
  render() {
    return (
      <div className="latest-global">
        <div className="blog-container-head curious-head">
          Announcements from IIITL
        </div>
        <div className="blog-container-global">
          <div className="blog-container-contents">
            {/* <div
              onClick={() => this.change(0)}
              className="latest-prev"
              style={{ cursor: "pointer" }}
              href="#home"
            >
              <i className="fas fa-angle-left" />
            </div> */}
            <a target="blank" href={tenderPDF}>
              <div className="box-6 hidden1 active1">
                <p className="latest-blog-date">April, 2019</p>{" "}
                <p className="latest-blog-head">Tender Notice</p>{" "}
                <p className="latest-blog-content">
                  Hiring of residential premises for Director,IIIT-L
                </p>
              </div>
            </a>
            <Link to="/announcements/1">
              <div className="box-1 hidden1 active1">
                {" "}
                <p className="latest-blog-date">March 2, 2019</p>{" "}
                <p className="latest-blog-head">Logo Design Contest</p>{" "}
                <p className="latest-blog-content">
                  The Contest is open to all IIITL Students, Employees and all
                  stake holders of IIITL.
                </p>
              </div>
            </Link>
            <Link to="/announcements/2">
              <div className="box-2 hidden1 active1">
                <p className="latest-blog-date">January, 2019</p>{" "}
                <p className="latest-blog-head">Updated Academic Calendar</p>{" "}
                <p className="latest-blog-content" />
              </div>
            </Link>
            <Link to="/announcements/3">
              <div className="box-3 hidden1 active1">
                <p className="latest-blog-date">July, 2019</p>{" "}
                <p className="latest-blog-head">Updated Fee Structure</p>{" "}
                <p className="latest-blog-content">
                  Fee Structure for IIIT Lucknow has been updated.
                </p>
              </div>
            </Link>
            {/* <Link to="/announcements/4">
              <div className="box-4 hidden1 active1">
                <p className="latest-blog-date">October 14, 2018</p>{" "}
                <p className="latest-blog-head">
                  Postponement of Selection Process
                </p>{" "}
                <p className="latest-blog-content">
                  Postponement of proposed Selection Process on 14th October
                  2018 for the post of Junior Superintendent and Junior Engineer
                  for IIIT Lucknow till further order. Will be intimated next
                  date when it is finalized.
                </p>
              </div>
            </Link> */}
            {/* <Link to="/announcements/5">
              <div className="box-5 hid-res hidden1 active1">
                <p className="latest-blog-date">Jan, 2018</p>{" "}
                <p className="latest-blog-head">Recruitment of Faculty</p>{" "}
                <p className="latest-blog-content" />
              </div>
            </Link> */}
          </div>
        </div>
        <div className="latest-more">
          <h3>
            <Link to="/announcements"> Read More-></Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default Latest;
