import _ from 'lodash';
import React from 'react';
import { addLike } from '../actions';

class LikeButton extends React.Component {
  handleClick({ ownerId, catId, photoId, likerId }) {
    this.props.dispatch(addLike({ ownerId, catId, photoId, likerId }));
  }

  render() {
    const { ownerId, catId, photoId } = this.props;
    // currently-logged-in user
    // todo: is there an idiomatic FB way that's accessible here?
    const likerId = _.get(this, 'props.user.uid', 666);
    return (<div
      className="like-button"
      onClick={() => this.handleClick({ ownerId, catId, photoId, likerId })}
    >😻 It</div>);
  }
}

LikeButton.propTypes = {
  catId: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.object.isRequired,
  photoId: React.PropTypes.string.isRequired,
  ownerId: React.PropTypes.string.isRequired
};

export default LikeButton;
