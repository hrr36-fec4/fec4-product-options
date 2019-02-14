import React from 'react';
import { shallow } from 'enzyme';
import FreeShipping from '../../client/src/components/FreeShipping';

describe('<FreeShipping />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<FreeShipping />);
    expect(wrapper.exists('.freeShipping-wrapper')).toBe(true);
  });
});
