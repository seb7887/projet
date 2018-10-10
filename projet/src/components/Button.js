import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: inline-block;
  margin: 1rem;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 4rem 1rem 4rem;
  border: none;
  background: linear-gradient(to right, #f1f2f1 0%, #d2dad2 100%);
  color: #313131;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    opacity: 0.5;
  }

  @media (max-width: 1200px) {
    margin: 0;
    padding: 1.5rem 4rem 1.5rem 4rem;
    font-size: 2.5rem;
  }

  @media (max-width: 750px) {
    font-size: 4.5rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    width: 90%;
    margin-top: 0.5rem;
  }

  @media (max-width: 380px) and (max-height: 650px) {
    font-size: 2rem;
    margin-top: 0.5rem;
  }
`;

const Button = props => {
  return <Btn>{props.text}</Btn>;
};

export default Button;
