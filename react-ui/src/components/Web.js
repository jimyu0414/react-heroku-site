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
    const peter = [ 
      {title: 'Peteralexander Home Page', link: PAhome},
      {title: 'Product Page', link: PAprod},
      {title: 'Popup Modal', link: PAcard},
      {title: 'Category page', link: PAcat}
    ]
    const dotti = [ 
      {title: 'Dotti Home Page', link: DThome},
      {title: 'Popup / Modal', link: DTcard},
      {title: 'Menu', link: DTmenu},
      {title: 'Bag Page', link: DTbag}
    ]
    const jacquie = [ 
      {title: 'JacquiE Home Page', link: JEhome},
      {title: 'Store Page', link: JEstore},
      {title: 'Category Page', link: JEcat},
      {title: 'Sign in Page', link: JEsign}
    ]
    const justjeans = [ 
      {title: 'Just Jeans Home Page', link: JNhome},
      {title: 'Navigation', link: JNnav},
      {title: 'Popup Modal', link: JNcard},
      {title: 'Category page', link: JNsave}
    ]
    const jayjays = [ 
      {title: 'Jayjays Home Page', link: JJhome},
      {title: 'Product Page', link: JJprod},
      {title: 'Quick view / Modal', link: JJqv},
      {title: 'About page', link: JJabout}
    ]
    const portmans = [ 
      {title: 'Portmans Home Page', link: PThome},
      {title: 'Menu Page', link: PTmenu},
      {title: 'Category Page', link: PTcat},
      {title: 'Quick view', link: PTqv}
    ]
    const smiggle = [ 
      {title: 'Smiggle Home Page', link: SMhome},
      {title: 'Product Page', link: SMprod},
      {title: 'Shopping Cart', link: SMcart},
      {title: 'Category page', link: SMcat}
    ]
    return(

    <Element name="scroll-web">
    <div className="portfolio-web">
      <WebSiteCard image = {peter} navTo = 'https://www.peteralexander.com.au' />
      <WebSiteCard image = {dotti} navTo = 'https://www.dotti.com.au/shop/en/dotti'/>
      <WebSiteCard image = {jacquie} navTo = 'https://www.jacquie.com.au/shop/en/jacquie'/>
      <WebSiteCard image = {justjeans} navTo='https://www.justjeans.com.au/shop/en/justjeans'/>
      <WebSiteCard image = {jayjays} navTo='https://www.jayjays.com.au/shop/en/jayjays' />
      <WebSiteCard image = {portmans} navTo='https://www.portmans.com.au/shop/en/portmans'/>
      <WebSiteCard image = {smiggle} navTo='https://www.smiggle.com.au/shop/en/smiggle'/>
    
    
    </div>
      </Element>
    );
  }
}

export default Web;
