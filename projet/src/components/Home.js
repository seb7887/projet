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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '1rem',
  }
}


class Home extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  
  render() {
    const { projects } = this.props;
    return (
      <div>
        <div style={homeStyles.header}>
          <Header />
          <div style={homeStyles.buttons}>
            <SearchBox />
            <Link to='/project/new' className='f4 white pv2 ph3  dim bg-transparent br2 ba hover-bg-gray hover-white add-btn'>Add</Link>
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
