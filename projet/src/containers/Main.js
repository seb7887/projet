import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';


import MainPage from '../components/MainPage';
import AuthForm from '../components/AuthForm';

const Main = (props) => {
  const { authUser } = props;
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          render={props => <MainPage {...props} /> }
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

export default Main;
