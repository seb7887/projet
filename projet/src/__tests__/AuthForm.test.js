import React from 'react';
import { shallow, mount, render } from 'enzyme';

import AuthForm from '../components/AuthForm';

describe('AuthForm Component', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<AuthForm />).find('form.form').exists()).toBe(true);
  })

  it('renders an email input', () => {
    expect(shallow(<AuthForm />).find('#email').length).toEqual(1);
  })

  it('renders a password input', () => {
    expect(shallow(<AuthForm />).find('#password').length).toEqual(1);
  })

  it('should respond to change event', () => {
    const wrapper = shallow(<AuthForm />);
    wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'pepe@lepu.com' }});
    expect(wrapper.state('email')).toEqual('pepe@lepu.com');
  })

  it('should responde to submit event', () => {
    const buttonWrapper = shallow(<AuthForm />);
    const fn = buttonWrapper.instance().handleSubmit();
    buttonWrapper.find('.btn--small').simulate('submit');
    expect(fn).toBeCalled();
  })
})