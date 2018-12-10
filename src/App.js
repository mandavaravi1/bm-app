import React, { Component } from "react";
import HomePage from "./containers/HomePage";
import TravelPage from "./containers/TravelPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div style={{ height: "100%" }}>
            <Route path="/" exact component={HomePage} />
            <Route path="/travel" component={TravelPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
