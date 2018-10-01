import React, { Component } from 'react';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem
} from 'reactstrap';

const items = [
  {
    src: 'img/imagem_1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'img/imagem_2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'img/imagem_3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'img/imagem_4.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'img/imagem_5.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'img/imagem_6.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'img/imagem_7.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'img/imagem_8.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'img/imagem_9.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  }
];

class AppCarousel extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };

    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) {
      return;
    }
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  }

  previous() {
    if (this.animating) {
      return;
    }
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  }

  goToIndex(newIndex) {
    if (this.animating) {
      return;
    }
    this.setState({activeIndex: newIndex});
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >

          <div className="container">
            <div style={{padding: '0px'}}>
              <img className="d-block w-100" src={item.src} alt={item.altText} />
            </div>
          </div>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >

        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Anterior" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Próximo" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default AppCarousel;
