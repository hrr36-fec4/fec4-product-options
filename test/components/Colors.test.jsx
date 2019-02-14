import React from 'react';
import { shallow } from 'enzyme';
import Colors from '../../client/src/components/Colors';

describe('<Colors />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Colors />);
    expect(wrapper.exists('.colors-wrapper')).toBe(true);
  });
});
