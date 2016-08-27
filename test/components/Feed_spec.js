import _ from 'lodash';
import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Feed from '../../app/components/Feed';
import { entryObj } from '../test_helper';

function feedSetup() {
  const secondEntryObj = _.assign(
    {},
    entryObj,
    { caption: '' }
  );
  const props = {
    entries: [entryObj, secondEntryObj]
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
  const entries = output.props.children.props.children;

  it('has the className `feed`', () => {
    expect(output.props.className).toBe('feed');
  });

  it('is an unordered list', () => {
    expect(output.props.children.type).toBe('ul');
  });

  it('has two Entry components', () => {
    expect(entries.length).toBe(2);
    _.forEach(entries, (entry) => {
      expect(entry.type).toBeA('function');
      expect(entry.type.toString()).toInclude('Entry');
    });
  });
});
