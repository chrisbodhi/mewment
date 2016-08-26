import React from 'react';
import { connect } from 'react-redux';

import PhotoGrid from './PhotoGrid';
import Wishlist from './Wishlist';

export class FullProfileContainer extends React.Component {
  render() {
    const cat = this.props.cats[this.props.params.id];
    return (
      <div id="fullProfile">
        <div id="mainImage">
          <img src={cat.avatar} alt={`It's ${cat.name}!`} />
        </div>
        <div id="heading">
          <h1 className="name">Name: {cat.name}</h1>
          <h3 className="descriptors">
            <p className="color">Color: {cat.color}</p>
            <p className="age">Age: {cat.age}</p>
            <p className="sex">Sex: {cat.sex}</p>
          </h3>
        </div>
        <PhotoGrid photos={cat.public} />
        <div id="profile">
          About: {cat.about}
        </div>
        <Wishlist wishlist={cat.wishlist} />
      </div>
    );
  }
}

FullProfileContainer.propTypes = {
  cats: React.PropTypes.array.isRequired,
  params: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToFullProfileContainerProps = (state) => ({ cats: state.cats });
const FullProfile = connect(mapStateToFullProfileContainerProps)(FullProfileContainer);

export default FullProfile;
