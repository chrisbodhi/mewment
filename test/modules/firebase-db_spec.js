import expect from 'expect';

import { addLikeToPhoto } from '../../app/modules/firebase-db';

const ownerId = '1234';
const catId = '1';
const photoId = '666';
const likerId = '4321';
const likes = 0;

// expect count of `likes` property to increment
// expect(addLikeToPhoto({ ownerId, catId, photoId, likerId }).likes).toEq(1);

