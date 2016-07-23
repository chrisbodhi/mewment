import React from 'react';
import { connect } from 'react-redux';

import PhotoGrid from './PhotoGrid';
import Wishlist from './Wishlist';

export const FullProfileContainer = ({ user, cat }) => (
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
    <Wishlist uid={user.uid} id={cat.id} />
  </div>
);

FullProfileContainer.propTypes = {
  user: React.PropTypes.shape({
    uid: React.PropTypes.string.isRequired
  }).isRequired,
  cat: React.PropTypes.object.isRequired
};

const mapStateToFullProfileContainerProps = (state) => ({ user: state.user, cats: state.cats });
const FullProfile = connect(mapStateToFullProfileContainerProps)(FullProfileContainer);

export default FullProfile;
