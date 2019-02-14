import React from 'react';
import { shallow } from 'enzyme';
import Color from '../../client/src/components/Color';

describe('<Color />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Color />);
    expect(wrapper.exists('.color')).toBe(true);
  });
});
