import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {
        projects.map((project) => {
          return (
            <Project
              key={project._id}
              name={project.name}
              idea={project.idea}
              features={project.features}
              user={project.user}
              onClick={this.toogleModal}
            />
          );
        })
      }
    </div>
  );
}

export default ProjectList;
