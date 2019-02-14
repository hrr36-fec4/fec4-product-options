import React from 'react';
import { shallow } from 'enzyme';
import ItemId from '../../client/src/components/ItemId';

describe('<ItemId />', () => {
  test('Should exist', () => {
    const wrapper = shallow(<ItemId />);
    expect(wrapper.exists('.itemId-wrapper')).toBe(true);
  });
});
