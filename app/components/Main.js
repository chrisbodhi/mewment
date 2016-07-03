import React from 'react';
import { connect } from 'react-redux';

import { Header } from './Header';
import Footer from './Footer';

const MainContainer = ({ children }) => (
  <div className="main-container">
    {/* Must pass in `children` to get active links in navbar */}
    <Header children={children} />
    <div id="main" className="container-fluid">
      {children}
    </div>
    <Footer />
  </div>
);

MainContainer.propTypes = {
  children: React.PropTypes.object.isRequired
};

const mapStateToMainContainerProps = (state) => ({ user: state.user });
const Main = connect(mapStateToMainContainerProps)(MainContainer);

export default Main;
