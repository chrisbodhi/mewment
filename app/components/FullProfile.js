import React from 'react';
import { connect } from 'react-redux';

export const FullProfileContainer = ({ cat }) => (
  <div>
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
  </div>
);

FullProfileContainer.propTypes = {
  cat: React.PropTypes.shape.isRequired
};

const mapStateToFullProfileContainerProps = (state) => ({ user: state.user, cats: state.cats });
const FullProfile = connect(mapStateToFullProfileContainerProps)(FullProfileContainer);

export default FullProfile;
