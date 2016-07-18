import React from 'react';
import { connect } from 'react-redux';

import SignIn from './SignIn';

const HomeContainer = ({ user }) => (
  user.uid ?
    <h1 className="text-center">
      Welcome back to Mewment, {user.displayName.split(' ')[0]}!
      <pre><code>todo: add some sort of home screen</code></pre>
    </h1> :
    <div id="splash">
      <div id="header" className="row text-center">
        <span id="logo" className="col-md-2 col-md-offset-3"></span>
        <h1 className="col-md-5">Mewment</h1>
      </div>
      <h3 className="text-center">The first social network <em>just</em> for cats</h3>
      <div className="text-center">
        <SignIn location={'home'} />
      </div>
      <div id="three-selling-points" className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="col-md-4">
            <div className="box"></div>
            <p>We use computer vision to make sure you only see cats</p>
          </div>
          <div className="col-md-4">
            <div className="box"></div>
            <p>No pesky humans to interrupt your cat photos</p>
          </div>
          <div className="col-md-4">
            <div className="box"></div>
            <p>Get suckers on the Internet to buy your cat toys &amp; food</p>
          </div>
        </div>
      </div>
    </div>
);

HomeContainer.propTypes = {
  user: React.PropTypes.shape({
    uid: React.PropTypes.string.isRequired
  }).isRequired
};

const mapStateToHomeContainerProps = (state) => ({ user: state.user });
const Home = connect(mapStateToHomeContainerProps)(HomeContainer);

export default Home;
