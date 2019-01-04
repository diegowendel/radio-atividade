import React, { Component } from 'react';

import axios from 'axios';
import Lightbox from 'react-images';
import './Galeria.css';

class Galeria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLightboxOpen: false,
      currentImage: 0,
      imagens: []
    }

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.goToPrevious = this.goToPrevious.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.renderImagens = this.renderImagens.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/galeria/imagens').then(res => {
      this.setState({ imagens: res.data });
    });
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      isLightboxOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      isLightboxOpen: false
    });
  }

  goToPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  goToNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  renderImagens() {
    return (
      this.state.imagens.map((imagem, index) => (
        <div className="col-sm-6 col-md-3 col-xl-2" key={index}>
          <div className="clickable gallery-card" onClick={(e) => this.openLightbox(index, e)}>
            <img className="gallery-thumbnail" src={imagem.src} />
            <div className="overlay"></div>
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
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.state.imagens}
          isOpen={this.state.isLightboxOpen}
          onClose={this.closeLightbox}
          onClickPrev={this.goToPrevious}
          onClickNext={this.goToNext}
        />
      </div>
    );
  }
}

export default Galeria;
