import _ from 'lodash';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  SIGN_IN_WITH_FB,
  SIGN_OUT_OF_FB,

  RECEIVE_USER,

  ADD_PROFILE,
  CLEAR_PROFILE,
  ADD_CAT,

  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_ERR,

  FETCH_FOLLOWING_REQUEST,
  FETCH_FOLLOWING_SUCCESS,
  FETCH_FOLLOWING_ERR,

  FETCH_ALL_USERS,

  SHOW_UPLOAD_FORM,
  ADD_TO_FEED_ERR
} from '../actions';

import { defaultStatus } from '../../test/test_helper';

const initialUserState = {
  isFetching: false,
  didInvalidate: false,
  uid: ''
};

const invalidatedUser = {
  didInvalidate: true,
  displayName: '',
  email: '',
  isFetching: false,
  photoURL: '',
  providerId: '',
  uid: ''
};

function userAuth(state = initialUserState, action) {
  switch (action.type) {
    case SIGN_IN_WITH_FB:
      return _.assign(
        {},
        state,
        {
          user: {
            isFetching: true,
            didInvalidate: false
          }
        }
      );
    case RECEIVE_USER:
      return _.assign(
        {},
        state,
        {
          isFetching: false,
          didInvalidate: false
        },
        action.user
      );
    case SIGN_OUT_OF_FB:
      return _.assign(
        {},
        state,
        invalidatedUser
      );
    default:
      return state;
  }
}

function profile(state = {}, action) {
  switch (action.type) {
    case ADD_PROFILE:
      return _.assign(
        {},
        state,
        action.data
      );
    case CLEAR_PROFILE:
      return {};
    default:
      return state;
  }
}

function cats(state = [], action) {
  switch (action.type) {
    case ADD_CAT:
      return [...state, action.cat];
    case FETCH_CATS_SUCCESS:
      return [...action.catsFromFb];
    case SIGN_OUT_OF_FB:
      return [];
    default:
      return state;
  }
}

function following(state = {}, action) {
  switch (action.type) {
    case FETCH_FOLLOWING_SUCCESS:
      return _.assign(
        {},
        state,
        action.following
      );
    case SIGN_OUT_OF_FB:
      return {};
    default:
      return state;
  }
}

function status(state = defaultStatus, action) {
  const resetStatus = _.assign(
    {},
    defaultStatus
  );
  switch (action.type) {
    case FETCH_CATS_REQUEST:
      return _.assign(
        {},
        state,
        { fetchingCats: true }
      );
    case FETCH_CATS_SUCCESS:
      return resetStatus;
    case FETCH_CATS_ERR:
      return resetStatus;

    case FETCH_FOLLOWING_REQUEST:
      return _.assign(
        {},
        state,
        { fetchingFollowing: true }
      );
    case FETCH_FOLLOWING_SUCCESS:
      return _.assign(
        {},
        state,
        {
          fetchingFollowing: false,
          fetchingFollowingSuccess: true
        }
      );
    case FETCH_FOLLOWING_ERR:
      return _.assign(
        {},
        state,
        {
          fetchingFollowing: false,
          fetchingFollowingError: action.err
        }
      );

    case SHOW_UPLOAD_FORM:
      return _.assign(
        {},
        state,
        {
          showUploadForm: true,
          catIndexForUpload: action.index
        }
      );
    case ADD_TO_FEED_ERR:
      return _.assign(
        {},
        state,
        { fetchedCatsError: true }
      );
    default:
      return state;
  }
}

function users(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return [...action.allUsers];
    case SIGN_OUT_OF_FB:
      return [];
    default:
      return state;
  }
}

const reducers = {
  user: userAuth,
  profile,
  form: formReducer,
  cats,
  following,
  users,
  status
};

// Note: this implicitly passes `state` and `action` args
// to the reducer functions
const app = combineReducers(reducers);
export default app;
