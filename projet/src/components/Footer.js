import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #f1f2f1;
  cursor: pointer;
`;

class Footer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <Div>
        <p>
          Built by Sebastian Matias Segura. Copyright &copy;2018 by{" "}
          <Link href="https://github.com/seb7887">seb7887</Link>
        </p>
      </Div>
    );
  }
}

export default Footer;
