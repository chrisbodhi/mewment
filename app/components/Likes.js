import React from 'react';
import _ from 'lodash';

const randomName = () => (_.sample([
  'Alice',
  'Bob',
  'Carol',
  'Dave',
  'Eve',
  'Fred',
  'Ginny',
  'Hank',
  'Jessica',
  'Kevin',
  'Linda'
]));

const Likes = ({ likes }) => (
  // todo: DRY this up
  likes.length
    ? <div className="likes">
      {(likes.length > 1) ? `${likes.length} Likes` : '1 Like'}
    </div>
    : <div className="likes">
      We don't care what {randomName()} says, we like your cat.
    </div>
);

Likes.propTypes = {
  likes: React.PropTypes.array.isRequired
};

export default Likes;
