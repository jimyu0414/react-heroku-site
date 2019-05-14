import React, { Component } from 'react';
import {Element} from 'react-scroll';
import WebSiteCard from './widgets/InformationCard';

import PAhome from '../img/pa-home.jpg';
import PAprod from '../img/pa-prod.jpg';
import PAcard from '../img/pa-card.jpg';
import PAcat from '../img/pa-cat.jpg';

import DThome from '../img/dt-home.jpg';
import DTcard from '../img/dt-card.jpg';
import DTmenu from '../img/dt-menu.jpg';
import DTbag from '../img/dt-bag.jpg';

import JEhome from '../img/je-home.jpg';
import JEstore from '../img/je-store.jpg';
import JEcat from '../img/je-cat.jpg';
import JEsign from '../img/je-sign.jpg';

import JNhome from '../img/jn-home.jpg';
import JNnav from '../img/jn-nav.jpg';
import JNcard from '../img/jn-card.jpg';
import JNsave from '../img/jn-save.jpg';

import JJhome from '../img/jj-home.jpg';
import JJprod from '../img/jj-prod.jpg';
import JJqv from '../img/jj-qv.jpg';
import JJabout from '../img/jj-about.jpg';

import PThome from '../img/pt-home.jpg';
import PTqv from '../img/pt-qv.jpg';
import PTcat from '../img/pt-cat.jpg';
import PTmenu from '../img/pt-menu.jpg';

import SMhome from '../img/pa-home.jpg';
import SMprod from '../img/pa-prod.jpg';
import SMcart from '../img/pa-card.jpg';
import SMcat from '../img/pa-cat.jpg';

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
      <WebSiteCard PA = {PAhome}/>
      <WebSiteCard />
      <WebSiteCard />
      <WebSiteCard />
      <WebSiteCard />
    </div>
      </Element>
    );
  }
}

export default Web;
