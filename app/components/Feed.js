import React from 'react';
import _ from 'lodash';

import Entry from './Entry';

const Feed = ({ entries }) => (
  <div className="feed">
    <ul>
      {_.map(entries, (entry, index) => (<Entry entry={entry} key={index} />))}
    </ul>
  </div>
);

Feed.propTypes = {
  entries: React.PropTypes.array.isRequired
};

export default Feed;
