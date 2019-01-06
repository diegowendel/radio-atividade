import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

import './App.css';

import CarouselNoticias from './components/CarouselNoticias';
import Footer from './screens/Footer';
import MusicPlayer from './components/MusicPlayer';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar fluid collapseOnSelect fixedTop className="navbar-dark">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">RadioAtividade</Link>
            </Navbar.Brand>
            {/* <MusicPlayer /> */}
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/blog">
                <NavItem>Blog</NavItem>
              </LinkContainer>
              <LinkContainer to="/programacao">
                <NavItem>Programação</NavItem>
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
        <section className="section-carousel">
            <CarouselNoticias />
        </section>
        <section className="container section-routes">
          <Routes />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
