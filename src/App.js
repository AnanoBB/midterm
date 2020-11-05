import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx";
import Help from "./components/Help.jsx";
import Support from "./components/Support.jsx";

import { withFirebase } from "./components/Firebase";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

class App extends Component {
  state = { loggedIn: false, authUser: null };
  handleLogin = ({ username }) => {
    this.setState({ ...this.state, username, loggedIn: true });
  };

  handleSignup = ({ username }) => {
    this.setState({ ...this.state, loggedIn: true, username });
  };

  handleLogout = () => {
    this.setState({ ...this.state, loggedIn: false, username: null });
  };

  renderHomeOrLogin = (props) => {
    if (this.state.loggedIn) {
      return (
        <Route
          exact
          path="/"
          render={() => <Home state={{ ...this.state }} />}
        />
      );
    } else {
      return (
        <Route
          exact
          path="/"
          render={() => <Login onLoggedIn={this.handleLogin} />}
        />
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Nav
              isLoggedIn={this.state.loggedIn}
              onLogout={this.handleLogout}
            />
            <this.renderHomeOrLogin />
            <Route
              exact
              path="/home"
              render={() => <Home state={{ ...this.state }} />}
            />

            <Route
              path="/signup"
              render={() => <Signup onSignup={this.handleSignup} />}
            />
            <Route path="/help" component={Help} />
            <Route path="/support" component={Support} />
          </div>
        </Router>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser, loggedIn: true })
        : this.setState({ authUser: null, loggedIn: false });
    });
  }
}
export default withFirebase(App);
