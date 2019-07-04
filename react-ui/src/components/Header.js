import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
// import ChangingTexts from './widgets/ChangingTexts';
import TypingTexts from 'react-rotating-text';

class Header extends Component{

  render(){
    return(
      <div>
      <header id="home">

         <nav id="nav-wrap">

          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               {/* <li className="current"><NavLink to="/home">Home</NavLink></li> */}
               <li><NavLink exact to="/about">About</NavLink></li>
               <li><NavLink exact to="/resume">Resume</NavLink></li>
               <li><NavLink to="/portfolio">Portfolio</NavLink></li>
               <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

         </nav>

         <div className="row banner">
            <div className="banner-text">

               <h1 className="responsive-headline">I'm Yu Liu</h1>
               <h3 className="banner-text-title">
               <span>I'm a Melbourne based  </span>
               <span className='position-title'><TypingTexts items={['Web Designer','Front-end Developer','UI & UX Designer','Illustrator']} /> </span>
               </h3>
                 <h3>I'm always on my way creating awesome and
               effective visual identities for companies of all sizes around the globe. </h3>
               <hr />
               <ul className="social">
                  <li><a href="https://www.facebook.com/jim.liu.1884?ref=bookmarks" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/yuliu04" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="https://github.com/jimyu0414" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a></li>
                  <li><a href="https://dribbble.com/jimyu0414" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a></li>
               </ul>
            </div>
         </div>

          {/*<p className="scrolldown">
             <a className="smoothscroll" href="#about"><i className="fas fa-chevron-down"></i></a>
          </p>*/}

      </header>

    </div>
    );
  }
}

export default Header;
