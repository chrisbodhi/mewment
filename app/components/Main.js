import React from 'react';
// import SearchGithub from './SearchGithub';
import SignIn from './SignIn';

const Main = ({ history, children }) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
          {/* <SearchGithub history={history} /> */}
          <SignIn />
        </div>
      </nav>
      <div className="container">
        {/* replaced by active component, using react-router */}
        {children}
      </div>
    </div>
  );
};

Main.propTypes = {
  history: React.PropTypes.object.isRequired,
  children: React.PropTypes.object.isRequired
};

export default Main;
