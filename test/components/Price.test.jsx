import React from 'react';
import { shallow } from 'enzyme';
import Price from '../../client/src/components/Price';

describe('<Price />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Price />);
    expect(wrapper.exists('.price-wrapper')).toBe(true);
  });
});
