import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { FullProfileContainer as FullProfile } from '../../app/components/FullProfile';

import { catProfile } from '../test_helper';

function profileSetup(uid) {
  const props = {
    cat: catProfile,
    cats: [catProfile],
    params: { id: '0' },
    user: { uid }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<FullProfile {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Component: FullProfile', () => {
  const { output } = profileSetup('1234');
  const [
    mainImgDiv,
    heading,
    photoGrid,
    profile,
    wishlist
  ] = output.props.children;

  it('renders the main profile photo div', () => {
    expect(mainImgDiv.type).toBe('div');
    expect(mainImgDiv.props.id).toBe('mainImage');
    expect(mainImgDiv.props.children.type).toBe('img');
  });

  it('renders the main profile img', () => {
    const mainImg = mainImgDiv.props.children;
    expect(mainImg.props.alt).toInclude(catProfile.name);
    expect(mainImg.props.src).toBe(catProfile.avatar);
  });

  it('renders a cat\'s top-level info', () => {
    expect(heading.type).toBe('div');
    expect(heading.props.id).toBe('heading');
  });

  it('renders the name in the heading', () => {
    const name = heading.props.children[0];

    expect(name.type).toBe('h1');
    expect(name.props.className).toBe('name');
    expect(name.props.children).toInclude(catProfile.name);
  });

  it('renders the descriptors in the heading', () => {
    const descriptors = heading.props.children[1];

    expect(descriptors.type).toBe('h3');
    expect(descriptors.props.className).toBe('descriptors');

    const [color, age, sex] = descriptors.props.children;

    expect(color.props.className).toBe('color');
    expect(color.props.children).toInclude(catProfile.color);

    expect(age.props.className).toBe('age');
    expect(age.props.children).toInclude(catProfile.age);

    expect(sex.props.className).toBe('sex');
    expect(sex.props.children).toInclude(catProfile.sex);
  });

  // Testing of custom components happens in their respective specs
  it('renders all of the cat\'s photos', () => {
    expect(photoGrid).toExist();
    expect(photoGrid.type).toBeA('function');
  });

  it('renders the cat\'s profile', () => {
    expect(profile.type).toBe('div');
    expect(profile.props.id).toBe('profile');
    expect(profile.props.children).toInclude(catProfile.about);
  });

  // Same
  it('renders the shopping wishlist', () => {
    expect(wishlist).toExist();
    expect(wishlist.type).toBeA('function');
  });
});
