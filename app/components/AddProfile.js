import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import ProfileForm from './ProfileForm';
import ProfilePreview from './ProfilePreview';
import { addProfile as saveProfile } from '../actions';

class AddProfileContainer extends React.Component {
  handleSubmit(e) {
    const data = _.assign({}, e, { lastUpdated: Date.now() });
    this.props.dispatch(saveProfile(data));
    // dirty hack, replace it
    window.location.hash = window.location.hash.replace(/\/add/, '');
  }

  render() {
    return (
      <div className="row">
        {
          this.props.user.uid
            ? (
            <div className="profile">
              <h2 className="text-center">Profile</h2>
              <ProfileForm onSubmit={(e) => this.handleSubmit(e)} />
              <ProfilePreview />
            </div>)
          : (<div>Sign in to access</div>)
        }
      </div>
    );
  }
}

AddProfileContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  user: React.PropTypes.shape({
    uid: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProfileContainerProps = (state) => ({ user: state.user });
const AddProfile = connect(mapStateToProfileContainerProps)(AddProfileContainer);

export default AddProfile;
