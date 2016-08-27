import _ from 'lodash';
import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Entry from '../../app/components/Entry';

import { entryObj } from '../test_helper';

function entrySetup(obj) {
  const props = {
    entry: obj
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
  describe('An entry with a caption', () => {
    const { output } = entrySetup(entryObj);
    const [image, caption] = output.props.children;

    it('has the type of li', () => {
      expect(output.type).toBe('li');
    });

    it('has `entry` as its classname', () => {
      expect(output.props.className).toBe('entry');
    });

    it('has one image', () => {
      expect(image.type).toBe('img');
      expect(image.props.src).toInclude('https://firebasestorage.googleapis.com');
      expect(image.props.alt.length).toBeGreaterThan(0);
    });

    it('has a caption', () => {
      expect(caption.type).toBe('p');
      expect(caption.props.className).toBe('caption');
      expect(caption.props.children).toBe('this is a caption');
    });
  });

  describe('An entry without any caption', () => {
    const noCaptionEntryObj = _.assign(
      {},
      entryObj,
      { caption: '' }
    );
    const { output } = entrySetup(noCaptionEntryObj);

    it('does not have a paragraph tag', () => {
      console.log('output.props.children', output.props.children);
      expect(_.compact(output.props.children).length).toBe(1);
      expect(output.props.children[0].type).toBe('img');
    });
  });
});
