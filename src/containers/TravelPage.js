import React, { Component } from "react";
import SideBar from "./SideBar";
import "../../node_modules/video-react/dist/video-react.css";
import { YouTube } from "./YouTube";
import Header from "./Header";

class TravelPage extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          paddingLeft: 100,
          paddingRight: 100,
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            flexWap: "nowrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch"
          }}
        >
          <Header />
          <div style={{ display: "flex", flex: "1 1 auto" }}>
            <SideBar />
            <div style={{ flexGrow: 1 }}>
              <YouTube video="58iT2L4VQj4" autoplay="1" rel="0" modest="1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelPage;
