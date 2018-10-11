import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";

import MainPage from "../components/MainPage";
import AuthForm from "../components/AuthForm";
import ProjectForm from "../components/ProjectForm";
import Search from "../components/Search";

const Main = props => {
  const { authUser, errors, currentUser, removeError } = props;
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <MainPage currentUser={currentUser} {...props} />}
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
          path="/search"
          render={() => {
            return (
              <Search />
            );
          }}
        />
        <Route path="/project/new" component={withAuth(ProjectForm)} />
      </Switch>
    </div>
  );
};

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
