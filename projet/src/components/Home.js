import React from "react";
import { connect } from "react-redux";

import { fetchProjects } from "../store/actions/projects";

import Navbar from "./Navbar";
import SideSheet from "./SideSheet";
import ErrorBoundry from "./ErrorBoundry";
import ProjectList from "./ProjectList";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      left: false
    };
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  toggleDrawer = open => {
    this.setState({
      left: open
    });
  };

  onSearchChange = text => {
    this.setState({
      searchField: text
    });
  };

  getSingleProject = (project) => {
    this.props.getSingleProject(project);
  }

  filteredProjects = () => {
    if (this.state.searchField.length > 0) {
      return this.props.projects.filter(project => {
        return project.keywords.includes(this.state.searchField.toLowerCase());
      });
    }
    return this.props.projects;
  };

  randomProject = () => {
    let index = Math.floor(Math.random() * this.props.projects.length);
    let randomProject = this.props.projects[index];
    this.props.randomProject(randomProject);
  }

  render() {
    return (
      <div>
        <Navbar
          searchChange={this.onSearchChange}
          toggleDrawer={this.toggleDrawer}
          randomProject={this.randomProject}
        />
        <SideSheet 
          open={this.state.left}
          toggleDrawer={this.toggleDrawer}
          randomProject={this.randomProject}
        />
        <ErrorBoundry>
          <ProjectList 
            projects={this.filteredProjects()}
            getSingleProject={this.getSingleProject}
          />
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
