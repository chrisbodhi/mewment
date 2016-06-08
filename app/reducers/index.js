import _ from 'lodash';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  SIGN_IN_WITH_FB,
  SIGN_OUT_OF_FB,
  RECEIVE_USER,
  ADD_PROFILE
} from '../actions';

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
    default:
      return state;
  }
}

const reducers = {
  user: userAuth,
  profile,
  form: formReducer
};

// Note: this implicitly passes `state` and `action` args
// to the reducer functions
const app = combineReducers(reducers);
export default app;
