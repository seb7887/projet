import React from "react";
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

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
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      right: false,
      bottom: false,
      left: false,
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open,
    })
  }
  
  render() {
    return (
      <StyledHeader>
        <IconButton onClick={this.toggleDrawer('left', true)}>
          <MenuIcon className='material-icons'>menu</MenuIcon>
        </IconButton>
        <Logo src={logo} alt="Projet Home" />
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div>
            <div>Hello</div>
            <Divider />
            <div>World</div>
          </div>
        </Drawer>
      </StyledHeader>
    );
  }
}

export default Header;
