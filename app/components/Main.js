import React from 'react';
// import SearchGithub from './SearchGithub';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDBQ1JuBlrjwu1Gb8eFDR4aBIAmzov7iYg',
  authDomain: 'project-3398608299508035534.firebaseapp.com',
  databaseURL: 'https://project-3398608299508035534.firebaseio.com',
  storageBucket: 'project-3398608299508035534.appspot.com',
};

firebase.initializeApp(config);
console.log('conf', config);
const provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().signInWithPopup(provider, (error, result) => {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  const token = result.credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  console.log('token, user', token, user);
  // set state to include user
})
.catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  const credential = error.credential;
  console.log('error info', errorCode, errorMessage, email, credential);
});

const Main = ({ history, children }) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
          {/* <SearchGithub history={history} /> */}
        </div>
      </nav>
      <div className="container">
        {/* replaced by active component, using react-router */}
        {children}
      </div>
    </div>
  );
};

Main.propTypes = {
  history: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired
};

export default Main;
