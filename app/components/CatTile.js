import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const CatTile = (cat, index) => (<li key={index}>
  <div className="tile">
    <Link to={`/profiles/${index}`}>
      <h3 className="cat-name">
        {cat.name || 'Derp'}
      </h3>
    </Link>
    <div><strong>Age:</strong> {cat.age}</div>
    <div><strong>Breeder:</strong> {cat.sex}</div>
    <div><strong>Color:</strong> {cat.color}</div>
    <div><strong>About:</strong> {cat.about}</div>
    <img src={cat.avatar} alt={`It's ${cat.name}!`} />
    <div><strong>Wishlist:</strong>
      <ul>
        {_.map(cat.wishlist, (item, category) => (
          <li>{_.capitalize(category)}: {item}</li>
        ))}
      </ul>
    </div>
  </div>
</li>);

CatTile.propTypes = {
  index: React.PropTypes.number.isRequired,
  cat: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    sex: React.PropTypes.string.isRequired,
    about: React.PropTypes.string.isRequired
  }).isRequired
};

export default CatTile;
