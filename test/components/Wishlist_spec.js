import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Wishlist from '../../app/components/Wishlist';
import { catProfile, everyType } from '../test_helper';

function wishlistSetup() {
  const props = {
    wishlist: catProfile.wishlist
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Wishlist {...props} />);
  const output = renderer.getRenderOutput();

  return output;
}

describe('Component: Wishlist', () => {
  const output = wishlistSetup();

  it('renders three unordered lists in a div', () => {
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('wishlist');
    expect(output.props.children[1].props.children.length).toBe(3);

    const allUl = everyType(output.props.children[1].props.children, 'li');
    expect(allUl).toBe(true);
  });
});
