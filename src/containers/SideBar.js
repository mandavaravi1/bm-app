import React, { Component } from "react";
import Locations from "./Locations";
import Topics from "./Topics";

class SideBar extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: 300,
          //flexGrow: "1 1 300px",
          backgroundColor: "black",
          color: "#707070",
          padding: 10
        }}
      >
        <Locations />
        <div
          style={{
            borderBottom: "1px solid #707070",
            marginTop: 20,
            marginBottom: 20
          }}
        />
        <Topics />
      </div>
    );
  }
}

export default SideBar;
