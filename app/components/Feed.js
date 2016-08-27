import React from 'react';

const Feed = ({ cat }) => (
  <div className="feed">
    {cat.avatar}
  </div>
);

Feed.propTypes = {
  cat: React.PropTypes.object.isRequired
};

export default Feed;
