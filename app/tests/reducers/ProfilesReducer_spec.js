/* eslint-env mocha */

import { List, Map } from 'immutable';
import { expect } from 'chai';
import profileReducer from '../../reducers/ProfilesReducer';


describe('ProfilesReducer', () => {
  describe('SET_PROFILE', () => {
    it('should set the profile info correctly', async () => {
      const initialState = Map();
      const action = {
        type: 'SET_PROFILE',
        id: 0
      };
      const nextState = await profileReducer(initialState, action);

      expect(nextState.get('name')).to.equal('Fluffy');
      expect(nextState.get('text')).to.equal('I am one mean motherfucker.');
      expect(nextState.get('photos').size).to.equal(3);
    });
  });
});
