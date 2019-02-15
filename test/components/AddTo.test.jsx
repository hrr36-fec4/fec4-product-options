import React from 'react';
import { shallow } from 'enzyme';
import AddTo from '../../client/src/components/AddTo';

describe('<AddTo />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<AddTo />);
    expect(wrapper.exists('.addTo-wrapper')).toBe(true);
  });
});
