import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const CatProfiles = ({ cats }) => (
  <ul>
    {cats.map((cat, index) => (<li key={index}>
      <p><strong>Name:</strong> {cat.name}</p>
      <p><strong>Age:</strong> {cat.age}</p>
      <p><strong>Breeder:</strong> {cat.sex}</p>
      <p><strong>Color:</strong> {cat.color}</p>
      <p><strong>About:</strong> {cat.about}</p>
      <img src={cat.avatar} alt={`It's ${cat.name}!`} />
    </li>))}
  </ul>
);

CatProfiles.propTypes = {
  cats: React.PropTypes.array.isRequired
};

export const ProfileContainer = ({ user, cats }) => (
  user.uid
    ? (
    <div className="row">
      <Link to={'/profile/add'}>Would you like to add a profile?</Link>
      <hr />
      {
        cats && cats.length
          ? <CatProfiles cats={cats} />
          : <p>No cats yet! <Link to={'/profile/add'}>Would you like to add one?</Link></p>
      }
    </div>)
  : (<div>Sign in to access</div>)
);

ProfileContainer.propTypes = {
  cats: React.PropTypes.array.isRequired,
  user: React.PropTypes.shape({
    uid: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProfileContainerProps = (state) => ({ user: state.user, cats: state.cats });
const Profile = connect(mapStateToProfileContainerProps)(ProfileContainer);

export default Profile;
