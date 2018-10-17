import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

/**
 * Styles
 */

const colorBase = '#f1f2f1';
const colorDone = '#00c896';
const colorDelete = '#df8875';
const marginPanel = '2rem';

const Nav = styled.nav`
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  height: 5.5rem;
  box-shadow: -1px 9px 18px -1px rgba(0, 0, 0, .75);
  top: 0;
  z-index: 999;
`;

const Back = styled.i`
  color: inherit;
  font-size: 3.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  transition: all .3s;

  :hover {
    opacity: .5;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const NavPanel = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-right: 1rem;

  @media (min-width: 750px) {
    display: none;
  }
`;

const Container = styled.div`
  margin: auto;
  margin-top: 9rem;
  width: 100%;
  display: grid;
  grid-template-columns: 10vw 80vw;
  grid-template-rows: 18vh 80vh;
  grid-template-areas:
    "name name"
    "sidebar content";

  @media (max-width: 750px) {
    margin-top: 6.5rem;
    grid-template-columns: 80vw;
    grid-template-rows: 7vh 50vh;
    grid-template-areas:
      "name name"
      "content content";
  }
`;

const Panel = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: fixed;

  @media (max-width: 750px) {
    display: none;
  }
`;

const Icon = styled.i`
  margin-bottom: ${props => props.margin};
  font-size: 3rem;
  color: ${props => props.color};
  cursor: pointer;
  opacity: .75;
  transition: all .3s;

  :hover {
    opacity: 1;
  }
`;

const Name = styled.div`
  grid-area: name;
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: 1.5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;

  @media (max-width: 750px) {
    font-size: 2.5rem;
  }
`;

const Content = styled.div`
  grid-area: content;
  font-size: 2rem;
  word-wrap: break-word;

  @media (max-width: 750px) {
    padding: 1rem;
    font-size: 1.2rem;
  }
`;

/**
 * Component 
 */

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  handleDone = () => {
    this.setState({ done: !this.state.done });
  }
  
  render() {
    return (
      <div>
        <Nav>
          <StyledLink to="/">
            <Back className="material-icons">arrow_back</Back>
          </StyledLink>
          <NavPanel>
            <Icon 
              className="material-icons"
              onClick={this.handleDone}
              color={colorBase}
              margin='0'
            >
              { this.state.done ? 'bookmark' : 'bookmark_border' }
            </Icon>
            <Icon
              className="material-icons"
              color={colorBase}
              margin='0'
            >
              delete_outline
            </Icon>
          
          </NavPanel>
        </Nav>
        <Container>
          <Panel>
            <Icon 
              className="material-icons"
              onClick={this.handleDone}
              color={colorDone}
              margin={marginPanel}
            >
              { this.state.done ? 'bookmark' : 'bookmark_border' }
            </Icon>
            <Icon
              className="material-icons"
              color={colorDelete}
              margin={marginPanel}
            >
              delete_outline
            </Icon>
          </Panel>
          <Name>Name</Name>
          <Content>
            <p><strong>Idea:</strong> blabla blablablabal</p>
            <p><strong>Features:</strong>Lorem ipsum dolor sit amet, brute mediocritatem no ius, ei sit dictas alienum. Eripuit volumus intellegam mel ea. Has ut dicta molestiae honestatis. Qui facer congue ei, mei no dissentiet comprehensam. Vero altera ei cum.
            Sed equidem indoctum ut, id quis consul legimus quo, duo quod mazim persius ei. Alia viderer ancillae ut mea, mel cu amet qualisque erroribus. Insolens voluptaria necessitatibus in mea, ne usu animal utamur vituperata. Te mea liber possit, nihil everti at est, possit oporteat ut mei. Eos scripta dolores disputationi eu, an stet commodo habemus sea, luptatum forensibus te nec. Per meis graeci suscipiantur et, sit putant expetenda te.
            Ut eos timeam equidem. Ut vel mutat facilis, mel quidam concludaturque ea, sed in labores democritum sadipscing. Eu est appareat indoctum, vel utamur legendos ad. Oratio nostro ceteros ne mei. Ius cu phaedrum liberavisse consectetuer, in wisi iuvaret aliquam eos, quo quas gloriatur ex.
            Legimus disputationi per ad. Munere periculis ad sea, ad exerci integre evertitur sit. Simul tritani albucius id vix, nostro vivendo vel ex. Cu quo reque rationibus, nonumy mucius equidem cum ex, at laudem expetenda cotidieque sit. Clita feugait no est, ea purto scribentur vim, solum nemore detracto ex sed.
            </p>
          </Content>
        </Container>
      </div>
    );
  }
}

export default ProjectCard;
