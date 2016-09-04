import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import LikeButton from '../../app/components/LikeButton';

function likeButtonSetup(likes = []) {
  const props = { likes };

  const renderer = TestUtils.createRenderer();
  renderer.render(<LikeButton {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: Like Button', () => {
  const { output } = likeButtonSetup();

  it('renders a div with a `like-button` class', () => {
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('like-button');
  });
});
