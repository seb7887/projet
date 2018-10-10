import React from "react";
import styled from "styled-components";

import logo from "../images/rocket.svg";

/**
 * Styles
 */

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const Logo = styled.img`
  height: 4rem;
  display: inline-block;
  filter: opacity(0.5) drop-shadow(0 0 0 #ffffff);
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
        <Logo src={logo} alt="Projet Home" />
      </StyledHeader>
    );
  }
}

export default Header;
