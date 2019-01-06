import React, { Component } from 'react';

import TabelaProgramacao from '../../components/TabelaProgramacao';
import './Programacao.css';

class Programacao extends Component {
  render() {
    return (
      <div className="container-fluid Programacao">
        <h1>Programação</h1>
        <h2>Horários e programas exibidos na rádio</h2>
        <h3>Segunda a Sexta</h3>
        <TabelaProgramacao />
        <h3>Fins de semana</h3>
        <TabelaProgramacao />
      </div>
    );
  }
}

export default Programacao;
