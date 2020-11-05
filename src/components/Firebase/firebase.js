import "firebase/auth";

class Firebase {
  doCreateUserWithEmailPassword = (email, password) =>
    localStorage.setItem("email", email);

  doLoginWithEmailPassword = (email, password) =>
    localStorage.setItem("email", email);

  doSignout = () => localStorage.removeItem("email");
}

export default Firebase;