import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { logout } from "../store/actions/auth";

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  logout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag="span"
            onClick={this.toggle}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <Avatar>S</Avatar>
          </DropdownToggle>
          <DropdownMenu
            className="b--transparent shadow-3"
            style={{
              marginTop: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.5)"
            }}
            right
          >
            <Link to="/project/new">
              <DropdownItem>New idea</DropdownItem>
              <DropdownItem onClick={this.logout}>Sign out</DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </div>
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
