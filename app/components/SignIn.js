import React from 'react';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDBQ1JuBlrjwu1Gb8eFDR4aBIAmzov7iYg',
  authDomain: 'project-3398608299508035534.firebaseapp.com',
  databaseURL: 'https://project-3398608299508035534.firebaseio.com',
  storageBucket: 'project-3398608299508035534.appspot.com',
};

firebase.initializeApp(config);
const provider = new firebase.auth.FacebookAuthProvider();

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}      
    };
  }

  handleSignIn() {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        const user = result.user;
        // todo: add UID for firebase db
        this.setState({ user: user.providerData[0] });
        console.log('state', this.state);
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
  }

  handleSignOut() {
    firebase.auth().signOut().then(() => {
      this.setState({ user: {} });
      console.log('state', this.state);
      console.log('Signed out, sucka.');
    })
    .catch((err) => {
      console.log('Trouble signing out');
      throw new Error(err);
    });
  }

  render() {
    return (
      <div>{
        this.state.user.uid
          ? <button onClick={() => this.handleSignOut()}>Sign Out</button>
          : <button onClick={() => this.handleSignIn()}>Sign in with FB</button>
      }</div>
    );
  }
}

export default SignIn;
