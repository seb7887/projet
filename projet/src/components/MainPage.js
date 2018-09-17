import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = ({ currentUser }) => {
  return(
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

export default MainPage;
