import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

 class DogCards extends React.Component {
  state = {
    dogs: [],
  }


  render() {

    return (
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={125}
        totalSlides={5}
      >
        <Slider className="card">
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
          <Slide index={3}>I am the fourth Slide.</Slide>
          <Slide index={4}>I am the fifth Slide.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}

export default DogCards;