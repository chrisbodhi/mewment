import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import CatTile from './CatTile';

export const CatProfiles = ({ cats }) => (
  <ul>
    {cats.map((cat, index) => CatTile(cat, index))}
  </ul>
);

CatProfiles.propTypes = {
  cats: React.PropTypes.array.isRequired
};

export const ProfileContainer = ({ user, cats }) => (
  user.uid
    ? (
    <div>
      <section className="grid">
        {
          cats && cats.length
            ? <CatProfiles cats={cats} />
            : <p>No cats yet!</p>
        }
      </section>
      <hr />
      <Link to={'/profiles/add'}>Would you like to add a profile?</Link>
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
