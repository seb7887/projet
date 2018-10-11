import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

/**
 * Styles
 */

const Nav = styled.nav`
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 6.5rem;
`;

const BackLink = styled(Link)`
  margin: auto;
  margin-left: .5rem;
  margin-right: .5rem;
`;

const Back = styled.i`
  color: #f1f2f1;
  margin: auto;
  margin-left: .5rem;
  font-size: 3rem;
  transition: all .3s;

  :hover {
    opacity: .5;
  }
`;

const Div = styled.div`
  margin: auto;
  margin-left: 1rem;
`;

const Input = styled.input`
  background: none;
  border: none;
  height: 2rem;
  width: 100%;
  color: inherit;
  font-size: 1.5rem;
  line-height: 1rem;
  outline: none;
`;

/**
 * Component
 */

class Search extends React.Component {
  handleChange = e => {
    console.log(e.target.value);
  }

  render() {
    return (
      <Nav>
        <BackLink to="/">
          <Back className='material-icons'>arrow_back</Back>
        </BackLink>
        <Div>
          <Input
            arial-label="Search"
            type="search"
            placeholder="Search on Projet"
            onChange={this.handleChange}
          />
        </Div>
      </Nav>
    );
  }
}

export default Search;
