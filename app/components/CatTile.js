import React from 'react';
import addPhoto from '../actions';

// todo: pass in dispatch from somewhere
// todo: pass in uid from somewhere, add to addPhoto func
const CatTile = (cat, index, dispatch) => (<li key={index}>
  <div className="tile">
    <h3 className="cat-name">{cat.name || 'Derp'}</h3>
    <div><strong>Age:</strong> {cat.age}</div>
    <div><strong>Breeder:</strong> {cat.sex}</div>
    <div><strong>Color:</strong> {cat.color}</div>
    <div><strong>About:</strong> {cat.about}</div>
    <img src={cat.avatar} alt={`It's ${cat.name}!`} />
    <div onClick={() => dispatch(addPhoto('1', index, 'public'))}>
      <i className="fa fa-camera" aria-hidden="true"></i>
      <i className="fa fa-plus" aria-hidden="true"></i>
      <i className="fa fa-globe" aria-hidden="true"></i>
    </div>
    <div onClick={() => dispatch(addPhoto('1', index, 'private'))}>
      <i className="fa fa-camera" aria-hidden="true"></i>
      <i className="fa fa-plus" aria-hidden="true"></i>
      <i className="fa fa-user-secret" aria-hidden="true"></i>
    </div>
  </div>
</li>);

CatTile.propTypes = {
  index: React.PropTypes.number.isRequired,
  cat: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    sex: React.PropTypes.string.isRequired,
    about: React.PropTypes.string.isRequired
  }).isRequired
};

export default CatTile;
