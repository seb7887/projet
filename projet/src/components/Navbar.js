import React from "react";
import styled from "styled-components";

import Header from "./Header";
import SearchBox from "./SearchBox";
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

/**
 * Component
 */

class Navbar extends React.Component {
  render() {
    const { searchChange } = this.props;
    return (
      <Nav>
        <Header />
        <div style={navStyles.buttons}>
          <SearchBox searchChange={searchChange.bind(this)} />
          <ProfileIcon />
        </div>
      </Nav>
    );
  }
}

export default Navbar;
