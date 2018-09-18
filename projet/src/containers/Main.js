import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../store/actions/auth';


import MainPage from '../components/MainPage';
import AuthForm from '../components/AuthForm';


const Main = (props) => {
  const { authUser, currentUser } = props;
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          render={props => <MainPage currentUser={currentUser} {...props} /> }
        />
        <Route
          exact path='/signin'
          render={(props) => {
            return (
              <AuthForm
                onAuth={authUser}
                buttonText='Sign in'
                heading='Welcome Back!'
                {...props}
              />
            )
          }}
        />
        <Route
          exact path='/signup'
          render={(props) => {
            return (
              <AuthForm
                onAuth={authUser}
                signUp
                buttonText='Sign up'
                heading='Join Projet today'
                {...props}
              />
            )
          }}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));
