import React, { useState } from "react";
import "../login.css";
import { Redirect } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const firebaseUIConfig = {
  signInOptions: [
    {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup', //don't redirect to authenticate
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false; //don't redirect on your own
    }
  }
}

export function Login(props) {
  const [userState, setUserState] = useState(null);

  if (!props.user) {
    return (
      <div className="container">
        <LeftFlex />
        <RightFlex />
      </div>
    );
  } else {
    const db = getDatabase();
    const userData = ref(db, "DefaultState" + props.user.uid);
    onValue(userData, (snapshot) => {
      setUserState(snapshot.child("stateData").child("state").val());
      console.log(userState);
    });
    console.log(userState);
    if (userState) {
      console.log("Test1")
      return (
        <Redirect to="/dashboard/last" />
      )
    } else {
      console.log("Test2")
      return (
        <Redirect to="/overview" />
      )
    }
  }
}

// const LoginForm = () => {
//   return (
//     <form>
//       <div className="login-form">
//         <label for="emailOrUser">Email address or username</label>
//         <input
//           type="email"
//           className="form-control"
//           id="emailOrUser"
//           aria-describedby="emailHelp"
//           placeholder="Enter your email address or username"
//         ></input>
//         <label for="password">Password</label>
//         <input
//           type="email"
//           className="form-control"
//           id="password"
//           aria-describedby="passwordHelp"
//           placeholder="Password"
//         ></input>
//         <button type="button" className="btn btn-primary">
//           Login
//         </button>
//       </div>
//     </form>
//   );
// };

const LeftFlex = () => {
  const auth = getAuth();
  return (
    <div className="flex-item login-column">
      <h4>WELCOME BACK</h4>
      <h2>Log into your account</h2>
      {/* <LoginForm /> */}
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
