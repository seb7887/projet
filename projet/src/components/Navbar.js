import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import SearchBox from "./SearchBox";
import SearchIcon from "./SearchIcon";
import ProfileIcon from "./ProfileIcon";

const navStyles = {
  header: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "6.5rem"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    marginRight: "1rem"
  }
};

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

const ButtonPannel = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1rem;

  @media (max-width: 750px) {
    align-self: flex-end;
  }
`;

const LinkIcon = styled(Link)`
  margin: auto;
  margin-left: .2rem;
  margin-right .2rem;

  @media (min-width: 750px) {
    display: none;
  }
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
          <LinkIcon to="/search">
            <SearchIcon />
          </LinkIcon>
          <ProfileIcon />
        </ButtonPannel>
      </Nav>
    );
  }
}

export default Navbar;
