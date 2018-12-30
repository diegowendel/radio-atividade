import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './App.css';

import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">RadioAtividade</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/radio">
                <NavItem>A Rádio</NavItem>
              </LinkContainer>
              <LinkContainer to="/programacao">
                <NavItem>Programação</NavItem>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavItem>Blog</NavItem>
              </LinkContainer>
              <LinkContainer to="/galeria">
                <NavItem>Galeria</NavItem>
              </LinkContainer>
              <LinkContainer to="/contato">
                <NavItem>Contato</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
