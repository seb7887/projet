import React from "react";
import { connect } from "react-redux";

import { fetchProjects } from "../store/actions/projects";

import Navbar from "./Navbar";
import ErrorBoundry from "./ErrorBoundry";
import ProjectList from "./ProjectList";

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

  // Check
  componentDidUpdate(prevProps) {
    console.log('This: ' + this.props.projects.length);
    console.log('Prev: ' + prevProps.projects.length);
    if (prevProps.projects.length !== this.props.projects.length) {
      this.props.fetchProjects();
    }
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
        <Navbar searchChange={this.onSearchChange} />
        <ErrorBoundry>
          <ProjectList projects={this.filteredProjects()} />
        </ErrorBoundry>
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
