import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { ProfileContainer, CatProfiles } from '../../app/components/Profile';
import { catProfile } from '../test_helper';

function profileSetup(uid) {
  const props = {
    cats: [],
    user: { uid }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<ProfileContainer {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

function catSetup() {
  const props = {
    cats: [catProfile]
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<CatProfiles {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Components', () => {
  describe('ProfileContainer', () => {
    it('should render a div containing three elements for a signed-in user', () => {
      const { output } = profileSetup('1234');
      expect(output.type).toBe('div');
      expect(output.props.children.length).toBe(3);

      const [section, hr, Link] = output.props.children;
      expect(section.props.className).toBe('grid');
      expect(Link.props.to).toBe('/profiles/add');
      expect(hr.type).toBe('hr');
    });

    it('should ask an anon user to sign in', () => {
      const { output } = profileSetup('');
      expect(output.type).toBe('div');
      expect(output.props.children).toBe('Sign in to access');
    });
  });

  describe('CatProfiles', () => {
    const { output } = catSetup();
    it('should contain an unordered list', () => {
      expect(output.type).toBe('ul');
    });

    it('should contain just one cat', () => {
      expect(output.props.children.length).toBe(1);
    });

    it('should contain the correct name, age, sex, color, about, and avatar url', () => {
      const catLi = output.props.children[0].props.children.props.children;
      expect(catLi.length).toBe(7);

      expect(catLi[0].props.children.props.children).toInclude('Qwerty');
      expect(catLi[1].props.children).toInclude('1');
      expect(catLi[2].props.children).toInclude('Spayed');
      expect(catLi[3].props.children).toInclude('Black');
      expect(catLi[4].props.children).toInclude('Stinky');
      expect(catLi[5].props.src).toBe('http://bit.ly/1rdk9Us');
    });
  });
});
