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
    <Likes />
    <LikeButton />
  </li>
);

Entry.propTypes = {
  entry: React.PropTypes.shape({
    alt: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
    url: React.PropTypes.string.isRequired
  }).isRequired,
  index: React.PropTypes.number.isRequired
};

export default Entry;
