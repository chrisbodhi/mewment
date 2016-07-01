import expect from 'expect';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { catProfile } from './test_helper';

// import both types and functions
import * as actions from '../app/actions';

import { addPhotoToFb } from '../app/modules/firebase-db';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// todo: don't hardcode this; do better with mocks
// todo: investigate use of https://github.com/mfncooper/mockery
// or https://github.com/thlorenz/proxyquire
// const catsFromFb = [
//   { about: 'I like laying in the sun and getting my ears rubbed. But don\'t take my kindness for weakness -- I\'ll ruin your shit if need be.', age: '12', color: 'Tabby', name: 'Bonnie' },
//   { about: 'things', age: '1', color: 'Null', name: 'A' },
//   { about: 'A big cuddle bug.', age: '13', color: 'White with orange spots', name: 'Ricky', sex: 'neutered' },
//   { about: 'Meow', age: '1', color: 'Q', name: 'T', sex: '' },
//   { about: '6', age: '8', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560?alt=media&token=cbd41a39-6521-4366-97f7-d7d8fd6b662b', color: '7', name: '9', sex: '' },
//   { about: 'm', age: '9', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560%2Fmake-brian-proud.png?alt=media&token=5f13a723-d555-441d-983c-4f3a5ec0676c', color: 'k', name: 'i', sex: '' },
//   { about: 'kjnkj', age: '88', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560%2Fmake-brian-proud.png?alt=media&token=b7702e8d-6bac-447c-8a58-f2ecf6f29396', color: 'unun', name: 'uu', sex: '' },
//   { about: '', age: '9999999999', color: '', name: '', sex: 'neutered' },
//   { about: 'p', age: '9', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560%2Fmake-brian-proud.png?alt=media&token=d6847c1e-c16a-4370-b2c8-2dab5c4d71fa', color: 'o', name: 'p', sex: 'spayed' },
//   { about: 'p', age: '3', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560%2Fmake-brian-proud.png?alt=media&token=efae1a89-02f7-4ff9-b39a-5af9665c53ac', color: 'o', name: 'p', sex: 'spayed' },
//   { about: 'rm', age: '0', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560%2Fmake-brian-proud.png?alt=media&token=fed4f00e-4057-43dc-aa67-d17debcd14cc', color: 'i', name: 'l', sex: 'spayed' },
//   { about: 'Yells. \n\n\nA lot.', age: '4', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560%2Fmake-brian-proud.png?alt=media&token=e20e1a89-c7e4-448c-a722-1aa1fa3822f8', color: 'Blackish', name: 'Argh', sex: 'spayed' },
//   { about: '9 to go!', age: '2', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560%2Fmake-brian-proud.png?alt=media&token=f088e08b-5796-487b-b317-c6639fb60d42', color: 'Lucky green', name: 'Grep', sex: 'spayed' },
//   { about: 'Like a tibula.', age: '98', avatar: 'https://firebasestorage.googleapis.com/v0/b/project-3398608299508035534.appspot.com/o/685030558304560%2Fmake-brian-proud.png?alt=media&token=d0176b8b-85eb-42e9-9408-2805a99d7c87', color: 'Tibby', name: 'Bob', sex: 'spayed' }
// ];
const catsFromFb = [catProfile];
const uid = '685030558304560';

describe('Actions', () => {
  describe('Cat Actions', () => {
    afterEach(() => {
      nock.cleanAll();
    });

    it('creates an action to add a cat', () => {
      const cat = {};
      const expectedAction = {
        type: actions.ADD_CAT,
        cat
      };
      expect(actions.addCat(cat)).toEqual(expectedAction);
    });

    xit('creates an action to fetch cats from Firebase', () => {
      nock('https://project-3398608299508035534.firebaseio.com')
        .get(`/cats/${uid}`)
        .reply(200, { catsFromFb });

      const expectedActions = [
        { type: actions.FETCH_CATS_REQUEST, uid },
        { type: actions.FETCH_CATS_SUCCESS, catsFromFb }
      ];
      const store = mockStore({ catsFromFb });

      return store.dispatch(actions.fetchCats(uid))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates an action to show the file upload component', () => {
      const index = 1;
      const expectedAction = {
        type: actions.SHOW_UPLOAD_FORM,
        index
      };
      expect(actions.showUploadForm(index)).toEqual(expectedAction);
    });

    xit('creates ADD_TO_FEED_SUCCESS when a photo has been added to a feed', () => {
      const feed = 'public';
      const catId = '1';
      nock('').get('/todos').reply(200, { body: { todos: ['a', 'b'] } });
      const expectedActions = [
        { type: actions.ADD_TO_FEED_REQUEST },
        { type: actions.ADD_TO_FEED_SUCCESS, body: { todos: ['a', 'b'] } }
      ];
      const store = mockStore({ todos: [] });

      return store.dispatch(actions.addPhoto({ uid, catId, feed }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    xit('creates ADD_TO_FEED_ERR when photo upload fails', () => {
      const feed = 'public';
      const catId = '1';
      nock('localhost:8080')
        .get('/todos')
        .reply(500, { body: { error: 'err string' } });
      const expectedActions = [
        { type: actions.ADD_TO_FEED_REQUEST },
        { type: actions.ADD_TO_FEED_ERR, err: 'err string' }
      ];
      const store = mockStore({ todos: [] });

      return store.dispatch(actions.addPhoto({ uid, catId, feed }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe('Profile Actions', () => {
    it('creates an action to clear the profile', () => {
      const expectedAction = {
        type: actions.CLEAR_PROFILE
      };
      expect(actions.clearProfile()).toEqual(expectedAction);
    });
  });
});
