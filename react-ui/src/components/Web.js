import React, { Component } from 'react';
import {Element} from 'react-scroll';



class Web extends Component {
  componentDidMount() {
  var Scroll = require('react-scroll');
  var scroller = Scroll.scroller;

    scroller.scrollTo('scroll-portfolio-web', {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -50, // Scrolls to element + 50 pixels down the page
  })
  }
  

  render(){
    return(

    <Element name="scroll-portfolio-web">
      </Element>
    );
  }
}

export default Web;
