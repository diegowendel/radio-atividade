import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';

class CarouselNoticias extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      direction: null
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.renderNoticias = this.renderNoticias.bind(this);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  renderNoticias() {
    return (
      <Carousel.Item>
        <img
            className="carousel-imagem"
            src="img/imagem_1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
      </Carousel.Item>
    );
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className="carousel">
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
