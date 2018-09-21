import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import SearchBox from './SearchBox';
import ProfileIcon from './ProfileIcon';

const navStyles = {
  header: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '6.5rem',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '1rem',
  }
}

const Navbar = (props) => {
  return (
    <div style={navStyles.header}>
      <Header />
      <div style={navStyles.buttons}>
        <SearchBox />
        <ProfileIcon />
      </div>
    </div>
  );
}

export default Navbar;
