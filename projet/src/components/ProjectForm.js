import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from 'styled-components';
import FormControl from "@material-ui/core/FormControl";

import { postNewProject } from "../store/actions/projects";

/**
 * Styles
 */

const Nav = styled.nav`
  background: black;
  height: 5.5rem;
  box-shadow: -1px 9px 18px -1px rgba(0, 0, 0, .75);
`;

const Back = styled.i`
  color: inherit;
  font-size: 3.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  transition: all .3s;

  :hover {
    opacity: .5;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const Block = styled.div`
  margin: auto;
  margin-top: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
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

const Field = styled.textarea`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: transparent;
  color: #f1f2f1;
  border: 1px solid rgba(241, 242, 241, .5);
  font-size: 1.5rem;
  transition: all .3s;

  :focus {
    outline: none;
    border: 1px solid #f1f2f1;
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

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      idea: "",
      features: "",
      keywords: ""
    };
  }

  handleNewProject = event => {
    event.preventDefault();
    this.props.postNewProject({
      name: this.state.name,
      idea: this.state.idea,
      features: this.state.features,
      keywords: this.state.keywords
    });
    this.setState({
      name: "",
      idea: "",
      features: "",
      keywords: ""
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Nav>
          <StyledLink to="/">
            <Back className="material-icons">arrow_back</Back>
          </StyledLink>
        </Nav>
        <Block>
          <Form onSubmit={this.handleNewProject}>
            {this.props.errors.message && <div>{this.props.errors.message}</div>}
            <FormControl>
              <Input
                autoComplete="off"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                required
              />
            </FormControl>
            <FormControl>
              <Input
                autoComplete="off"
                type="text"
                placeholder="Idea"
                id="idea"
                name="idea"
                value={this.state.idea}
                onChange={e => this.setState({ idea: e.target.value })}
                required
              />
            </FormControl>
            <FormControl>
              <Field
                autoComplete="off"
                autoCapitalize="sentences"
                maxLength="800"
                rows="8"
                type="text"
                placeholder="Features"
                id="features"
                name="features"
                value={this.state.features}
                onChange={e => this.setState({ features: e.target.value })}
                required
              />
            </FormControl>
            <FormControl>
              <Input
                autoComplete="off"
                type="text"
                placeholder="Keywords (separate with commas)"
                id="keywords"
                name="keywords"
                value={this.state.keywords}
                onChange={e =>
                  this.setState({ keywords: e.target.value.replace(" ", "") })
                }
                style={{ fontSize: '1.5rem'}}
                required
              />
            </FormControl>
            <Button type="submit">Add Idea</Button>
          </Form>
        </Block>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { postNewProject }
)(ProjectForm);
