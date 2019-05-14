import React from "react";
import "./Senate.css";
import ScrollToTopOnMount from "./ScrollToTop";

const table = [
  [
    "1.",
    "Shri R. Subrahmanyam, Chairman, Governing Body IIIT Lucknow and Secretary (Higher Education), MHRD, Govt. of India.",
    "Chairperson (Ex-Officio)"
  ],
  [
    "2.",
    "Shri Anil Kumar, Director (Finance), MHRD, Govt. of India.",
    "Member (Ex-Officio)"
  ],
  [
    "3.",
    "Dr. Saroj Kumar, Special Secretary, Technical Education Section-1, Govt. of U.P.",
    "Member (Ex-Officio)"
  ],
  [
    "4.",
    "Shri Kumar Prashant, Managing Director, U P Electronics Corporation Limited.",
    "Member (Industry Partner)"
  ],
  [
    "5.",
    "Dr. Arun Mohan Sherry, Director, IIIT Lucknow",
    "Member (Ex-Officio)"
  ],
  [
    "6.",
    "Dr. Amit Kumar Singh, Deputy Registrar and Incharge Finance & Accounts, IIIT Lucknow.",
    "Secretary (Ex-Officio)"
  ],
  [
    "7.",
    "Shri Prashant Agarwal, Director IIITs, MHRD, Govt. of India or his representative.",
    "Special Invitee (In terms of MHRD letter no. F.No. 29-20/2011-TS.1 dated 05.02.2019)"
  ]
];

export default function FinanceCommitte() {
  return (
    <div className="senate-global">
      <div className="senate-table">
        <div className="senate-head">Finance Committee</div>
        <ScrollToTopOnMount />
        <div className="finance-table">
          <table>
            {table.map((v, i) => {
              let tr = v.map((val, index) => {
                return <td>{val}</td>;
              });
              return <tr>{tr}</tr>;
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
