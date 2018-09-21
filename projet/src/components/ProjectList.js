import React from "react";
import Project from "./Project";

class ProjectList extends React.Component {
  render() {
    const { projects, toggleModal } = this.props;
    if (projects.length > 0) {
      return (
        <div>
          {projects.map(project => {
            return (
              <Project
                key={project._id}
                name={project.name}
                idea={project.idea}
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

export default ProjectList;
