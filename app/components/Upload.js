import React from 'react';
import { connect } from 'react-redux';

import CatList from './CatList';
import UploadForm from './UploadForm';

class UploadContainer extends React.Component {
  handleSubmit(e) {
    console.log('in handleSubmit with', e);
  }

  render() {
    const { user, cats, dispatch, status } = this.props;
    return (
      user.uid
        ? (
        <div className="row">
          <div className="col-md-6">
            <h3>Your Cats!</h3>
            {
              cats && cats.length
                ? <CatList cats={cats} dispatch={dispatch} />
                : <p>No cats yet!</p>
            }
          </div>
          <div className="col-md-6">
            <UploadForm
              onSubmit={(e) => this.handleSubmit(e)}
              cats={cats}
              status={status}
              uid={user.uid}
            />
          </div>
        </div>)
      : (<div>Sign in to access</div>)
    );
  }
}

UploadContainer.propTypes = {
  cats: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  status: React.PropTypes.object.isRequired,
  user: React.PropTypes.shape({
    uid: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToUploadContainerProps = (state) => ({
  user: state.user,
  cats: state.cats,
  status: state.status
});
const Upload = connect(mapStateToUploadContainerProps)(UploadContainer);

export default Upload;
