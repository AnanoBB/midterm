import React, { Component } from "react";
import ReactDOM from "react-dom";
import Firebase, { FirebaseContext, withFirebase } from "./components/Firebase";
import App from "./app.jsx";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  rootElement
);