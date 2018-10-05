import React from 'react';
import styled from 'styled-components'

const Btn = styled.button`
  display: inline-block;
  margin: 1rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 4rem 1rem 4rem;
  border: none;
  background: linear-gradient(to right, #d2dad2 0%, #f1f2f1 100%);
  color: #313131;
  cursor: pointer;
  transition: all .2s;

  :hover {
    opacity: .5;
  }

  @media (max-width: 750px) {
    font-size: 4.5rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
    width: 90%;
  }

  @media (max-width: 380px) and (max-height: 650px) {
    font-size: 2rem;
  }
`;

const Button = (props) => {
  return (
    <Btn>{props.text}</Btn>
  );
}

export default Button;