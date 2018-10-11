import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Styles
 */

const Div = styled.div`
  margin: auto;
  margin-right: .5rem;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Input = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #f1f2f1;
  height: 2rem;
  width: 22rem;
  color: inherit;
  font-size: 1rem;
  line-height: 1rem;
  outline: none;
`;


/**
 * Component
 */

class SearchBox extends React.Component {
  handleChange = e => {
    this.props.searchChange(e.target.value);
  };

  render() {
    return (
      <Div>
        <Input
          aria-label="Search"
          type="search"
          placeholder="Search on Projet"
          onChange={this.handleChange}
        />
      </Div>
    );
  }
}

export default SearchBox;
