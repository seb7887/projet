import React from 'react';
import { Link } from 'react-router-dom';

import Home from './Home';

const MainPage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="main-page">
        <h1 className="title">Projet</h1>
        <h2>Need a new project idea? Sign up and explore new ideas</h2>
        <div className="main-page__bar">
          <Link to="/signup" className="btn">Sign up</Link>
          <Link to="/signin" className="btn">Sign in</Link>
        </div>
      </div>
    );
  }
  return (
    <Home {...props} />
  );
}

export default MainPage;
