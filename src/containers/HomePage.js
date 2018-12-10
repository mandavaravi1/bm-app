import React, { Component } from "react";
import { Button, Icon } from "antd";
import { FacebookProvider, Like } from "react-facebook";
import { Link } from "react-router-dom";

const buttonStyle = {
  color: "#F16724",
  // fontFamily: "Gilroy",
  fontSize: 15,
  fontWeight: 800
};

class HomePage extends Component {
  render() {
    return (
      <div className="App-header">
        <div>
          Discover <b>Miami</b> awesome.
        </div>
        <div>Choose a topic to watch</div>
        <div
          style={{
            display: "flex",
            width: 400,
            justifyContent: "space-around"
          }}
        >
          <Button style={buttonStyle}>
            <Link to={`/travel`}>
              Travel <Icon type="play-circle" theme="filled" />
            </Link>
          </Button>
          <Button style={buttonStyle}>News</Button>
          <Button style={buttonStyle}>Music</Button>
          <Button style={buttonStyle}>Food</Button>
        </div>
        <FacebookProvider appId="123456789">
          <Like
            href="http://www.facebook.com"
            colorScheme="dark"
            showFaces
            share
          />
        </FacebookProvider>
      </div>
    );
  }
}

export default HomePage;
