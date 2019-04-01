import React from "react";
import "./SeatMatrix.css";
import { seatData } from "./Data";

class SeatMatrix extends React.Component {
  Show = () => {
    let element = document.getElementById("seat-pool-category");
    var x = `table-${element.value}`;
    let toShow = document.getElementById(x);
    toShow.className = "table-show";
  };
  componentDidMount() {
    // this.Show();
  }
  Row = props => {
    let x = props.data.map((value, index) => {
      return <td>{value[index]}</td>;
    });
    return <tr className="table-hid">{x}</tr>;
  };

  render() {
    return (
      <div className="table-outer padding-res">
        <div className="table-head">IIIT LUCKNOW SEAT MATRIX</div>
        <table className="seat-main-table">
          <tbody>
            <tr>
              <td>
                <strong>Branch</strong>
              </td>
              <td>
                <strong>Seats</strong>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <strong className="center ">
                  <em>4-Year B.E./B.Tech. Course</em>
                </strong>
              </td>
            </tr>

            <tr>
              <td>Information Technology - Gender Nuetral</td>
              <td>64</td>
            </tr>
            <tr>
              <td>Information Technology - Female Only</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Computer Science & Engineering - Gender Nuetral</td>
              <td>64</td>
            </tr>
            <tr>
              <td>Computer Science & Engineering - Female Only</td>
              <td>11</td>
            </tr>
            <tr>
              <td colSpan="2">
                <strong className="center ">
                  <em>2-Year M.E./M.Tech. Course</em>
                </strong>
              </td>
            </tr>
            <tr>
              <td>Computer Science (XS) - Gender Nuetral</td>
              <td>26</td>
            </tr>
            <tr>
              <td>Computer Science (XS) - Female Only</td>
              <td>4</td>
            </tr>
            <tr />
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>180</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ fontSize: "30px" }} className="table-head">
          CATEGORY-WISE SEATS
        </div>
        <div className="table-below">
          <div className="table-below-head center">
            Choose Category and Pool
          </div>
          <form id="cp-couses-form">
            <p>
              <select id="seat-pool-category" className="cp-cut-select">
                <option value="0">General</option>
                <option value="1">OBC (Non-Creamy Layer)</option>
                <option value="2">SC</option>
                <option value="3">ST</option>
                <option value="4">General-PwD</option>
                <option value="5">OBC (Non-Creamy Layer)-PwD</option>
                <option value="6">SC-PwD</option>
                <option value="7">ST-PwD</option>
              </select>
            </p>
            <p />
            <p>
              <p
                className="center"
                onClick={() => this.Show}
                style={{ cursor: "pointer" }}
                href="#g"
                id="cp-cut-go"
              >
                Go
              </p>
            </p>
          </form>
          <table className="seat-main-table seat-hid-table-1">
            <tbody>
              <tr>
                <td>
                  <strong>Branch</strong>
                </td>
                <td>
                  <strong>Seats</strong>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong className="center ">
                    <em>4-Year B.E./B.Tech. Course</em>
                  </strong>
                </td>
              </tr>
              <this.Row data={seatData.general} id="table-0" />
              <this.Row data={seatData.OBCNC} id="table-1" />
              <this.Row data={seatData.SC} id="table-2" />
              <this.Row data={seatData.ST} id="table-3" />
              <this.Row data={seatData.GeneralPWD} id="table-4" />
              <this.Row data={seatData.OBCNCPWD} id="table-5" />
              <this.Row data={seatData.NULL} id="table-6" />
              <this.Row data={seatData.NULL} id="table-7" />
              {/* <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>{document.getElementById('lol')}</strong>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default SeatMatrix;

// const Table = props => {};
