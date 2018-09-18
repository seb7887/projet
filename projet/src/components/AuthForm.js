import React from 'react';
import PropTypes from 'prop-types';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signUp ? 'register' : 'signin';
    this.props.onAuth(authType, this.state)
      .then(() => {
        this.props.history.push('/');
      }).catch(() => {
        return;
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { email, username, password } = this.state;
    const {
      signUp,
      heading,
      buttonText,
    } = this.props;

    return (
      <div className='auth-page'>
        <h1 className="title">Projet</h1>
        <form onSubmit={this.handleSubmit} className='form'>
          <h2>{heading}</h2>
          <input
            autoComplete='off'
            className='form__input' 
            type='text'
            placeholder='Email'
            id='email'
            name='email'
            onChange={this.handleChange}
            value={email}
            required
          />
          <label htmlFor='email' className='form__label'>Email</label>
          {signUp && (
          <div>
            <input
              autoComplete='off'
              className='form__input'
              type='text'
              placeholder='Username'
              id='username'
              name='username'
              onChange={this.handleChange}
              value={username}
              required
            />
            <label htmlFor='username' className='form__label'>Username</label>
          </div>
          )}
          <input
            autoComplete='off'
            className='form__input'
            type='password'
            placeholder='password'
            id='password'
            name='password'
            onChange={this.handleChange}
            value={password}
            required
          />
          <label htmlFor='password' className='form__label'>Password</label>
          <button
            className='btn--small'
            type='submit'>
            {buttonText}
          </button>
        </form>
      </div>
    )
  }
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  heading: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func, 
};

export default AuthForm;
