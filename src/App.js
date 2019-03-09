import React, { Component } from "react";
import "./app.scss";
import { Router } from "@reach/router";
import Home from "./Home";
import AdminPanel from "./components/admin_components/admin_panel/admin_panel";
import Icons from "./components/ui/icons/icons";

class App extends Component {
  render() {
    return (
      <div>
        <Icons />
        <Router>
          <Home path="/*" />
          <AdminPanel path="/admin" />
        </Router>
      </div>
    );
  }
}

export default App;
