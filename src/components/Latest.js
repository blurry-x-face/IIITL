import React from "react";
import "./Latest.css";

class Latest extends React.Component {
  state = {
    isShowing: [1, 1, 1, 1, 0, 0],
    first: 0
  };

  change(c) {
    // console.log(this.state);
    // debugger;
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
        <div className="blog-container-global">
          <div className="blog-container-head curious-head">
            Announcements from IIITL
          </div>
          <div className="blog-container-contents">
            {/* <div
              onClick={() => this.change(0)}
              className="latest-prev"
              style={{ cursor: "pointer" }}
              href="#home"
            >
              <i className="fas fa-angle-left" />
            </div> */}
            <div className="box-1 hidden1 active1">
              {" "}
              <p className="latest-blog-date">January 21, 2019</p>{" "}
              <p className="latest-blog-head">Logo Design Contest</p>{" "}
              <p className="latest-blog-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="box-2 hidden1 active1">
              <p className="latest-blog-date">January 21, 2019</p>{" "}
              <p className="latest-blog-head">Updated Academic Calendar</p>{" "}
              <p className="latest-blog-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="box-3 hidden1 active1">
              <p className="latest-blog-date">January 21, 2019</p>{" "}
              <p className="latest-blog-head">Updated Fee Structure</p>{" "}
              <p className="latest-blog-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="box-4 hidden1 active1">
              <p className="latest-blog-date">January 21, 2019</p>{" "}
              <p className="latest-blog-head">
                Postponement of Selection Process
              </p>{" "}
              <p className="latest-blog-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="box-5 hidden1">
              <p className="latest-blog-date">January 21, 2019</p>{" "}
              <p className="latest-blog-head">Recruitment of Faculty</p>{" "}
              <p className="latest-blog-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="box-6 hidden1">
              <p className="latest-blog-date">January 21, 2019</p>{" "}
              <p className="latest-blog-head">Pareekhsha pe Charcha-6</p>{" "}
              <p className="latest-blog-content">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div
                onClick={() => this.change(1)}
                className="latest-next"
                href="#home"
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-angle-right" />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Latest;
