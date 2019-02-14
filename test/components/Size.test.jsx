import React from 'react';
import { shallow } from 'enzyme';
import Size from '../../client/src/components/Size';

describe('<Size />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Size />);
    expect(wrapper.exists('option')).toBe(true);
  });
});
