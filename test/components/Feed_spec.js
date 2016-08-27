import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Feed from '../../app/components/Feed';
import { catProfile } from '../test_helper';

function feedSetup() {
  const props = {
    cat: catProfile
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Feed {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: Feed', () => {
  const { output } = feedSetup();

  it('has two Entry components', () => {
    expect(output.type).toBe('Entry');
    expect(output.length).toBe(2);
  });
});
