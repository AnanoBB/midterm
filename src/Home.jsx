import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    const { state } = this.props;
    const { email } = state.authUser;
    return <div className="col-sm-8 offset-sm-2">Welcome, {email}</div>;
  }
}

export default Home;
