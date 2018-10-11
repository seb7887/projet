import React from "react";
import styled from "styled-components";

import Header from "./Header";
import SearchBox from "./SearchBox";
import ProfileIcon from "./ProfileIcon";

/**
 * Styles
 */

const Nav = styled.nav`
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 5.5rem;
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
        <Header />
        <ButtonPannel>
          <SearchBox searchChange={searchChange.bind(this)} />
          <ProfileIcon />
        </ButtonPannel>
      </Nav>
    );
  }
}

export default Navbar;
