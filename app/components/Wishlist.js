import _ from 'lodash';
import React from 'react';

const Wishlist = ({ wishlist }) => (
  <div className="wishlist">
    <ul>
      {_.map(wishlist.toys, (toy, key) => (
        <li key={key}><a href={toy.link}>{toy.name}</a></li>
      ))}
    </ul>

    <ul>
      {_.map(wishlist.food, (food, key) => (
        <li key={key}><a href={food.link}>{food.name}</a></li>
      ))}
    </ul>

    <ul>
      {_.map(wishlist.litter, (litter, key) => (
        <li key={key}><a href={litter.link}>{litter.name}</a></li>
      ))}
    </ul>
  </div>
);

Wishlist.propTypes = {
  wishlist: React.PropTypes.shape({
    toys: React.PropTypes.object.isRequired,
    food: React.PropTypes.object.isRequired,
    litter: React.PropTypes.object.isRequired,
  }).isRequired
};

export default Wishlist;
