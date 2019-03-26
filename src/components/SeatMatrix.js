import React from "react";
import "./SeatMatrix.css";
import { seatData } from "./Data";

class SeatMatrix extends React.Component {
  Row = props => {
    let row = [];
    for (var i = 0; i < 2; i++) {
      row.push(<td key={i}>{props.data[i]}</td>);
    }
    return <tr className="hidden">{row}</tr>;
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
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>75</strong>
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
              <select id="cat" className="cp-cut-select">
                <option value="0" defaultValue="" disabled="">
                  Category
                </option>
                <option value="gn">General</option>
                <option value="bc">OBC (Non-Creamy Layer)</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="gnpd">General-PwD</option>
                <option value="bcpd">OBC (Non-Creamy Layer)-PwD</option>
                <option value="scpd">SC-PwD</option>
                <option value="stpd">ST-PwD</option>
              </select>
            </p>
            <p>
              <select id="seat-pool" className="cp-cut-select">
                <option value="0" defaultValue="" disabled="">
                  Seat Pool
                </option>
                <option value="fo">Female Only</option>
                <option value="gn">Gender Nuetral</option>{" "}
              </select>
            </p>
            <p>
              <a className="center" href="#g" id="cp-cut-go">
                Go
              </a>
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
              <this.Row data={seatData.generalNeutral} id="table0" />
              <this.Row data={seatData.generalNeutral} id="table1" />
              <this.Row data={seatData.generalNeutral} id="table2" />
              <this.Row data={seatData.generalNeutral} id="table3" />
              <this.Row data={seatData.generalNeutral} id="table4" />
              <this.Row data={seatData.generalNeutral} id="table5" />
              <this.Row data={seatData.generalNeutral} id="table6" />
              <this.Row data={seatData.generalNeutral} id="table7" />
              <this.Row data={seatData.generalNeutral} id="table8" />
              <this.Row data={seatData.generalNeutral} id="table9" />
              <this.Row data={seatData.generalNeutral} id="table10" />
              <this.Row data={seatData.generalNeutral} id="table11" />
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
