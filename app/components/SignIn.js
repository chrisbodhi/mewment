import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const SignInContainer = (props) => {
  const { uid, dispatch } = props;
  return (<div>{
      uid
        ? (<button onClick={() => dispatch(signOut())}>
          Sign Out
        </button>)

        : (<button onClick={() => dispatch(signIn())}>
          Sign in with FB
        </button>)
    }</div>);
};

SignInContainer.propTypes = {
  uid: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

const SignIn = connect()(SignInContainer);

export default SignIn;
