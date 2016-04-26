/* eslint-env mocha */

import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';
import profileReducer from '../../reducers/ProfilesReducer';

const initialProfile = fromJS({
  "id": 0,
  "name": "Fluffy",
  "age": 101,
  "type": "Cheshire",
  "location": "SoCo",
  "text": "I am one mean motherfucker.",
  "photos": {
    "private": [
      "http://cloudinary.com/1",
      "http://cloudinary.com/2",
      "http://cloudinary.com/3"
    ],
    "public": [
      "http://cloudinary.com/66",
      "http://cloudinary.com/77",
      "http://cloudinary.com/88"
    ]
  },
  "items": [
    {
      "name": "Purina ONE Dry Cat Food",
      "link": "http://www.amazon.com/Purina-ONE-Indoor-Advantage-16-Pound/dp/B000WFKTWM",
      "category": "Food"
    },
    {
      "name": "The Ultimate Scratching Post",
      "link": "http://www.amazon.com/SmartCat-3832-Ultimate-Scratching-Post/dp/B000634MH8",
      "category": "Furniture"
    },
    {
      "name": "Go Cat Teaser Cat Catcher Wand Cat Toy",
      "link": "http://www.amazon.com/Go-Cat-Catcher-Teaser-Mouse/dp/B000LPOUNW",
      "category": "Toy"
    }
  ],
  "following": [1],
  "matched": []
});

describe('ProfilesReducer', () => {
  it('has an initial state', async () => {
    const action = {
      type: 'SET_PROFILE',
      id: 0
    };
    const nextState = await profileReducer(undefined, action);

    expect(nextState.get('name')).to.equal('Fluffy');
  });

  it('should set the profile info with SET_PROFILE', async () => {
    const initialState = Map();
    const action = {
      type: 'SET_PROFILE',
      id: 0
    };
    const nextState = await profileReducer(initialState, action);

    expect(nextState.get('name')).to.equal('Fluffy');
    expect(nextState.get('text')).to.equal('I am one mean motherfucker.');
    expect(nextState.get('photos').size).to.equal(2);
    expect(nextState.getIn(['photos', 'public']).size).to.equal(3);
    expect(nextState.getIn(['photos', 'private']).size).to.equal(3);
  });

  it('should add to the followers list with FOLLOW_USER', async () => {
    const initialState = initialProfile;
    const action = {
      type: 'FOLLOW_USER',
      followId: 2
    };
    const nextState = await profileReducer(initialState, action);

    expect(nextState.get('following').size).to.equal(2);
    expect(nextState.get('following').last()).to.equal(2);
  });
});
