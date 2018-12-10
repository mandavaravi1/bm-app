import React, { Component } from "react";
import { Button } from "antd";
const buttonStyle = {
  color: "white",
  // fontFamily: "Gilroy",
  fontSize: 15,
  fontWeight: 800,
  margin: 10,
  backgroundColor: "#F16724",
  border: "none"
};

class Topics extends Component {
  render() {
    return (
      <React.Fragment>
        <b>TOPICS</b>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          <Button style={buttonStyle}>Travel</Button>
          <Button style={buttonStyle}>News</Button>
          <Button style={buttonStyle}>Music</Button>
          <Button style={buttonStyle}>Fashion</Button>
          <Button style={buttonStyle}>Food</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Topics;
