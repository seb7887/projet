import React from "react";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from "../images/rocket.svg";

/**
 * Styles
 */

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const MenuIcon = styled.i`
  color: #f1f2f1;
  font-size: 3rem;

  @media (min-width: 750px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 4rem;
  display: inline-block;
  filter: opacity(0.5) drop-shadow(0 0 0 #ffffff);

  @media (max-width: 750px) {
    display: none;
  }
`;

/**
 * Component
 */

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  
  render() {
    return (
      <StyledHeader>
        <IconButton>
          <MenuIcon className='material-icons'>menu</MenuIcon>
        </IconButton>
        <Logo src={logo} alt="Projet Home" />
      </StyledHeader>
    );
  }
}

export default Header;
