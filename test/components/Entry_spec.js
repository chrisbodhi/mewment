import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Entry from '../../app/components/Entry';
import { catProfile } from '../test_helper';

function entrySetup() {
  const props = {
    cat: catProfile
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Entry {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: Entry', () => {
  const { output } = entrySetup();

  it('has one image', () => {
    const image = output[0];
    expect(image.type).toBe('img');
    expect(image.props.children.length).toBe(1);
  });

  it('has a caption', () => {
    const caption = output[1];
    expect(caption.type).toBe('p');
    expect(caption.props.children).toBe('this is a caption');
  });
});
