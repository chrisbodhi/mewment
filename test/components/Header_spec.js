import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import _ from 'lodash';

import { HeaderContainer } from '../../app/components/Header';

function headerSetup(uid = '') {
  const props = {
    user: { uid }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<HeaderContainer {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('HeaderContainer', () => {
  describe('for a not-signed-in user', () => {
    it('renders an empty div', () => {
      const { output } = headerSetup();

      expect(output.type).toBe('div');
      expect(output.props).toExcludeKey('children');
    });
  });

  describe('for a signed-in user', () => {
    it('renders a navbar', () => {
      const { output } = headerSetup('123');

      expect(output.type).toBe('nav');
      expect(output.props.className).toInclude('navbar');
      expect(output.props.className).toInclude('navbar-default');
    });

    it('has a navbar that has a logo in it', () => {
      const { output } = headerSetup('123');
      const brandObj = _.first(output.props.children.props.children);
      const logoLink = _.first(brandObj.props.children);
      const logo = _.last(logoLink.props.children);

      expect(logoLink.type).toBeA('function');
      expect(logoLink.props.className).toBe('navbar-brand');
      expect(logoLink.props.to).toBe('/');

      expect(logo.type).toBe('img');
      expect(logo.props.className).toBe('logo');
      expect(logo.props.src).toInclude('logo.png');
    });

    it('has a navbar that also has links in it', () => {
      const { output } = headerSetup('123');
      const links = _.last(output.props.children.props.children);
      const [mainUl, loginBtn] = links.props.children;
      const mainLinks = _.map(mainUl.props.children, l => l.props.children.props.to);

      expect(mainLinks)
        .toInclude('profiles')
        .toInclude('feed')
        .toInclude('matching')
        .toInclude('upload');
      expect(loginBtn.props.children.type).toBe('li');
    });
  });
});
