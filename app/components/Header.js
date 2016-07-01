import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SignIn from './SignIn';

export const HeaderContainer = ({ user }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link
          className="navbar-brand"
          to="/"
          alt="Link back home"
        >
          Mewment
          <img
            className="logo"
            alt="Share a Mewment"
            src="images/logo.png"
            style={{
              display: 'inline',
              marginLeft: '10px',
              maxHeight: '195%'
            }}
          />
        </Link>
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li>
            <Link to="profiles" activeStyle={{ color: 'tomato'}}>Profiles</Link>
          </li>
          <li>
            <Link to="feed" activeStyle={{ color: 'tomato'}}>Feed</Link>
          </li>
          <li>
            <Link to="matching" activeStyle={{ color: 'tomato'}}>Matching</Link>
          </li>
          <li>
            <Link to="upload" activeStyle={{ color: 'tomato'}}>Photo Upload</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li style={{ paddingTop: '12px' }}>
            <SignIn uid={user.uid || ''} />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

HeaderContainer.propTypes = {
  user: React.PropTypes.object.isRequired
};

const mapStateToHeaderContainerProps = (state) => ({ user: state.user });
export const Header = connect(mapStateToHeaderContainerProps)(HeaderContainer);
