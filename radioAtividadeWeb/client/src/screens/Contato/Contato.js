import React, { Component } from 'react';

import { Button } from 'react-bootstrap';
import FormItem from '../../components/FormItem';
import MapContainer from '../../components/MapContainer';
import './Contato.css';

class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: undefined,
      email: undefined,
      telefone: undefined,
      mensagem: undefined
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h1>Fale Conosco</h1>
            <h4>Preencha o formulário abaixo</h4>
            <form onSubmit={this.handleSubmit}>
              <FormItem
                id="nome"
                type="text"
                label="Nome"
                placeholder="Nome"
                value={this.state.nome}
                onChange={this.handleChange}
              />
              <FormItem
                id="email"
                type="email"
                label="Endereço de e-mail"
                placeholder="E-mail"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <FormItem
                id="telefone"
                type="tel"
                label="Telefone"
                placeholder="Telefone"
                value={this.state.telefone}
                onChange={this.handleChange}
              />
              <FormItem
                id="mensagem"
                type="text"
                label="Mensagem"
                placeholder="Digite sua mensagem aqui"
                componentClass="textarea"
                rows="5"
                value={this.state.mensagem}
                onChange={this.handleChange}
              />
              <Button block
                bsSize="large"
                disabled={false}
                type="submit"
              >
                Enviar
              </Button>
            </form>
          </div>
          <div className="col-sm-6">
            <h1>Localização</h1>
            <h4>Avenida Nove de Julho, 745, Jardim Pereira do Amparo.</h4>
            <h4>Jacareí-SP, CEP 12.327-682.</h4>
            <div className="container-mapa">
              <MapContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;
