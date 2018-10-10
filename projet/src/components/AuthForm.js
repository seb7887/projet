import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";

import logo from "../images/rocket.svg";

/**
 * Styles
 */

const Block = styled.div`
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Icon = styled.img`
  width: 16.5rem;
  height: 16.5rem;
  margin: auto;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 1200px) {
    width: 16rem;
    height: 16rem;
  }

  @media (max-width: 500px) {
    width: 10rem;
    height: 10rem;
  }

  @media (max-width: 380px) and (max-height: 650px) {
    width: 8rem;
    height: 8rem;
  }
`;

const Form = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Input = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  color: #f1f2f1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(241, 242, 241, 0.5);
  font-size: 2rem;
  transition: all 0.3s;

  :focus {
    outline: none;
    border-bottom: 1px solid #f1f2f1;
  }

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }

  @media (max-width: 380px) and (max-height: 650px) {
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  margin-top: 1.5rem;
  border: none;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 2.2rem;
  line-height: 2;
  font-weight: bold;
  background: linear-gradient(to right, #f1f2f1 0%, #d2dad2 100%);
  box-shadow: 0 0.25rem 1rem 0.12rem rgba(3, 2, 2, 0.54);

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 380px) and (max-height: 650px) {
    font-size: 1.5rem;
  }
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
          <FormControl>
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
          </FormControl>
          {signUp && (
            <FormControl>
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
            </FormControl>
          )}
          <FormControl>
            <Input
              autoComplete="off"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={password}
              required
            />
          </FormControl>
          <Button type="submit">{buttonText}</Button>
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
