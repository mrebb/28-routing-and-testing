import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Landing from '../../../../src/components/app/landing/index';

describe('landing component', () => {
  it('is alive at application start', () => {
    let landing = shallow(<Landing/>);
    expect(landing.find('main').exists()).toBeTruthy();
    expect(landing.find('Footer').exists()).toBeTruthy();
  });
});


describe('<Landing/> (Snapshot Test)', () => {
  it('renders right', () => {
    const component = renderer.create(
      <Landing />
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

  });
});
