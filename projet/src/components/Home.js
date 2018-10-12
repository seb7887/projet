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
      name: "",
      idea: "",
      features: "",
      keywords: [],
      searchField: "",
      left: false,
    };
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projects.length !== this.props.projects.length) {
      this.props.fetchProjects();
    }
  }

  toggleDrawer = (open) => {
    this.setState({
      left: open,
    });
  }

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
    return (
      <div>
        <Navbar 
          searchChange={this.onSearchChange}
          toggleDrawer={this.toggleDrawer}
        />
        <SideSheet open={this.state.left} toggleDrawer={this.toggleDrawer} />
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
