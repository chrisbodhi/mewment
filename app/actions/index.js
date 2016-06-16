import { fbSignIn, fbSignOut } from '../modules/firebase-auth';
import { fetchCatsFromFb, saveProfileToFb } from '../modules/firebase-db';

// ACTION TYPES
export const SIGN_IN_WITH_FB = 'SIGN_IN_WITH_FB';
export const SIGN_OUT_OF_FB = 'SIGN_OUT_OF_FB';
export const RECEIVE_USER = 'RECEIVE_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export const ADD_PROFILE = 'ADD_PROFILE';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const ADD_CAT = 'ADD_CAT';
export const FETCH_CATS = 'FETCH_CATS';
export const FETCH_CATS_REQUEST = 'FETCH_CATS_REQUEST';
export const FETCH_CATS_WIN = 'FETCH_CATS_WIN';
export const FETCH_CATS_FAIL = 'FETCH_CATS_FAIL';

// ACTION CREATORS

// Cat actions
export function addCat(cat) {
  return {
    type: ADD_CAT,
    cat
  };
}

function fetchCatsRequest(uid) {
  return {
    type: FETCH_CATS_REQUEST,
    uid
  };
}

function fetchCatsWin(catsFromFb) {
  return {
    type: FETCH_CATS_WIN,
    catsFromFb
  };
}

function fetchCatsFail(err) {
  return {
    type: FETCH_CATS_FAIL,
    err
  };
}

export function fetchCats(uid) {
  return (dispatch) => {
    dispatch(fetchCatsRequest(uid));
    return fetchCatsFromFb(uid)
      .then((catsFromFb) => dispatch(fetchCatsWin(catsFromFb)))
      .catch((err) => dispatch(fetchCatsFail(err)));
  };
}

// User actions
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
  return (dispatch) => fbSignOut()
    .then(() => {
      dispatch(signOutOfFb());
    })
    .catch((err) => {
      throw new Error(`Err in signOut(): ${err}`);
    });
}

function addProfileToState() {
  return {
    type: ADD_PROFILE
  };
}

export function clearProfile() {
  return {
    type: CLEAR_PROFILE
  };
}

export function addProfile(data) {
  return (dispatch) => {
    dispatch(addProfileToState);
    return saveProfileToFb(data)
      .then((cat) => {
        dispatch(addCat(cat));
        dispatch(clearProfile);
      })
      .catch((err) => {
        throw new Error(`Err saving profile to Firebase: ${err}`);
      });
  };
}
