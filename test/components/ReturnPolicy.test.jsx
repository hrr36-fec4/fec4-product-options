import React from 'react';
import { shallow } from 'enzyme';
import ReturnPolicy from '../../client/src/components/ReturnPolicy';

describe('<ReturnPolicy />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<ReturnPolicy />);
    expect(wrapper.exists('.returnPolicy-wrapper')).toBe(true);
  });
});
