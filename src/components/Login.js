import React from "react";
import "../login.css";
import { Redirect } from 'react-router-dom';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseUIConfig = {
  signInOptions: [
    {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    }
  }
}

export function Login(props) {

  if (!props.user) {
    return (
      <div className="container">
        <LeftFlex />
        <RightFlex />
      </div>
    );
  } else {
      return (
        <Redirect to="/overview" />
      )
  }
}

const LeftFlex = () => {
  const auth = getAuth();
  return (
    <div className="flex-item login-column">
      <h4>WELCOME BACK</h4>
      <h2>Log into your account</h2>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </div>
  );
};

const RightFlex = () => {
  return (
    <div className="flex-item flex-panel">
      <h2>Access the all the COVID data you ever need</h2>
      <h1>All in ONE place.</h1>
    </div>
  );
};
