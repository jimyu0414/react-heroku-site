import React, { Component } from 'react';
import {Element} from 'react-scroll';
import WebCard from './widgets/InformationCard';

class Web extends Component {

  componentDidMount() {
  var Scroll = require('react-scroll');
  var scroller = Scroll.scroller;

    scroller.scrollTo('scroll-web', {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: 0, // Scrolls to element + 0 pixels down the page
  })
  }
  

  render(){
    return(

    <Element name="scroll-web">
    <div className="portfolio-web">
      <WebCard />
      <WebCard />
      <WebCard />
      <WebCard />
      <WebCard />
    </div>
      </Element>
    );
  }
}

export default Web;
