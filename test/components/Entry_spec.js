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
  const [image, caption] = output.props.children;

  it('has the type of div', () => {
    expect(output.type).toBe('div');
  });

  it('has `entry` as its classname', () => {
    expect(output.props.className).toBe('entry');
  });

  it('has one image', () => {
    expect(image.type).toBe('img');
    expect(image.props.src).toInclude('http');
    expect(image.props.alt.length).toBeGreaterThan(0);
  });

  it('has a caption', () => {
    expect(caption.type).toBe('p');
    expect(caption.props.className).toBe('caption');
    expect(caption.props.children).toBe('this is a caption');
  });
});
