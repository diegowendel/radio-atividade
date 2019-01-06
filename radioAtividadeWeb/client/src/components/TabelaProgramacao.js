import React from 'react';
import { Table } from 'react-bootstrap';

const TabelaProgramacao = () => {
  return (
    <Table bordered condensed hover responsive striped>
      <thead className="center-text">
        <tr>
          <th>Horário</th>
          <th>Programação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>00:00 até 02:00</td>
          <td>Lista de músicas</td>
        </tr>
        <tr>
          <td>02:00 até 06:00</td>
          <td>As melhores de todos os tempos</td>
        </tr>
        <tr>
          <td>06:00 até 12:00</td>
          <td>Mundo da música</td>
        </tr>
        <tr>
          <td>12:00 até 18:00</td>
          <td>Som mix</td>
        </tr>
        <tr>
          <td>18:00 até 00:00</td>
          <td>Programação normal</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TabelaProgramacao;
