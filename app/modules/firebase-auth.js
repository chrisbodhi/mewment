import firebase from 'firebase';
import { config } from '../config/firebase';
import { serviceAccount } from '../../firebase-service-account-key';

let provider;

if (process.env.NODE_ENV) {
  firebase.initializeApp({
    serviceAccount,
    databaseURL: config.databaseURL
  });
} else {
  firebase.initializeApp(config);
  provider = new firebase.auth.FacebookAuthProvider();
}

const db = firebase.database();

export function fbSignIn() {
  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user.providerData[0];
      const uid = user.uid;

      // Create user in db if this one does not exist
      db.ref(`/users/${uid}`).once('value')
        .then((snapshot) => {
          if (!snapshot.val()) {
            const { displayName, email, photoURL, providerId } = user;
            db.ref(`/users/${uid}`).set({ displayName, email, photoURL, providerId, uid });
          }
        });
      return user;
    })
    .catch((err) => {
      throw new Error(`error code: ${err.code}\n
        | errorMessage: ${err.message}\n
        | email: ${err.email}\n
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
