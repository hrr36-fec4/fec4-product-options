import React from 'react';
import { shallow } from 'enzyme';
import Brand from '../../client/src/components/Brand';

describe('<Brand />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Brand />);
    expect(wrapper.exists('.brand-wrapper')).toBe(true);
  });
});
