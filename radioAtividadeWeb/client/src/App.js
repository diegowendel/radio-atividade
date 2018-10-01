import React, { Component } from 'react';
import {
  Container,
  Jumbotron
} from 'reactstrap';

import AppCarousel from './components/AppCarousel';
import AppNavbar from './components/AppNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Jumbotron className="text-xs-center">
          <Container fluid style={{width: '800px', height: '100%'}}>
            <AppCarousel />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
