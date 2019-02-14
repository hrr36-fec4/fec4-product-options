import React from 'react';
import { shallow } from 'enzyme';
import Quantity from '../../client/src/components/Quantity';

describe('<Quantity />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Quantity />);
    expect(wrapper.exists('.quantity-wrapper')).toBe(true);
  });
});
