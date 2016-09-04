import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Picker } from '../../app/components/Picker';

function pickerSetup(uid) {
  const props = { uid };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Picker {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: Picker', () => {
  const uid = '666';
  const output = pickerSetup(uid);

  it('renders a thing', () => {
    expect(output.type).toBe('div');
    expect(output.props.className).toBe('picker');
    expect(output.props.children[1].props.children.length).toBe(3);
  });

  // Make sure the PhotoGrid component is in here
});

