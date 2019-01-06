import React, { Component } from 'react';

import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class CarouselNoticias extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      direction: null,
      noticias: []
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.renderNoticias = this.renderNoticias.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/noticias/carousel').then(res => {
      this.setState({ noticias: res.data });
    });
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  renderNoticias() {
    return (
      this.state.noticias.map((noticia, index) => (
        <Carousel.Item className="carousel-item" key={index}>
          <img className="center-block" src={noticia.url} alt={noticia.titulo} />
        </Carousel.Item>
      ))
    );
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className="carousel-container">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}>
          {this.renderNoticias()}
        </Carousel>
      </div>
    );
  }
}

export default CarouselNoticias;
