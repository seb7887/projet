import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import logo from "../images/rocket.svg";
import Button from './Button';
import Footer from "./Footer";
import Home from "./Home";

/**
 * Styles
 */

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: center;
  justify-content: space-evenly;

  @media (max-width: 500px) {
    height: 100vh;
    display: flex;
  }
`;

const LogoDiv = styled.div`
  margin-top: 2rem;
  flex-grow: .5;

  @media (max-width: 1200px) {
    margin-top: 4rem;
    flex-grow: 3;
  }

  @media (max-width: 800px) {
    margin-top: 4rem;
    flex-grow: 2;
  }
`;

const Icon = styled.img`
  width: 12rem;
  height: 12rem;
  margin: auto;
  margin-top: 1.5rem;

  @media (max-width: 380px) and (max-height: 650px) {
    width: 8rem;
    height: 8rem;
  }
`;

const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 6rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1rem;
  font-weight: bold;
  background-image: linear-gradient(135deg, #d2d1d2 0%, #f1f2f1 100%);
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 1200px) {
    font-size: 10rem;
    letter-spacing: 1.5rem;
  }

  @media (max-width: 750px) {
    font-size: 8rem;
    letter-spacing: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 5rem;
    letter-spacing: .5rem;
  }

  @media (max-width: 380px) and (max-height: 650px) {
    font-size: 3.5rem;
    letter-spacing: .3;
  }
`;

const SubTitle = styled.h2`
  font-weight: bold;
  letter-spacing: .1rem;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
  flex-grow: .1;
  justify-content: space-between;
  margin: auto;
  padding: 0rem;

  @media (max-width: 1200px) {
    padding: 1rem;
  }

  @media (max-width: 750px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 500px) {
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: 12rem;
    justify-content: center;
    align-items: strech;
  }

  @media (max-width: 380px) and (max-height: 650px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

/**
 * Component
 */

const MainPage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div>
        <Main>
          <LogoDiv>
            <Icon src={logo} alt='logo' />
            <Title>Projet</Title>
            <SubTitle>Need a project idea? Sign up and get some!</SubTitle>
          </LogoDiv>
          <Box>
            <Link to="/signup">
              <Button text='Sign Up' />
            </Link>
            <Link to="/signin">
              <Button text='Sign In' />
            </Link>
          </Box>
        </Main>
        <Footer />
      </div>
    );
  }
  return <Home />;
};

export default MainPage;
