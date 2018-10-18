import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { logout } from "../store/actions/auth";

/**
 * Styles
 */

const Div = styled.div`
  margin: auto;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  @media (max-width: 750px) {
    display: none;
  }
`;

const StyledAvatar = styled(Avatar)`
  background: #464646;
`;

const Icon = styled.i`
  color: #f1f2f1;
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

/**
 * Component
 */

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  handleClick = e => {
    this.setState({
      anchorEl: e.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <Div>
        <IconButton
          onClick={this.handleClick}
          aria-label="More"
          aria-owns={anchorEl ? "simple-menu" : null}
        >
          <StyledAvatar>
            <Icon className="material-icons">person</Icon>
          </StyledAvatar>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <StyledLink to="/project/new">New idea</StyledLink>
          </MenuItem>
          <MenuItem onClick={this.logout}>Sign out</MenuItem>
        </Menu>
      </Div>
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
)(ProfileIcon);
