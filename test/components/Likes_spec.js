import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Likes from '../../app/components/Likes';

function likesSetup(likes = []) {
  const props = { likes };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Likes {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: Likes', () => {
  describe('when there are no likes, there is a div', () => {
    const { output } = likesSetup();

    it('with the className `likes`', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('likes');
    });

    it('that offers a nice message', () => {
      expect(output.props.children.join(''))
        .toMatch(/We don't care what \w{3,7} says, we like your cat\./);
    });
  });

  describe('when there is one like, there is a div', () => {
    const { output } = likesSetup(['1234']);

    it('with the className `likes`', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('likes');
    });

    it('that tells the user they have one like', () => {
      expect(output.props.children).toBe('1 Like');
    });
  });

  describe('when there are 997 likes, there is a div', () => {
    const { output } = likesSetup(Array(997));

    it('with the className `likes`', () => {
      expect(output.type).toBe('div');
      expect(output.props.className).toBe('likes');
    });

    it('that tells the user they have 997 likes', () => {
      expect(output.props.children).toBe('997 Likes');
    });
  });
});
