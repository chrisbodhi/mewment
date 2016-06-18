import React from 'react';

const CatTile = (cat, index) => (<li key={index}>
  <div className="tile">
    <h3 className="cat-name">{cat.name || 'Derp'}</h3>
    <div><strong>Age:</strong> {cat.age}</div>
    <div><strong>Breeder:</strong> {cat.sex}</div>
    <div><strong>Color:</strong> {cat.color}</div>
    <div><strong>About:</strong> {cat.about}</div>
    <img src={cat.avatar} alt={`It's ${cat.name}!`} />
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
