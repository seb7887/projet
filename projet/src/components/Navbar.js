import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

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
  position: fixed;
  width: 100%;
  height: 5.5rem;
  box-shadow: -1px 9px 18px -1px rgba(0, 0, 0, 0.75);
  transition: all 0.3s;
  top: 0px;
  z-index: 999;

  @media (max-width: 750px) {
    position: fixed;
    top: ${props => props.top || "0px"};
  }
`;

const visible = "0px";
const invisible = "-550px";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.8rem;
`;

const MenuButton = styled(IconButton)`
  @media (min-width: 750px) {
    display: none;
    cursor: default !important;
    pointer-events: none !important;
  }
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

let previous = 0;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (window.scrollY > previous) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
    previous = window.scrollY;
  };

  render() {
    const { searchChange } = this.props;
    return (
      <Nav top={this.state.show ? visible : invisible}>
        <StyledHeader>
          <MenuButton onClick={e => this.props.toggleDrawer(true)}>
            <MenuIcon className="material-icons">menu</MenuIcon>
          </MenuButton>
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
