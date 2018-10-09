import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import logo from '../images/rocket.svg';

/**
 * Styles
 */

const Block = styled.div`
  margin: auto;
  margin-top: 10%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 380px) and (max-height: 650px) {
    width: 80%;
    margin-top: 30%;
  }
`;

const Icon = styled.img`
  width: 10rem;
  height: 10rem;
  margin: auto;
  margin-bottom: 4rem;
  @media (max-width: 380px) and (max-height: 650px) {
    width: 8rem;
    height: 8rem;
  }
`;

const Form = styled.form`
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  color: #f1f2f1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(241, 242, 241, .5);
  transition: all .3s;

  :focus {
    outline: none;
    border-bottom: 1px solid #f1f2f1;
  }

  @media (max-width: 380px) and (max-height: 650px) {
    font-size: 1rem;
    width: 100%;
  }
`;

const Button = styled.button`
  
`;

/**
 * Component
 */

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "register" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, username, password } = this.state;
    const {
      signUp,
      heading,
      buttonText,
      errors,
      history,
      removeError
    } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <Block>
        <Icon src={logo} alt="logo" />
        <Form onSubmit={this.handleSubmit}>
          <h2>{heading}</h2>
          {errors.message && <div>{errors.message}</div>}
          <Input
            autoComplete="off"
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            required
          />
          {signUp && (
            <div>
              <Input
                autoComplete="off"
                type="text"
                placeholder="Username"
                id="username"
                name="username"
                onChange={this.handleChange}
                value={username}
                required
              />
            </div>
          )}
          <Input
            autoComplete="off"
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            required
          />
          <Button type="submit">
            {buttonText}
          </Button>
        </Form>
      </Block>
    );
  }
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func,
  removeError: PropTypes.func,
  errors: PropTypes.object
};

export default AuthForm;
