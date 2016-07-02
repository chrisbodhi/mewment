import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import addProfile from '../components/addProfile';
import Upload from '../components/Upload';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route path="/profiles" component={Profile} />
    <Route path="/profiles/add" component={addProfile} />
    <Route path="/upload" component={Upload} />
    <IndexRoute component={Home} /> {/* default route */}
  </Route>
);
