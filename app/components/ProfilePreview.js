import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const PureProfilePreview = (props) => (
  <div className="col-md-5 col-md-offset-1">
    <h4>Name: {_.get(props, 'profile.name.value', '')}</h4>
    <hr />
    <h4>Age: {_.get(props, 'profile.age.value', '')}</h4>
    <hr />
    <h4>Breeder: {_.capitalize(_.get(props, 'profile.sex.value', ''))}</h4>
    <hr />
    <h4>Color: {_.get(props, 'profile.color.value', '')}</h4>
    <hr />
    <h4>About: {_.get(props, 'profile.about.value', '')}</h4>
    <hr />
  </div>
);

const mapStateToProfileContainerProps = (state) => ({ profile: state.form.profile });
const ProfilePreview = connect(mapStateToProfileContainerProps)(PureProfilePreview);

export default ProfilePreview;
