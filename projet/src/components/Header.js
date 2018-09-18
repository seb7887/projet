import React from 'react';

import Logo from '../images/rocket.svg';

const headerStyles = {
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
};

const h1Styles = {
  textTransform: 'uppercase',
  fontSize: '2rem',
  letterSpacing: '.5rem',
  marginLeft: '2rem',
  marginTop: '1rem',
};

const logoStyles = {
  height: '4rem',
  display: 'inline-block',
  filter: 'opacity(.5) drop-shadow(0 0 0 #ffffff)',
};

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div style={headerStyles}>
        <img src={Logo} alt='Projet Home' style={logoStyles} />
        <h1 style={h1Styles}>Projet</h1>
      </div>
    );
  }
}

export default Header;
