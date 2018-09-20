import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProjects } from '../store/actions/projects';

import Header from './Header';
import SearchBox from './SearchBox';
import ProfileIcon from './ProfileIcon';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import ProjectList from './ProjectList';
import Modal from './Modal';
import ProjectCard from './ProjectCard';

const homeStyles = {
  header: {
    display: 'flex',
    position: 'relative',
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
  constructor(props) {
    super(props);
    this.state = {
      isProjectOpen: false,
      name: '',
      idea: '',
      features: '',
      keywords: [],
    }
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  toggleModal = (childProject) => {
    console.log(childProject);
    this.setState({
      isProjectOpen: !this.state.isProjectOpen,
      name: childProject.name,
      idea: childProject.idea,
      features: childProject.features,
      keywords: childProject.keywords,
    });
  }
  
  render() {
    const { isProjectOpen, name, idea, features, keywords } = this.state;
    const { projects } = this.props;
    return (
      <div>
        { isProjectOpen &&
          <Modal>
            <ProjectCard 
              name={name}
              idea={idea}
              features={features}
              keywords={keywords}
              toggleModal={this.toggleModal}
            />
          </Modal>
        }
        <div style={homeStyles.header}>
          <Header />
          <div style={homeStyles.buttons}>
            <SearchBox />
            <Link to='/project/new' className='f4 white pv2 ph3  dim bg-transparent br2 ba hover-bg-gray hover-white add-btn'>Add</Link>
            <ProfileIcon />
          </div>
        </div>
        <Scroll>
          <ErrorBoundry>
            <ProjectList projects={projects} toggleModal={this.toggleModal}/>
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
