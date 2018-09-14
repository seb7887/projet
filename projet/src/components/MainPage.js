import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = ({ currentUser }) => {
  return(
      <div>
        <h1>Projet</h1>
        <h4>Need a new project idea?</h4>
        <Link to="/">Sign up</Link>
        <Link to="/">Sign in</Link>
      </div>
  );
}

export default MainPage;
