import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const fontStyle={
    fontWeight: 'bold',
    // backgroundColor: 'gray',
    color: 'gray'
};

const items = [
  {
    src: require('../images/home.png'),
    caption: 'Exchange textbooks with other students for free!'
  },
  {
    src: require('../images/exchange.png'),
    caption: 'We match the students who have the textbooks you need and vice versa.'
  },

];

class CarouselHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }




  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
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
                <img src={item.src} alt={item.altText} height="500px" width="100%"/>
                <div className="container-fluid text-center mb-5 pt-2">
                    {/* <p style={fontStyle}>{item.caption}</p> */}
                    <h3 className="text-white">{item.caption}</h3>
                </div>
                
                {/* <CarouselCaption captionHeader={item.caption} /> */}
            </CarouselItem>

            
      );
    });

    return (

      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <div className="container mb-2 pb-2">
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        </div>
        
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselHomePage;