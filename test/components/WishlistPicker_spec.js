import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import _ from 'lodash';

import WishlistPicker from '../../app/components/WishlistPicker';

function PickerSetup() {
  const props = {
    wishlist: {
      food: {
        value: ''
      },
      litter: {
        value: ''
      },
      toys: {
        value: ''
      }
    },
    category: 'food',
    choices: [
      { value: 'food-a' },
      { value: 'food-b' }
    ]
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<WishlistPicker {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output
  };
}

describe('Component: WishlistPicker', () => {
  const { props, output } = PickerSetup();
  const [legend, choices] = output.props.children;

  it('renders one fieldset', () => {
    expect(output.type).toBe('fieldset');
  });

  it('renders a legend for its fieldset', () => {
    expect(legend.type).toBe('legend');
    expect(legend.props.children).toBe(_.capitalize(props.category));
  });

  it('renders a radio button for each choice', () => {
    const radioCheck = _.map(choices, (choice) => (
      choice.props.children[0].props.type === 'radio'
    ));

    expect(radioCheck.length).toBe(props.choices.length);
    expect(_.every(radioCheck)).toBe(true);
  });
});
