import React from 'react';

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1>Projet</h1>
      </div>
    );
  }
}

export default Header;
