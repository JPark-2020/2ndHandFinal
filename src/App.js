import React, { useState, useEffect } from "react";
import { fire, db } from './util/firebase';
import { v4 as uuidv4 } from "uuid";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Sell from "./pages/Sell/Sell";
import Shop from "./pages/Shop/Shop";
import Cart from './pages/Cart/Cart';
import Login from "./pages/Auth/Login";
import Topbar from "./components/NavBar/Topbar/Topbar";
import SecondaryBar from "./components/NavBar/SecondaryBar/SecondaryBar";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const loginHandler = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const signupHandler = () => {
    clearErrors();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const logoutHandler = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  if (user) {
    return (
      <Router>
        <Topbar user={user}/>
        <SecondaryBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    );
  }

  return (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loginHandler={loginHandler}
      signupHandler={signupHandler}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
};

export default App;
