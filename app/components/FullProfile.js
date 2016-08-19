import React from 'react';
import { connect } from 'react-redux';

import PhotoGrid from './PhotoGrid';
import Wishlist from './Wishlist';

export const FullProfileContainer = ({ cat }) => (
  <div id="fullProfile">
    <div id="mainImage">
      <img src={cat.avatar} alt={`It's ${cat.name}!`} />
    </div>
    <div id="heading">
      <h1 className="name">{cat.name}</h1>
      <h3 className="descriptors">
        <span className="color">{cat.color}</span>
        <span className="age">{cat.age}</span>
        <span className="sex">{cat.sex}</span>
      </h3>
    </div>
    <PhotoGrid photos={cat.public} />
    <div id="profile">
      {cat.about}
    </div>
    <Wishlist wishlist={cat.wishlist} />
  </div>
);

// might need to change to class being extended
// on componentDidMount, get `cat` from the state
// object -- `state.cats[this.props.params.id]`

FullProfileContainer.propTypes = {
  cat: React.PropTypes.shape({
    about: React.PropTypes.string.isRequired,
    age: React.PropTypes.number.isRequired,
    avatar: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    public: React.PropTypes.object.isRequired,
    sex: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToFullProfileContainerProps = (state) => ({ cats: state.cats });
const FullProfile = connect(mapStateToFullProfileContainerProps)(FullProfileContainer);

export default FullProfile;
