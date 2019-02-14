import React from 'react';
import { shallow } from 'enzyme';
import Title from '../../client/src/components/Title';

describe('<Title />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper.exists('.title-wrapper')).toBe(true);
  });
});
