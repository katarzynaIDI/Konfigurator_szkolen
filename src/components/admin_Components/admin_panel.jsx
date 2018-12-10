import React, { Component } from "react";
import firebase from "firebase";
import AdminLogin from "./admin_login";
import AdminMain from "./admin_main";
import { Well, Button } from "react-bootstrap";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.authListener = this.authListener.bind(this);
    this.logout = this.logout.bind(this);
  }
  logout() {
    firebase.auth().signOut();
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    //firebase.initializeApp(DB_CONFIG);
    firebase.auth().onAuthStateChanged(user => {
      user ? this.setState({ user }) : this.setState({ user: null });
    });
  }

  render() {
    return (
      <div>
        <Well bsSize="large">
          <h2>Panel administracyjny</h2>
          {this.state.user ? (
            <Button bsStyle="danger" onClick={this.logout}>
              Wyloguj
            </Button>
          ) : null}
        </Well>
        {this.state.user ? <AdminMain /> : <AdminLogin />}
      </div>
    );
  }
}
export default AdminPanel;
