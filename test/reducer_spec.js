import expect from 'expect';

import reducer from '../app/reducers';
import { catProfile } from './test_helper';
import {
  ADD_PROFILE,
  CLEAR_PROFILE,
  ADD_CAT
} from '../app/actions';

const initialUser = {
  didInvalidate: false,
  isFetching: false,
  uid: ''
};
const initialProfile = {};
const initialCats = [];

const initialState = {
  user: initialUser,
  profile: initialProfile,
  cats: initialCats,
  form: {}
};

describe('reducers', () => {
  describe('profile reducer', () => {
    it('defaults to the initial state', () => {
      const nextState = reducer(undefined, {});
      expect(initialState).toEqual(nextState);
    });

    it('handles ADD_PROFILE', () => {
      const action = {
        type: ADD_PROFILE,
        data: catProfile
      };
      const nextState = reducer(initialState, action);
      expect(nextState.profile).toEqual(catProfile);
    });

    it('clears out the profile with CLEAR_PROFILE', () => {
      const profileState = reducer(initialState, {
        type: ADD_PROFILE,
        data: catProfile
      });
      const action = { type: CLEAR_PROFILE };
      const nextState = reducer(profileState, action);
      expect(nextState.profile).toEqual({});
    });
  });

  describe('cat reducer', () => {
    const profileState = reducer(initialState, {
      type: ADD_PROFILE,
      data: catProfile
    });
    const action = {
      type: ADD_CAT,
      cat: profileState.profile
    };
    const nextState = reducer(profileState, action);

    it('defaults to the initial state', () => {
      const nextFromInitState = reducer(undefined, {});
      expect(initialState).toEqual(nextFromInitState);
    });

    it('ADD_CAT moves data from profile to cats', () => {
      expect(nextState.cats.length).toBe(1);
      expect(nextState.cats[0]).toEqual(catProfile);
    });
  });
});
