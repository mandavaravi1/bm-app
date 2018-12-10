import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import { Icon } from "antd";
const tnArr = [1, 2, 3, 4, 5, 6];

class Locations extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Icon type="left" style={{ fontSize: "20px", color: "#F16724" }} />
          <div>
            <b>LOCATIONS</b>
          </div>
          <Icon type="right" style={{ fontSize: "20px", color: "#F16724" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {tnArr.map(() => (
            <Thumbnail />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Locations;
