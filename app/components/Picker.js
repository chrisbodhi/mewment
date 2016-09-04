import _ from 'lodash';

import React from 'react';
import { connect } from 'react-redux';

import PhotoGrid from './PhotoGrid';

// getting all users from firebase is potentially expensive af
// todo: do this better -- is there a way to get just the user ids? or to calculate it on firebase?
// i.e. new user signup means that the new user's id gets added to an array associated with the uid
// that's called something like "new cats that you maybe want to follow"

export const PickerContainer = ({ following, users }) => {
  // this leaves out future cats added by a user that the logged-in user already follows
  // todo: rectify that shit
  const uidsToFollow = _.omit(users, ..._.keys(following));

  const avatarsToFollow = _.reduce(uidsToFollow, (acc, userObj) => {
    // todo: make this return an object because that's what we need
    // possible derp solution: val is aCat.avatar, key is ownerId-catId
    // [ { ownerId-catId: aCat.avatar } ]
    return _.map(userObj, aCat => aCat.avatar);
  }, {});
  return (<div>
    {/* `photos` wants an object of cat photos */}
    {/* pass in object of avatars that user is not following already */}
    {/* todo: derp -- how to pick and communicate that the catId and its owner's id? see :22 */}
    {/* todo: change PhotoGrid so that it accepts a clickHandler as an optional prop */}
    {/* todo: ...then add a clickHandler that pushes clicked avatar's user id to `following` */}
    <PhotoGrid photos={avatarsToFollow} />
  </div>);
};

PickerContainer.propTypes = {
  following: React.PropTypes.object.isRequired,
  users: React.PropTypes.array.isRequired
};

const mapStateToPickerContainerProps = (state) => ({
  following: state.following,
  users: state.users
});
const Picker = connect(mapStateToPickerContainerProps)(PickerContainer);

export default Picker;
