import _ from 'lodash';
import { combineReducers } from 'redux';
import {
  SIGN_IN_WITH_FB,
  SIGN_OUT_OF_FB,
  RECEIVE_USER
} from '../actions';

const initialState = {
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

function userAuth(state = initialState, action) {
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

// Note: this implicitly passes `state` and `action` args to `userAuth`
const app = combineReducers({ user: userAuth });
export default app;
