import React from "react";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';

import SearchBox from "./SearchBox";
import ProfileIcon from "./ProfileIcon";

import logo from "../images/rocket.svg";

/**
 * Styles
 */

const Nav = styled.nav`
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5.5rem;
  box-shadow: -1px 9px 18px -1px rgba(0, 0, 0, .75);
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: .8rem;
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

const ButtonPannel = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1rem;
`;

/**
 * Component
 */

class Navbar extends React.Component {
  render() {
    const { searchChange } = this.props;
    return (
      <Nav>
        <StyledHeader>
          <IconButton onClick={(e) => this.props.toggleDrawer(true)}>
            <MenuIcon className='material-icons'>menu</MenuIcon>
          </IconButton>
          <Logo src={logo} alt="Projet Home" />
        </StyledHeader>
        <ButtonPannel>
          <SearchBox searchChange={searchChange.bind(this)} />
          <ProfileIcon />
        </ButtonPannel>
      </Nav>
    );
  }
}

export default Navbar;
