import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDBQ1JuBlrjwu1Gb8eFDR4aBIAmzov7iYg',
  authDomain: 'project-3398608299508035534.firebaseapp.com',
  databaseURL: 'https://project-3398608299508035534.firebaseio.com',
  storageBucket: 'project-3398608299508035534.appspot.com',
};

firebase.initializeApp(config);
const provider = new firebase.auth.FacebookAuthProvider();

export function fbSignIn() {
  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // const token = result.credential.accessToken;
      // todo: add user.uid to firebase db if not exists already
      return result.user;
    })
    .catch((err) => {
      throw new Error(`error code: ${err.code}
        | errorMessage: ${err.message}
        | email: ${err.email}
        | credential: ${err.credential}`);
    });
}

export function fbSignOut() {
  return firebase.auth().signOut()
    .then(() => ({}))
    .catch((err) => {
      throw new Error(`Trouble signing out: ${err}`);
    });
}
