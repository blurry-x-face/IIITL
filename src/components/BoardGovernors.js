/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import "./BoG.css";

class BoG extends React.Component {
  state = {
    isOpen: false,
    prevSelect: "",
    toggle: false,
    btnNo: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    prevBtn: 0
  };
  bogDrop = (n, b) => {
    let display = document.getElementById(n);

    let prevDisp;
    prevDisp =
      this.state.prevSelect !== ""
        ? document.getElementById(this.state.prevSelect)
        : "";
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
      prevDisp.style.display = "none";
      this.state.btnNo[this.state.prevBtn] = !this.state.btnNo[
        this.state.prevBtn
      ];
      //   this.setState({ toggle: !this.state.toggle });
      if (n !== this.state.prevSelect) {
        this.setState({ isOpen: true });
        display.style.display = "grid";
        this.state.btnNo[b] = !this.state.btnNo[b];
      }
    } else if (!this.state.isOpen) {
      display.style.display = "grid";
      this.setState({ isOpen: true });
      this.state.btnNo[b] = !this.state.btnNo[b];
    }
    // this.setState(state => {
    //   let list = state.btnNo.map((item, j) => {
    //     if (j === b) {
    //       return (item = true);
    //     } else {
    //       return (item = false);
    //     }
    //   });

    //   return {
    //     list
    //   };
    // });
    this.setState({ prevBtn: b });
    this.setState({ prevSelect: n });
  };
  componentDidMount() {
    document.title =
      "BoG  | Indian Institute of Information Technology, Lucknow";
  }
  render() {
    return (
      <div className="bog-global-container padding-res margin-res">
        <div className="bog-container">
          <div className="bog-head-container">
            <div className="bog-head">
              {/* <div className="bog-head-left">
                <span className="bog-head-span bog-head-rightline" />
              </div> */}
              <div>Board of Governors</div>
              {/* <div className="bog-head-right">
                <span className="bog-head-span bog-head-rightline" />
              </div> */}
            </div>
          </div>
          <div className="bog-table-container">
            <div className="bog-table-inner-container">
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-1", 0)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Education Secretary Deptt. of Higher Education MHRD, New
                    Delhi
                  </div>
                  <div className="bog-des">
                    Chairman
                    <div
                      id="bog-btn-1"
                      className={
                        this.state.btnNo[0] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-1">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">Dr Arun Mohan Sherry</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">
                      IIIT Allahabad, Jhalwa, Allahabad - 211015
                      <br /> div: +0532 2922032 <br />
                      E: contact@iiitl.ac.in
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-2", 1)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Chief Secretary Govt. of Uttar Pradesh, Lucknow
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[1] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-2">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-3", 2)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Addl. Secretary Technical Education, MHRD, New Delhi
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[2] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-3">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-4", 3)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Financial Advisor MHRD, New Delhi
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[3] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-4">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-5", 4)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Principal Secretary Technical Education Deptt. Govt. of
                    Uttar Pradesh, Lucknow
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[4] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-5">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-6", 5)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Director Technical Education, MHRD, New Delhi
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[5] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-6">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-7", 6)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Director Moti Lal Nehru Institute of Technology, Allahabad
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[6] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-7">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-8", 7)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Vice Chancellor Uttar Pradesh Technical University, Lucknow
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[7] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-8">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-9", 8)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Principal Secretary IT and Electronics Deptt. Govt. of Uttar
                    Pradesh, Lucknow
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[8] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-9">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-10", 9)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">
                    Managing Director U.P. Electronics Corporation Ltd., Lucknow
                  </div>
                  <div className="bog-des">
                    Member
                    <div
                      className={
                        this.state.btnNo[9] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-10">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
              <div
                className="bog-content-outer"
                onClick={() => this.bogDrop("bog-11", 10)}
              >
                <div className="bog-content inner">
                  <div className="bog-post">Director,IIIT Lucknow</div>
                  <div className="bog-des">
                    Secretary
                    <div
                      className={
                        this.state.btnNo[10] === false
                          ? "circle-plus closed"
                          : "circle-plus opened"
                      }
                    >
                      <div className="circle">
                        <div className="horizontal" />
                        <div className="vertical" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bog-content-hidden inner" id="bog-11">
                  {/* <div className="bog-name">
                    <div className="bog-name-head bog-hidden-head">Name</div>
                    <div className="bog-name-content">BoG Name</div>
                  </div>
                  <div className="bog-address">
                    <div className="bog-address-head bog-hidden-head">
                      Address
                    </div>
                    <div className="bog-address-content">BoG Address</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BoG;
