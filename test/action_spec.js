import expect from 'expect';
import * as actions from '../app/actions';

describe('actions', () => {
  describe('cat actions', () => {
    it('should create an action to add a cat', () => {
      const cat = {};
      const expectedAction = {
        type: actions.ADD_CAT,
        cat
      };
      expect(actions.addCat(cat)).toEqual(expectedAction);
    });
  });

  describe('profile actions', () => {
    it('should create an action to clear the profile', () => {
      const expectedAction = {
        type: actions.CLEAR_PROFILE
      };
      expect(actions.clearProfile()).toEqual(expectedAction);
    });
  });
});
