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
    const products = [
      { category: 'food',
        choices: [
          { value: 'food-1' },
          { value: 'food-2' }
        ]
      },
      { category: 'litter',
        choices: [
          { value: 'litter-1' },
          { value: 'litter-2' }
        ]
      },
      { category: 'toys',
        choices: [
          { value: 'toys-1' },
          { value: 'toys-2' }
        ]
      }
    ];

    return (
      <div className="row">
        {
          this.props.user.uid
            ? (
            <div className="profile">
              <h2 className="text-center">Profile</h2>
              <ProfileForm
                onSubmit={(e) => this.handleSubmit(e)}
                products={products}
              />
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
