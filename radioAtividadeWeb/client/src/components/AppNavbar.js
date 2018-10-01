import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

class AppNavbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div>
        <Navbar color="dark" expand="sm" className="mb-5" dark>
          <Container>
            <NavbarBrand href="/">RadioAtividade - Rádio Online</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Início</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">A Rádio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Programação</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Galeria</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Contato</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
