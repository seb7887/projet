import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";

import MainPage from "../components/MainPage";
import AuthForm from "../components/AuthForm";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  getSingleProject = (proj) => {
    this.setState({ project: proj });
  }
  
  render() {
    const { authUser, errors, currentUser, removeError } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              <MainPage
                currentUser={currentUser}
                getSingleProject={this.getSingleProject}
                {...props} 
              />
            }
          />
          <Route
            exact
            path="/signin"
            render={props => {
              return (
                <AuthForm
                  removeError={removeError}
                  errors={errors}
                  onAuth={authUser}
                  buttonText="Sign in"
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              return (
                <AuthForm
                  removeError={removeError}
                  errors={errors}
                  onAuth={authUser}
                  signUp
                  buttonText="Sign up"
                  {...props}
                />
              );
            }}
          />
          <Route 
            exact
            path="/project/:id"
            render={props => {
              return (
                <ProjectCard
                  isCorrectUser={currentUser.user.id == this.state.project.user}
                  project={this.state.project}
                  {...props}
                />
              );
            }} 
          />
          <Route path="/project/new" component={withAuth(ProjectForm)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { authUser, removeError }
  )(Main)
);
