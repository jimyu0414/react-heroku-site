import React, {Component} from 'react';
// import {Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {Element} from 'react-scroll';


class About extends Component {

  componentDidMount() {
  var Scroll = require('react-scroll');
  var scroller = Scroll.scroller;

  scroller.scrollTo('scroll-about', {
  duration: 1500,
  delay: 100,
  smooth: true,
  offset: 40, // Scrolls to element + 50 pixels down the page
})

  }

  render(){
    return(
 <Element name="scroll-about">
    <section id="about">
         <div className="row">

  <div className="three columns">

            <div className="my-avatar"></div>

           </div>

            <div className="ten columns">
              <div>
                <div>
                  <h2>About Me</h2>

                  <p>
                    I started my bachelor in Digital design in 2010. For years, I’ve been learning logo design, UI&UX design, motion graphic and web design etc.
                  <br/>
                    In 2014. I continued my study and change my subject to Master of  IT.  During my study, I have learned the basic web languages (HTML,CSS,JS) and  object  oriented concepts (Java), also some basic database managements (Oracle, MySQL). During my last year (2016), I was honoured to work out an internship project as an IOS developer and completed an on-store App written by Object-c.
                  <br/>
                    After my graduation, I started to work  on web developments .  Based on my Digital background,  I quickly  get used to work as a front-end developer. For years, I’ve been working on many inspirations of UI&UX designs and developments.
                  </p>
                </div>
              </div>



               <div className="row">

                  <div className="columns contact-details">

                     <h2>Contact Details</h2>
                     <p className="address">
   						   <span>Yu Liu</span><br/>
   						   <span> 457 St Kilda Rd,<br/>
   						         Melbourne VIC 3004
                        </span><br/>
                      <span>(61) 0410 470 100</span><br/>
                        <span>jimyu0414@gmail.com</span>
   					   </p>

                  </div>

                  <div className="columns download">
                     <p>
                        <a href={process.env.PUBLIC_URL + '/Yu.pdf'} className="button" download><i className="fa fa-download"></i>Download Resume</a>
                   </p>
                  </div>

               </div>

            </div>

         </div>

      </section>
    </Element>
    );
  }
}

export default About;
