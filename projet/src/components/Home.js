import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
    const { projects } = this.props;
    return (
      <div>
        <div style={homeStyles}>
          <Header />
          <div>
            <SearchBox />
            <Link to='/project/new'>+</Link>
          </div>
        </div>
        <Scroll>
          <ErrorBoundry>
            <ProjectList projects={projects} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  }
}

export default connect(mapStateToProps, { fetchProjects })(Home);
