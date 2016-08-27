import React from 'react';

const Wishlist = ({ wishlist }) => (
  wishlist ?
    <div className="wishlist">
      <h5>Wishlist</h5>
      <ul>
        <li key={Math.random()}><a href={wishlist.toys.url}>{wishlist.toys.name}</a></li>
        <li key={Math.random()}><a href={wishlist.food.url}>{wishlist.food.name}</a></li>
        <li key={Math.random()}><a href={wishlist.litter.url}>{wishlist.litter.name}</a></li>
      </ul>
    </div> :
    <div>No wishlist -- sad cat face</div>
);

Wishlist.propTypes = {
  wishlist: React.PropTypes.shape({
    toys: React.PropTypes.array.isRequired,
    food: React.PropTypes.array.isRequired,
    litter: React.PropTypes.array.isRequired,
  }).isRequired
};

export default Wishlist;
