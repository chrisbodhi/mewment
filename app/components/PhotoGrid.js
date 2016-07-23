import React from 'react';
import _ from 'lodash';

const PhotoGrid = ({ photos }) => (
  <div className="photoGrid">
    <ul>
      {_.map(photos, (photo, key) => (
        <li key={key}><img src={photo} alt="It is a cat." /></li>
      ))}
    </ul>
  </div>
);


PhotoGrid.propTypes = {
  photos: React.PropTypes.object.isRequired
};

export default PhotoGrid;
