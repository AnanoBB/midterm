import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";
import DB from "../mock/fakeDb";
class Signup extends Component {
  state = { email: "", password: "" };
  handleSignup = e => {
    let { email, password } = this.state;
    e.preventDefault();
    if (email.length < 4) {
      alert("Email must be atleast 4 characters!");
      return;
    }
    if (password.length < 6) {
      alert("Password must be atleast 6 characters");
      return;
    }
    this.props.firebase
      .doCreateUserWithEmailPassword(email, password)
      .then(() => {
        this.props.onSignup({ email });
        this.props.history.push({
          pathname: "/",
          state: { email }
        });
      })
      .catch(e => {
        alert("Failed: " + e.message);
      });
  };

  handelEmailChange = e => {
    this.setState({ ...this.state, email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ ...this.state, password: e.target.value });
  };

  render() {
    return (
      <div className="col-sm-8 offset-sm-2">
        <h3>Register</h3>
        <form action="">
          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input
              onChange={this.handelEmailChange}
              type="text"
              name="password"
              className="form-control"
            />
            <small>Enter correct email. We've no check for it.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handlePasswordChange}
              type="text"
              name="password"
              className="form-control"
            />
            <small>Password should be strong enough.</small>
          </div>
          <button onClick={this.handleSignup} className="btn btn-primary">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(withFirebase(Signup));
