import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => {
  return (
    <div>
      {
        projects.map((project, i) => {
          return (
            <Project
              key={i}
              name={project[i].name}
              idea={project[i].idea}
              features={project[i].features}
              user={project[i].user}
            />
          );
        })
      }
    </div>
  );
}

export default ProjectList;
