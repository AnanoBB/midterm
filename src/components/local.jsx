import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";

import DB from "../mock/fakeDb";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.firebase
      .doLoginWithEmailPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.onLoggedIn({ email: this.state.email });
        this.props.history.push({
          location: "/home",
          state: { email: this.state.email }
        });
      })
      .catch(e => {
        alert("Failed: " + e.message);
      });
  };

  handleEmailChange = e => {
    let newState = { ...this.state };
    newState.email = e.target.value;
    this.setState(newState);
  };

  handlePasswordChange = e => {
    let newState = { ...this.state };
    newState.password = e.target.value;
    this.setState(newState);
  };

  render() {
    return (
      <div className="col-sm-8 offset-sm-2">
        <h3>Login</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              onChange={this.handlePasswordChange}
            />
          </div>
          <button
            onClick={this.handleLogin}
            type="submit"
            className="btn btn-primary m-2"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(withFirebase(Login));
