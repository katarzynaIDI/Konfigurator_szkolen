import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import AdminPanel from "./components/admin_components/admin_panel/admin_panel";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/*" />
          <AdminPanel path="/admin" />
        </Router>
      </div>
    );
  }
}

export default App;
