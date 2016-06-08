import expect from 'expect';

import reducer from '../app/reducers';
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

const catProfile = {
  name: 'Qwerty',
  age: 1,
  sex: 'Spayed',
  color: 'Black',
  about: 'Stinky',
  avatar: 'http://bit.ly/1rdk9Us'
};

describe('reducers', () => {
  describe('profile reducer', () => {
    it('defaults to the initial state', () => {
      const nextState = reducer(undefined, {});
      expect(initialState).toEqual(nextState);
    });

    it('handles ADD_PROFILE', () => {
      const now = Date.now();
      const action = {
        type: ADD_PROFILE,
        data: {
          name: 'Snowball',
          age: 26,
          color: 'Black',
          about: 'Snowball may be the fifth of his name.',
          profilePhoto: 'gs://',
          lastUpdated: now
        }
      };
      const nextState = reducer(initialState, action);
      expect(nextState.profile).toEqual({
        name: 'Snowball',
        age: 26,
        color: 'Black',
        about: 'Snowball may be the fifth of his name.',
        profilePhoto: 'gs://',
        lastUpdated: now
      });
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
      const nextState = reducer(undefined, {});
      expect(initialState).toEqual(nextState);
    });

    it('ADD_CAT moves data from profile to cats', () => {
      expect(nextState.cats.length).toBe(1);
      expect(nextState.cats[0]).toEqual(catProfile);
    });
  });
});
