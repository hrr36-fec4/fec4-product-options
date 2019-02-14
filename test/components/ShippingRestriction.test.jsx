import React from 'react';
import { shallow } from 'enzyme';
import ShippingRestriction from '../../client/src/components/ShippingRestriction';

describe('<ShippingRestriction />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<ShippingRestriction />);
    expect(wrapper.exists('.shippingRestriction-wrapper')).toBe(true);
  });
});
