import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Project from "./Project";
import Loader from './Loader';

import { removeProject } from "../store/actions/projects";

/**
 * Styles
 */

const Grid = styled.div`
  padding: 1rem;
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const Load = styled.div`
  margin-top: 18rem;
  display: flex;
  justify-content: center;
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
    return <Load><Loader /></Load>
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
