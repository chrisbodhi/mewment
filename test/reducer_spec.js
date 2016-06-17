import expect from 'expect';

import reducer from '../app/reducers';
import { catProfile, defaultStatus as status } from './test_helper';
import {
  ADD_PROFILE,
  CLEAR_PROFILE,
  ADD_CAT,
  FETCH_CATS_REQUEST,
  FETCH_CATS_WIN,
  FETCH_CATS_FAIL
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
  form: {},
  status
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
    it('defaults to the initial state', () => {
      const nextFromInitState = reducer(undefined, {});
      expect(initialState).toEqual(nextFromInitState);
    });

    it('ADD_CAT moves data from profile to cats', () => {
      const profileState = reducer(initialState, {
        type: ADD_PROFILE,
        data: catProfile
      });
      const action = {
        type: ADD_CAT,
        cat: profileState.profile
      };
      const nextState = reducer(profileState, action);
      expect(nextState.cats.length).toBe(1);
      expect(nextState.cats[0]).toEqual(catProfile);
    });

    it('FETCH_CATS_WIN adds cat profile from Firebase to cats in state', () => {
      const fetchWin = {
        type: FETCH_CATS_WIN,
        catsFromFb: [catProfile]
      };
      const nextState = reducer(initialState, fetchWin);
      expect(nextState.cats.length).toBe(1);
      expect(nextState.cats[0]).toEqual(catProfile);
    });
  });

  describe('status reducer', () => {
    it('defaults to the initial statuses', () => {
      const nextState = reducer(undefined, {});
      expect(initialState).toEqual(nextState);
    });

    it('FETCH_CATS_REQUEST sets `fetchingCats` to true', () => {
      expect(initialState.status.fetchingCats).toBe(false);
      const fetchAction = {
        type: FETCH_CATS_REQUEST,
        uid: '666'
      };
      const nextState = reducer(initialState, fetchAction);
      expect(nextState.status.fetchingCats).toBe(true);
    });

    it('FETCH_CATS_WIN sets `fetchingCats` to false', () => {
      const fetchAction = {
        type: FETCH_CATS_REQUEST,
        uid: '666'
      };
      const inProgressState = reducer(initialState, fetchAction);
      const fetchWin = {
        type: FETCH_CATS_WIN,
        catsFromFb: [catProfile]
      };
      const nextState = reducer(inProgressState, fetchWin);
      expect(nextState.status.fetchingCats).toBe(false);
    });

    it('FETCH_CATS_FAIL sets `fetchingCats` to false', () => {
      const fetchAction = {
        type: FETCH_CATS_REQUEST,
        uid: '666'
      };
      const inProgressState = reducer(initialState, fetchAction);
      const fetchFail = {
        type: FETCH_CATS_FAIL,
        err: 'Too many cats :crying_cat_face:'
      };
      const nextState = reducer(inProgressState, fetchFail);
      expect(nextState.status.fetchingCats).toBe(false);
    });
  });
});
