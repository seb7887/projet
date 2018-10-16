import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Project from "./Project";

import { removeProject } from "../store/actions/projects";

/**
 * Styles
 */

const Grid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

/**
 * Component
 */

class ProjectList extends React.Component {  
  render() {
    const { projects, removeProject, currentUser } = this.props;
    if (projects.length > 0) {
      return (
        <Grid>
          {projects.map(project => {
            return (
              <Project
                key={project._id}
                name={project.name}
                idea={project.idea}
                isCorrectUser={currentUser === project.user}
                removeProject={removeProject.bind(
                  this,
                  project.user,
                  project._id
                )}
              />
            );
          })}
        </Grid>
      );
    }
    return <div>No projects</div>;
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user.id
  };
};

export default connect(
  mapStateToProps,
  { removeProject }
)(ProjectList);
