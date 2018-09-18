import React from 'react';

import Header from './Header';
import SearchBox from './SearchBox';

const homeStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

class Home extends React.Component {
  render() {
    return (
      <div style={homeStyles}>
        <Header />
        <SearchBox />
      </div>
    );
  }
}

export default Home;
