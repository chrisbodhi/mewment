import _ from 'lodash';
import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PhotoGrid from '../../app/components/PhotoGrid';
import { catProfile } from '../test_helper';

function photoGridSetup() {
  const props = {
    photos: catProfile.public
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<PhotoGrid {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: PhotoGrid', () => {
  const { output } = photoGridSetup();

  it('renders an unordered list in a div', () => {
    expect(output.type).toBe('div');
    expect(output.props.children.type).toBe('ul');
  });

  it('renders all of the public photos', () => {
    const ul = output.props.children;
    expect(ul.props.children.length).toEqual(_.size(catProfile.public));
  });

  // expect all of the children types to be img
  it('renders only img types within the line items', () => {
    const lis = output.props.children.props.children;
    const imgs = _.map(lis, 'props.children.type');
    expect(imgs.every((i) => i === 'img')).toBe(true);
  });

  it('renders the keys from the public photos object', () => {
    const lis = output.props.children.props.children;
    const keys = _.map(lis, 'key');
    _.forEach(keys, (key) => {
      expect(_.keys(catProfile.public)).toInclude(key);
    });
  });
});
