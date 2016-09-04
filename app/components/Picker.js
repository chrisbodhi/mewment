import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';

import PhotoGrid from './PhotoGrid';

// getting all users from firebase is potentially expensive af
// todo: do this better -- is there a way to get just the user ids? or to calculate it on firebase?
// i.e. new user signup means that the new user's id gets added to an array associated with the uid
// that's called something like "new cats that you maybe want to follow"

export const PickerContainer = ({ following, uid, users }) => {
  const uidsToFollow = _.omit(users, [..._.keys(following), uid]);
  // Don't want a double `map` as a one-liner
  // eslint-disable-next-line
  const avatarsToFollow = _.map(uidsToFollow, (userObj) => {

    // todo: make this return an object because that's what we need
    // possible derp solution: val is aCat.avatar, key is ownerId-catId
    return _.map(userObj, aCat => aCat.avatar);
  });
  return (<div>
    {/* `photos` wants an array of cat photos */}
    {/* pass in array of avatars that user is not following already */}
    {/* todo: derp -- how to pick and how to communicate that the catId and its owner's id? */}
    <PhotoGrid photos={avatarsToFollow} />
  </div>);
};

PickerContainer.propTypes = {
  following: React.PropTypes.object.isRequired,
  uid: React.PropTypes.string.isRequired,
  users: React.PropTypes.object.isRequired
};

const mapStateToPickerContainerProps = (state) => ({
  following: state.following,
  uid: state.user.uid,
  users: state.users
});
const Picker = connect(mapStateToPickerContainerProps)(PickerContainer);

export default Picker;
