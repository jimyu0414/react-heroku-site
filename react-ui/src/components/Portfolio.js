import React, {Component} from 'react';
import {Element} from 'react-scroll';
import {NavLink} from 'react-router-dom';




class About extends Component {

  componentDidMount() {
  var Scroll = require('react-scroll');
  var scroller = Scroll.scroller;

    scroller.scrollTo('scroll-portfolio', {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: 50, // Scrolls to element + 50 pixels down the page
  })
  }


  render(){

    return(
       <Element name="scroll-portfolio">
      <section id="portfolio">

      <div className="portfolio--tab">
        <ul>
        <li><NavLink  to="/portfolio/web">Web</NavLink></li>
        <li><NavLink  to="/portfolio/graphics">Graphics</NavLink></li>
        <li><NavLink  to="/portfolio/videos">Videos</NavLink></li>
        </ul>
      </div>

         <div className="row">
            <div className="ten columns">

            </div>
         </div>

      </section>
    </Element>
    );
  }
}

export default About;
