import React from 'react';
import { shallow } from 'enzyme';
import ShippingOptions from '../../client/src/components/ShippingOptions';

describe('<ShippingOptions />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<ShippingOptions />);
    expect(wrapper.exists('.shippingOptions-wrapper')).toBe(true);
  });
});
