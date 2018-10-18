import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";

import { logout } from "../store/actions/auth";

/**
 * Styles
 */

const Sheet = styled.div`
  height: 100vh;
  width: 18rem;
  background: linear-gradient(to right, #000000, #313131);

  @media (min-width: 500px) {
    width: 25rem;
  }

  @media (min-width: 650px) {
    width: 35rem;
  }
`;

const AvatarDiv = styled.div`
  background: black;
  height: 25%;
  box-shadow: -1px 4px 12px -1px rgba(0, 0, 0, 0.75);
  padding: 1rem;
  margin: auto;
`;

const StyledAvatar = styled(Avatar)`
  background: #464646;
  width: 5rem !important;
  height: 5rem !important;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const Icon = styled.i`
  color: #f1f2f1;
  font-size: 3rem;
`;

const Username = styled.h2`
  font-size: 2rem;
  color: inherit;
  font-family: inherit;
  font-weight: bold;
  margin-top: 0.8rem;
  margin-left: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const Items = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
`;

const Item = styled.button`
  background: transparent;
  color: inherit !important;
  font-family: inherit;
  font-size: 1.5rem;
  text-decoration: none !important;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }
`;

/**
 * Component
 */

class SideSheet extends React.Component {
  toggleDrawer = open => {
    this.props.toggleDrawer(open);
  };

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { open } = this.props;
    const sideList = (
      <Sheet>
        <AvatarDiv>
          <StyledAvatar>
            <Icon className="material-icons">person</Icon>
          </StyledAvatar>
          <Username>Welcome</Username>
        </AvatarDiv>
        <Items>
          <List>
            <StyledLink to="/project/new">
              <Item>New idea</Item>
            </StyledLink>
          </List>
          <Divider />
          <List>
            <Item onClick={this.logout}>Sign out</Item>
          </List>
          <Divider />
        </Items>
      </Sheet>
    );

    return (
      <SwipeableDrawer
        open={open}
        onClose={e => this.toggleDrawer(false)}
        onOpen={e => this.toggleDrawer(true)}
      >
        <div>{sideList}</div>
      </SwipeableDrawer>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(SideSheet);
