import React from "react";
import { connect } from 'react-redux'

import Project from "./Project";

import { removeProject } from '../store/actions/projects';

class ProjectList extends React.Component {
  render() {
    const { projects, toggleModal, removeProject, currentUser } = this.props;
    if (projects.length > 0) {
      return (
        <div>
          {projects.map(project => {
            return (
              <Project
                key={project._id}
                name={project.name}
                idea={project.idea}
                isCorrectUser={currentUser === project.user}
                removeProject={removeProject.bind(this, project.user, project._id)}
                toggleModal={toggleModal.bind(this, project)}
              />
            );
          })}
        </div>
      );
    }
    return <div>No projects</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user.id,
  };
}

export default connect(mapStateToProps, { removeProject })(ProjectList);
