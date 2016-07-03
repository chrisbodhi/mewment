import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const SignInContainer = ({ user, dispatch, location }) => (
  <div className={`signin-${location}`}>{
    user.uid
      ? (<button onClick={() => dispatch(signOut())}>
        Sign Out
      </button>)

      : (<a className="btn btn-lg" onClick={() => dispatch(signIn())}>
        <i className="fa fa-facebook"></i>
        Sign in with Facebook
      </a>)
  }</div>
);

SignInContainer.propTypes = {
  user: React.PropTypes.shape({
    uid: React.PropTypes.string.isRequired
  }).isRequired,
  dispatch: React.PropTypes.func.isRequired,
  location: React.PropTypes.string
};


const mapStateToSignInContainerProps = (state) => ({ user: state.user });
const SignIn = connect(mapStateToSignInContainerProps)(SignInContainer);

export default SignIn;
