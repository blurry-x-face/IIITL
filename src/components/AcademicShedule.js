import React from "react";
import "./AcademicShedule.css";
import { calender } from "./Data";

class Calender extends React.Component {
  TD = props => {
    const list1 = props.row.map((value, index) => {
      return <td key={index}>{value}</td>;
    });
    return <tr>{list1}</tr>;
  };
  Tbody = props => {
    const list = props.value.map((value, index) => {
      return <this.TD key={index} row={value} />;
    });
    return <tbody>{list}</tbody>;
  };
  render() {
    return (
      <div className="calender-global">
        <div className="calender-global-head">
          <h1>Academic Calender</h1>
        </div>
        <div className="calender-table-global">
          <table>
            <thead>
              <tr>
                <th>Events</th>
                <th>January-June 2019</th>
                <th>Day</th>
              </tr>
            </thead>
            <this.Tbody value={calender} />
          </table>
        </div>
        <div className="calender-p">
          <p>
            Note: The classes shall remain off during the period marked as #.
          </p>
        </div>
      </div>
    );
  }
}

export default Calender;
