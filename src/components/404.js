import React, { Component } from "react";

class Error404 extends Component {
  render() {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Playfair Display",
          color: "rgba(0,0,0,0.6)"
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "normal",
            textDecoration: "underline rgba(0,0,0,0.6)"
          }}
        >
          Error: 404 page not found!
        </h1>
      </div>
    );
  }
}

export default Error404;
