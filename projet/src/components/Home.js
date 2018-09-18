import React from 'react';

import { fetchProjects } from '../store/actions/projects';

import Header from './Header';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import ProjectList from './ProjectList';

const homeStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  
  render() {
    return (
      <div>
        <div style={homeStyles}>
          <Header />
          <SearchBox />
        </div>
        <Scroll>
          <ErrorBoundry>
            <ProjectList />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default Home;
