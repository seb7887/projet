import React from "react";
import { connect } from "react-redux";

import { fetchProjects } from "../store/actions/projects";

import Navbar from "./Navbar";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundry";
import ProjectList from "./ProjectList";
import Modal from "./Modal";
import ProjectCard from "./ProjectCard";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProjectOpen: false,
      name: "",
      idea: "",
      features: "",
      keywords: [],
      searchField: ""
    };
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  toggleModal = childProject => {
    this.setState({
      isProjectOpen: !this.state.isProjectOpen,
      name: childProject.name,
      idea: childProject.idea,
      features: childProject.features,
      keywords: childProject.keywords
    });
  };

  onSearchChange = text => {
    this.setState({
      searchField: text
    });
  };

  filteredProjects = () => {
    if (this.state.searchField.length > 0) {
      return this.props.projects.filter(project => {
        return project.keywords.includes(this.state.searchField.toLowerCase());
      });
    }
    return this.props.projects;
  };

  render() {
    const { isProjectOpen, name, idea, features, keywords } = this.state;
    return (
      <div>
        {isProjectOpen && (
          <Modal>
            <ProjectCard
              name={name}
              idea={idea}
              features={features}
              keywords={keywords}
              toggleModal={this.toggleModal}
            />
          </Modal>
        )}
        <Navbar searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <ProjectList
              projects={this.filteredProjects()}
              toggleModal={this.toggleModal}
            />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(
  mapStateToProps,
  { fetchProjects }
)(Home);
