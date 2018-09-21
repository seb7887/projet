import React from 'react';
import { connect } from 'react-redux';

import { fetchProjects } from '../store/actions/projects';

import Navbar from './Navbar';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import ProjectList from './ProjectList';
import Modal from './Modal';
import ProjectCard from './ProjectCard';

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
        <Navbar />
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
