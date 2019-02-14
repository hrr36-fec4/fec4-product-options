import React from 'react';
import { shallow } from 'enzyme';
import Sizes from '../../client/src/components/Sizes';

describe('<Sizes />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<Sizes />);
    expect(wrapper.exists('.sizes-wrapper')).toBe(true);
  });
});
