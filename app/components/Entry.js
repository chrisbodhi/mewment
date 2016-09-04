import React from 'react';
import Likes from './Likes';
import LikeButton from './LikeButton';

const Entry = ({ entry, index }) => (
  <li key={index} className="entry">
    <img alt={entry.alt} src={entry.url} />
    {entry.caption.length
      ? <p className="caption">{entry.caption}</p>
      : null
    }
  {/* todo: yes, all of these entry.somethings need to be filled out */}
    <Likes likes={[]} catId={entry.catId} ownerId={entry.owner} photoId={entry.photoId} />
    <LikeButton catId={entry.catId} ownerId={entry.ownerId} photoId={entry.photoId} />
  </li>
);

Entry.propTypes = {
  entry: React.PropTypes.shape({
    alt: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
    catId: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    photoId: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  }).isRequired,
  index: React.PropTypes.number.isRequired
};

export default Entry;
