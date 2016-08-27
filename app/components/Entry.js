import React from 'react';

const Entry = ({ entry }) => (
  <div className="entry">
    <img alt={entry.alt} src={entry.url} />
    <p className="caption">{entry.caption}</p>
  </div>
);

Entry.propTypes = {
  entry: React.PropTypes.shape({
    alt: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string,
    url: React.PropTypes.string.isRequired
  }).isRequired
};

export default Entry;
