import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDoNs5AADTZ-k5ikJ1AE27sX72Jg4Dui8k",
  authDomain: "tr0nlabs-6f56b.firebaseapp.com",
  databaseURL: "https://tr0nlabs-6f56b.firebaseio.com",
  projectId: "tr0nlabs-6f56b",
  storageBucket: "tr0nlabs-6f56b.appspot.com",
  messagingSenderId: "1056819810193"
};

class Firebase {
  constructor() {
    if (app.apps.length == 0) app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doLoginWithEmailPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignout = () => this.auth.signOut();
}

export default Firebase;
