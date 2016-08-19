import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Wishlist from '../../app/components/Wishlist';
import { catProfile } from '../test_helper';

function wishlistSetup() {
  const props = {
    cat: catProfile
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Wishlist {...props} />);
  const output = renderer.getRenderOutput();

  return output;
}

describe('Component: Wishlist', () => {
  const output = wishlistSetup();

  it('is true', () => {
    expect(true).toBe(true);
  });
});
