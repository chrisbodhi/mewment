/* eslint-env mocha */

import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import profileReducer from '../../reducers/ProfilesReducer';

const initialState = Map();

describe('ProfilesReducer', () => {
  describe('SET_PROFILE', () => {
    it('should set the profile info correctly', () => {
      const action = {
        type: 'SET_PROFILE',
        id: 1
      };
      const nextState = profileReducer(initialState, action);
      expect(nextState.get('name')).to.equal('Fluffy');
      expect(nextState.get('photos').size).to.equal(4);
      expect(nextState.get('photos')
        .to.equal(List.of(['http://cloudinary.com/1', 'http://cloudinary.com/2', 'http://cloudinary.com/3'])));
    });
  });
});
