import React, { Component } from "react";

class Thumbnail extends Component {
  render() {
    return (
      <div
        style={{
          height: 80,
          width: 120,
          border: "2px solid #F16724",
          margin: 10,
          borderRadius: 10
        }}
      >
        <img src="img" alt="logo" />
      </div>
    );
  }
}

export default Thumbnail;
