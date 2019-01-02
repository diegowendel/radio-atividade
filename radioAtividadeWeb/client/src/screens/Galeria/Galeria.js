import React, { Component } from 'react';

import axios from 'axios';
import ModalGaleria from '../../components/ModalGaleria';
import './Galeria.css';

class Galeria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mostrarModal: false,
      url: undefined,
      imagens: []
    }

    this.abrirModalImagem = this.abrirModalImagem.bind(this);
    this.fecharModalImagem = this.fecharModalImagem.bind(this);
    this.renderImagens = this.renderImagens.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/galeria/imagens').then(res => {
      this.setState({ imagens: res.data });
    });
  }

  abrirModalImagem(url) {
    this.setState({
      mostrarModal: true,
      url: url
    });
  }

  fecharModalImagem() {
    this.setState({
      mostrarModal: false,
      url: undefined
    });
  }

  renderImagens() {
    return (
      this.state.imagens.map(imagem => (
        <div className="col-sm-6 col-md-3 col-xl-2">
          <div className="clickable gallery-card"
            onClick={(e) => this.abrirModalImagem(imagem.url)}>
            <img className="gallery-thumbnail" src={imagem.url} alt={imagem.titulo} />
          </div>
        </div>
      ))
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Galeria de imagens</h2>
        <div className="row">
          {this.renderImagens()}
        </div>
        <ModalGaleria show={this.state.mostrarModal} handleClose={this.fecharModalImagem} src={this.state.url} />
      </div>
    );
  }
}

export default Galeria;
