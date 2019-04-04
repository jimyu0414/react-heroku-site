import React, { Component } from 'react';
import {Element} from 'react-scroll';
import ImageGallery from './widgets/ImageGallery';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];

class Graphics extends Component {

  componentDidMount() {
    var Scroll = require('react-scroll');
    var scroller = Scroll.scroller;

    scroller.scrollTo('scroll-graphic', {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: 0, // Scrolls to element + 50 pixels down the page
  })
}


  render(){
    return(
      <Element name="scroll-graphic">
        <div className="portfolio-graphic">
          <ImageGallery photos = {photos} />
        </div>
      </Element>
    );
  }
}

export default Graphics;
