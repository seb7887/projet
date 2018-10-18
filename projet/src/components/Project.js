import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

/**
 * Styles
 */

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: black !important;
  box-shadow: 0.25rem 0.8rem 1.2rem rgba(0, 0, 0, 0.58) !important;
  padding: 0.5rem;
  transition: all 0.3s;

  :hover {
    opacity: 0.54;
  }

  @media (max-width: 500px) {
    margin: 0 1rem 1rem 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const Title = styled(Typography)`
  color: inherit !important;
  font-family: inherit !important;
  font-weight: bold !important;
  font-size: 2rem !important;
  text-transform: uppercase;
  text-align: center;
  word-wrap: break-word !important;
`;

const Description = styled(Typography)`
  color: inherit !important;
  font-family: inherit !important;
  font-size: 1.5rem !important;
  word-wrap: break-word !important;

  @media (max-width: 500px) {
    font-size: 1.2rem !important;
  }
`;

const Actions = styled(CardActions)`
  flex-grow: 1;
`;

const Icon = styled.i`
  align-self: flex-end;
  transition: all 0.3s;
  opacity: 0;

  :hover {
    color: #df8875;
    opacity: 1;
  }

  @media (max-width: 500px) {
    opacity: 1;
    color: #df8875;
  }
`;

/**
 * Component
 */

const Project = props => {
  const { project, removeProject, isCorrectUser, getSingleProject } = props;
  let path = `/user/project/${project._id}`;
  return (
    <StyledCard>
      <StyledLink to={path}>
        <Content onClick={() => getSingleProject({ project }) }>
          <Title gutterBottom variant="headline" component="h2">
            {project.name}
          </Title>
          <Description component="p">{project.idea}</Description>
        </Content>
      </StyledLink>
      <Actions>
        {isCorrectUser && (
          <Icon onClick={removeProject} className="material-icons">
            delete_outline
          </Icon>
        )}
      </Actions>
    </StyledCard>
  );
};

export default Project;
