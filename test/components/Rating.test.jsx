import React from 'react';
import { shallow } from 'enzyme';
import Rating from '../../client/src/components/Rating';

describe('<Rating />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.exists('.rating-wrapper')).toBe(true);
  });
});
