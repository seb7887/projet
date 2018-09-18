import React from 'react';
import { shallow } from 'enzyme';

import Header from '../components/Header';

describe('Header Component', () => {
  it('expect to render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  })

  it('expect not to be updated', () => {
    const component = shallow(<Header />);
    const shouldUpdate = component.instance().shouldComponentUpdate();
    expect(shouldUpdate).toBe(false);
  })
})
