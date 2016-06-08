import { fbSignIn, fbSignOut } from '../modules/firebase-auth';
import { saveProfileToFb } from '../modules/firebase-db';

// ACTION TYPES
export const SIGN_IN_WITH_FB = 'SIGN_IN_WITH_FB';
export const SIGN_OUT_OF_FB = 'SIGN_OUT_OF_FB';
export const RECEIVE_USER = 'RECEIVE_USER';
// todo: handle this auth_error
export const AUTH_ERROR = 'AUTH_ERROR';

export const ADD_PROFILE = 'ADD_PROFILE';

// ACTION CREATORS
function signInWithFb() {
  return {
    type: SIGN_IN_WITH_FB
  };
}

function signOutOfFb() {
  return {
    type: SIGN_OUT_OF_FB
  };
}

function receiveUser(response) {
  return {
    type: RECEIVE_USER,
    user: response.user
  };
}

// todo: handle this authError
export function authError(error) {
  return {
    type: AUTH_ERROR,
    error
  };
}

export function signIn() {
  return (dispatch) => {
    dispatch(signInWithFb);
    return fbSignIn()
      .then((res) => {
        dispatch(receiveUser(res));
      })
      .catch((err) => {
        throw new Error(`Err in signIn(): ${err}`);
      });
  };
}

export function signOut() {
  return (dispatch) => {
    return fbSignOut()
      .then(() => {
        dispatch(signOutOfFb());
      })
      .catch((err) => {
        throw new Error(`Err in signOut(): ${err}`);
      });
  };
}

function addProfileToState() {
  return {
    type: ADD_PROFILE
  };
}

export function addProfile(data) {
  return (dispatch) => {
    dispatch(addProfileToState);
    return saveProfileToFb(data)
      .then(() => {
        // ADD_CAT action to keep track of cats in the state?
      })
      .catch((err) => {
        throw new Error(`Err saving profile to Firebase: ${err}`);
      });
  };
}
