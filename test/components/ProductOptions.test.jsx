import React from 'react';
import { shallow } from 'enzyme';
import ProductOptions from '../../client/src/components/ProductOptions';

describe('<ProductOptions />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<ProductOptions />);
    expect(wrapper.exists('.productOptions')).toBe(true);
  });
});
