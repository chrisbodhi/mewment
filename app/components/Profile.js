import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const CatProfile = ({ cats }) => (
  <ul>
    {cats.map((cat) => <li>{cat.name} || {cat.age} || {cat.sex} || {cat.color}</li>)}
  </ul>
);

CatProfile.propTypes = {
  cats: React.PropTypes.object.isRequired
};

const ProfileContainer = ({ user, cats }) => (
  <div className="row">
    {
      user.uid
        ? (
        <div>
          <Link to={'/profile/add'}>Would you like to add a profile?</Link>
          <hr />
          <CatProfile cats={cats} />
        </div>)
      : (<div>Sign in to access</div>)
    }
  </div>
);

ProfileContainer.propTypes = {
  cats: React.PropTypes.array.isRequired,
  user: React.PropTypes.shape({
    uid: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProfileContainerProps = (state) => ({ user: state.user, cat: state.cat });
const Profile = connect(mapStateToProfileContainerProps)(ProfileContainer);

export default Profile;
