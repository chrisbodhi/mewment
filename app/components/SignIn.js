import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

let SignIn = (props, state) => {
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
}

SignIn.propTypes = {
  uid: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

SignIn = connect()(SignIn);

export default SignIn;
