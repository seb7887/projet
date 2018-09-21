import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <div className='pa4 tc'>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            tag='span'
            onClick={this.toggle}
            data-toggle='dropdown'
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="br-100 h3 w3 dib" alt="avatar" />
          </DropdownToggle>
          <DropdownMenu className='b--transparent shadow-3' style={{marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}} right>
            <Link to='/project/new'><DropdownItem>New idea</DropdownItem>
            <DropdownItem>Sign out</DropdownItem></Link>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;
