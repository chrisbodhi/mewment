import { expect } from 'chai';

import reducer from '../app/reducers';
import { ADD_PROFILE } from '../app/actions';

const initialState = {
  user: {
    didInvalidate: false,
    isFetching: false,
    uid: ''
  },
  profile: {},
  form: {}
};

describe('profile reducer', () => {
  it('defaults to the inital state', () => {
    const nextState = reducer(undefined, {});
    expect(initialState).to.deep.equal(nextState);
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
    expect(nextState.profile).to.deep.equal({
      name: 'Snowball',
      age: 26,
      color: 'Black',
      about: 'Snowball may be the fifth of his name.',
      profilePhoto: 'gs://',
      lastUpdated: now
    });
  });
});
